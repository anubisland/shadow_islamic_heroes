const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Parse the STORIES array with a simple brace/bracket-aware scanner
function extractStories(html) {
  const marker = 'var STORIES = [';
  const start = html.indexOf(marker);
  if (start === -1) throw new Error('STORIES array not found');

  let idx = start + marker.length;
  let depth = 0;
  let inString = false;
  let quote = null;
  let arrayStart = idx - 1; // points to '['
  let arrayEnd = -1;

  for (let i = idx; i < html.length; i++) {
    const ch = html[i];
    const prev = html[i - 1] || '';

    if (inString) {
      if (ch === quote && prev !== '\\') inString = false;
      continue;
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      inString = true;
      quote = ch;
      continue;
    }

    if (ch === '{' || ch === '[') depth++;
    if (ch === '}' || ch === ']') depth--;

    if (depth < 0) {
      arrayEnd = i;
      break;
    }
  }

  if (arrayEnd === -1) throw new Error('Could not find end of STORIES array');
  return html.slice(arrayStart, arrayEnd + 1);
}

const rawJson = extractStories(html);

// Replace JS unquoted property keys with quoted ones
const jsonStr = rawJson
  // Remove trailing comma before }
  .replace(/,(\s*[}\]])/g, '$1')
  // Wrap unquoted property keys (only safe ASCII ones)
  .replace(/([{,]\s*)([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g, '$1"$2":');

// Use Function constructor to safely evaluate (we control the source)
const stories = new Function(`"use strict"; return (${jsonStr})`)();

// Build manifest
const manifest = {};
const allTexts = [];

stories.forEach((story, storyIdx) => {
  const storyId = story.id;
  const slides = story.slides || [];
  manifest[storyId] = {
    title: story.title,
    slides: []
  };

  slides.forEach((slide, slideIdx) => {
    const nar = slide.nar || '';
    const filename = `assets/audio/hamed/${storyId}_${slideIdx}.mp3`;
    manifest[storyId].slides.push({
      index: slideIdx,
      filename: filename.replace(/\\/g, '/'),
      text: nar
    });
    allTexts.push({
      storyId,
      slideIdx,
      filename: filename.replace(/\\/g, '/'),
      text: nar
    });
  });
});

const outDir = path.join(__dirname, '..', 'assets', 'audio');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outDir, 'manifest.json'),
  JSON.stringify(manifest, null, 2),
  'utf8'
);

// Also output flat list for batch generation
fs.writeFileSync(
  path.join(outDir, 'narration_list.json'),
  JSON.stringify(allTexts, null, 2),
  'utf8'
);

// Generate a shell script for Google Cloud TTS (one command per file)
const ttsScriptLines = [];
ttsScriptLines.push('#!/bin/bash');
ttsScriptLines.push('# Generate audio files using Google Cloud Text-to-Speech');
ttsScriptLines.push('# Prerequisites: gcloud CLI installed and authenticated');
ttsScriptLines.push('# gcloud auth application-default login');
ttsScriptLines.push('#');
ttsScriptLines.push('set -e');
ttsScriptLines.push('');

allTexts.forEach((item) => {
  const outputPath = path.join(__dirname, '..', item.filename).replace(/\\/g, '/');
  const text = item.text.replace(/'/g, "'\\''"); // escape single quotes for shell
  // Truncate long text for JSON payload - gcloud supports up to ~5000 bytes
  ttsScriptLines.push(`echo "Generating: ${item.filename}"`);
  ttsScriptLines.push(
    `curl -s -X POST -H "Authorization: Bearer $(gcloud auth application-default print-access-token)"` +
    ` -H "Content-Type: application/json"` +
    ` -d '{"input":{"ssml":"<speak>${text.replace(/"/g, '\\"')}</speak>"},"voice":{"languageCode":"ar-XA","name":"ar-XA-Wavenet-D"},"audioConfig":{"audioEncoding":"MP3","speakingRate":0.9}}'` +
    ` "https://texttospeech.googleapis.com/v1/text:synthesize"` +
    ` | jq -r '.audioContent'` +
    ` | base64 --decode > "${outputPath}"`
  );
  ttsScriptLines.push('');
});

fs.writeFileSync(
  path.join(__dirname, '..', 'scripts', 'generate_audio.sh'),
  ttsScriptLines.join('\n'),
  'utf8'
);

// Also generate PowerShell version
const psScriptLines = [];
psScriptLines.push('# Generate audio files using Google Cloud Text-to-Speech');
psScriptLines.push('# Prerequisites: gcloud CLI installed and authenticated');
psScriptLines.push('# gcloud auth application-default login');
psScriptLines.push('');

allTexts.forEach((item) => {
  const outputPath = path.join(__dirname, '..', item.filename);
  const text = item.text.replace(/'/g, "''"); // escape single quotes for PowerShell
  psScriptLines.push(`Write-Host "Generating: ${item.filename}"`);
  psScriptLines.push(
    `$token = gcloud auth application-default print-access-token`
  );
  psScriptLines.push(
    `$body = @{input=@{ssml="<speak>${text.replace(/"/g, '`"')}</speak>"};voice=@{languageCode="ar-XA";name="ar-XA-Wavenet-D"};audioConfig=@{audioEncoding="MP3";speakingRate=0.9}} | ConvertTo-Json`
  );
  psScriptLines.push(
    `$result = Invoke-RestMethod -Uri "https://texttospeech.googleapis.com/v1/text:synthesize" -Method Post -Headers @{Authorization="Bearer $token"} -ContentType "application/json" -Body $body`
  );
  psScriptLines.push(
    `[Convert]::FromBase64String($result.audioContent) | Set-Content -Path "${outputPath}" -Encoding Byte`
  );
  psScriptLines.push('');
});

fs.writeFileSync(
  path.join(__dirname, '..', 'scripts', 'generate_audio.ps1'),
  psScriptLines.join('\n'),
  'utf8'
);

console.log('=== Narration Extraction Complete ===');
console.log(`Total stories: ${Object.keys(manifest).length}`);
const totalSlides = allTexts.length;
console.log(`Total slides with narration: ${totalSlides}`);
console.log(`Manifest: assets/audio/manifest.json`);
console.log(`Flat list: assets/audio/narration_list.json`);
console.log(`Shell script: scripts/generate_audio.sh`);
console.log(`PowerShell script: scripts/generate_audio.ps1`);
