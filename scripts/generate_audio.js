/**
 * edge-tts Audio Generator (Microsoft Azure Neural TTS)
 * ======================================================
 *
 * Uses edge-tts (Python) which calls Microsoft Azure Neural TTS for free.
 * Voice: ar-SA-HamedNeural (Microsoft Hamed — Arabic Saudi Arabia, male)
 *
 * Prerequisites:
 *   1. Python 3.8+ installed
 *   2. Install: pip install edge-tts
 *
 * Usage:
 *   node scripts/generate_audio.js
 *
 * This reads assets/audio/narration_list.json and generates MP3 files
 * for each narration text using edge-tts.
 * Files are saved to assets/audio/{storyId}_{slideIndex}.mp3
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

const VOICE = 'ar-SA-HamedNeural';  // Microsoft Hamed
const PITCH = '+0Hz';
const RATE = '+0%';

function checkEdgeTTS() {
  try {
    execSync('edge-tts --help', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function escapeText(text) {
  // Escape special chars for shell command
  if (os.platform() === 'win32') {
    // Windows PowerShell: use single quotes, escape single quotes
    return text.replace(/'/g, "''");
  }
  // Unix: use single quotes, escape single quotes
  return text.replace(/'/g, "'\\''");
}

async function main() {
  // 1. Check edge-tts
  if (!checkEdgeTTS()) {
    console.error('edge-tts not found. Install it:');
    console.error('  pip install edge-tts');
    process.exit(1);
  }
  console.log(`✓ edge-tts found. Using voice: ${VOICE}\n`);

  // 2. Read narration list
  const listPath = path.join(__dirname, '..', 'assets', 'audio', 'narration_list.json');
  if (!fs.existsSync(listPath)) {
    console.error('narration_list.json not found. Run scripts/extract_narration.js first.');
    process.exit(1);
  }

  const items = JSON.parse(fs.readFileSync(listPath, 'utf8'));
  console.log(`Found ${items.length} narration items to generate.\n`);

  const isWin = os.platform() === 'win32';
  let success = 0;
  let failed = 0;
  let skipped = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const outputFile = path.join(__dirname, '..', item.filename);

    // Ensure output directory
    const outDir = path.dirname(outputFile);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    // Skip if already generated
    if (fs.existsSync(outputFile) && fs.statSync(outputFile).size > 1000) {
      console.log(`[${i + 1}/${items.length}] SKIP (exists): ${item.filename}`);
      skipped++;
      continue;
    }

    const text = item.text;
    if (!text || text.trim().length < 3) {
      console.log(`[${i + 1}/${items.length}] SKIP (empty): ${item.filename}`);
      skipped++;
      continue;
    }

    console.log(`[${i + 1}/${items.length}] Generating: ${item.filename} (${text.length} chars)`);

    try {
      // Write text to temp file to avoid shell escaping issues
      const tmpFile = path.join(os.tmpdir(), `narration_${i}.txt`);
      fs.writeFileSync(tmpFile, text, 'utf8');

      let cmd;
      if (isWin) {
        cmd = `edge-tts --voice ${VOICE} --pitch "${PITCH}" --rate "${RATE}" -f "${tmpFile}" --write-media "${outputFile}"`;
      } else {
        cmd = `edge-tts --voice ${VOICE} --pitch '${PITCH}' --rate '${RATE}' -f '${tmpFile}' --write-media '${outputFile}'`;
      }

      execSync(cmd, { stdio: 'pipe', timeout: 60000 });

      // Clean up temp file
      try { fs.unlinkSync(tmpFile); } catch(e) {}

      const sizeKB = (fs.statSync(outputFile).size / 1024).toFixed(1);
      console.log(`  ✓ Saved (${sizeKB} KB)`);
      success++;
    } catch (err) {
      console.error(`  ✗ Error: ${err.message.split('\n')[0]}`);
      failed++;
    }

    // Small delay to be nice
    if (i < items.length - 1) {
      await new Promise(r => setTimeout(r, 100));
    }
  }

  console.log('\n═══════════════════════════════');
  console.log('  Generation Complete');
  console.log('═══════════════════════════════');
  console.log(`  ✓ Success: ${success}`);
  console.log(`  ⏭  Skipped: ${skipped}`);
  console.log(`  ✗ Failed:  ${failed}`);
  console.log(`  Total:     ${items.length}`);

  // Update manifest with file sizes
  const manifestPath = path.join(__dirname, '..', 'assets', 'audio', 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    for (const storyId in manifest) {
      for (const slide of manifest[storyId].slides) {
        const fp = path.join(__dirname, '..', slide.filename);
        if (fs.existsSync(fp)) {
          slide.size = fs.statSync(fp).size;
          slide.duration = Math.ceil((slide.text.length / 4) * 1000);
        }
      }
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log('\n✓ Manifest updated with file sizes.');
  }
}

main().catch(console.error);
