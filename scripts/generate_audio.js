/**
 * Google Cloud Text-to-Speech Audio Generator
 * =============================================
 *
 * Prerequisites:
 *   1. Node.js installed (v16+)
 *   2. Google Cloud project with Text-to-Speech API enabled
 *   3. Authentication set up:
 *      - Install gcloud CLI: https://cloud.google.com/sdk/docs/install
 *      - Run: gcloud auth application-default login
 *      - Or set GOOGLE_APPLICATION_CREDENTIALS env var
 *   4. Install dependency: npm install @google-cloud/text-to-speech
 *
 * Usage:
 *   node scripts/generate_audio.js
 *
 * This reads assets/audio/narration_list.json and generates MP3 files
 * for each narration text using Google Cloud TTS WaveNet voice.
 * Files are saved to assets/audio/{storyId}_{slideIndex}.mp3
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  voiceName: 'ar-XA-Wavenet-D',  // Arabic WaveNet male voice D
  languageCode: 'ar-XA',
  speakingRate: 0.9,             // Slightly slower for narration
  pitch: 0.0,
  outputFormat: 'MP3',
};

async function main() {
  // Read narration list
  const listPath = path.join(__dirname, '..', 'assets', 'audio', 'narration_list.json');
  if (!fs.existsSync(listPath)) {
    console.error('narration_list.json not found. Run scripts/extract_narration.js first.');
    process.exit(1);
  }

  const items = JSON.parse(fs.readFileSync(listPath, 'utf8'));
  console.log(`Found ${items.length} narration items to generate.`);

  // Try loading Google Cloud TTS client
  let client;
  try {
    const textToSpeech = require('@google-cloud/text-to-speech');
    client = new textToSpeech.TextToSpeechClient();
  } catch (e) {
    console.error('Failed to load @google-cloud/text-to-speech.');
    console.error('Install it: npm install @google-cloud/text-to-speech');
    console.error('Then run: node scripts/generate_audio.js');
    process.exit(1);
  }

  const outDir = path.join(__dirname, '..', 'assets', 'audio');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let success = 0;
  let failed = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const outputFile = path.join(__dirname, '..', item.filename);

    // Skip if already generated
    if (fs.existsSync(outputFile) && fs.statSync(outputFile).size > 1000) {
      console.log(`[${i + 1}/${items.length}] SKIP (exists): ${item.filename}`);
      success++;
      continue;
    }

    const text = item.text;
    if (!text || text.trim().length < 3) {
      console.log(`[${i + 1}/${items.length}] SKIP (empty): ${item.filename}`);
      failed++;
      continue;
    }

    console.log(`[${i + 1}/${items.length}] Generating: ${item.filename} (${text.length} chars)`);

    try {
      const request = {
        input: { ssml: `<speak>${escapeXml(text)}</speak>` },
        voice: {
          languageCode: CONFIG.languageCode,
          name: CONFIG.voiceName,
        },
        audioConfig: {
          audioEncoding: CONFIG.outputFormat,
          speakingRate: CONFIG.speakingRate,
          pitch: CONFIG.pitch,
          effectsProfileId: ['headphone-class-device'],
        },
      };

      const [response] = await client.synthesizeSpeech(request);

      // Ensure output directory exists
      const outDir2 = path.dirname(outputFile);
      if (!fs.existsSync(outDir2)) {
        fs.mkdirSync(outDir2, { recursive: true });
      }

      fs.writeFileSync(outputFile, response.audioContent, 'binary');
      console.log(`  ✓ Saved (${(response.audioContent.length / 1024).toFixed(1)} KB)`);
      success++;
    } catch (err) {
      console.error(`  ✗ Error: ${err.message}`);
      failed++;
    }

    // Small delay to avoid rate limiting
    if (i < items.length - 1) {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  console.log('\n=== Generation Complete ===');
  console.log(`Success: ${success}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${items.length}`);

  // Update manifest with file sizes
  const manifestPath = path.join(__dirname, '..', 'assets', 'audio', 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    for (const storyId in manifest) {
      for (const slide of manifest[storyId].slides) {
        const filePath = path.join(__dirname, '..', slide.filename);
        if (fs.existsSync(filePath)) {
          slide.size = fs.statSync(filePath).size;
          slide.duration = estimateDuration(slide.text);
        }
      }
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log('Manifest updated with file sizes.');
  }
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function estimateDuration(text) {
  // Rough estimate: ~4 chars per second for Arabic narration
  return Math.ceil((text.length / 4) * 1000);
}

main().catch(console.error);
