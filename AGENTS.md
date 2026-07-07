# Repository Guidelines

## Project Structure & Module Organization

This repository is a content project for Arabic biographies and narrative material about lesser-known Islamic heroes. Source files live at the repository root as `.txt` manuscripts, for example `نعيم ابن مسعود.txt`, `الحباب ابن المنذر.txt`, and `مقدمة عامة للمشروع (صحابة فى الظل).txt`. `تجميعة الثمانية.txt` appears to be a combined or planning file. `README.md` provides the public project title and short description.

There is no application source tree, package manifest, generated build output, or automated test directory at present. Keep new manuscript files in the root unless a larger structure is introduced later, and use clear Arabic filenames that match the subject of the piece.

## Build, Test, and Development Commands

No build step is required. Use simple repository and text-review commands:

- `git status` checks changed files before committing.
- `git diff -- "*.txt"` reviews manuscript edits.
- `git log --oneline` inspects recent history.
- `Get-Content -Encoding UTF8 "filename.txt"` reads Arabic text correctly in PowerShell.

## Audio Narration System

The app uses **pre-generated audio files** (`assets/audio/`) instead of browser TTS. The recommended voice is **Microsoft Azure Neural** (`ar-SA-HamedNeural`, `ar-EG-ShakirNeural`).

### File structure
- `scripts/extract_narration.js` — Extracts all `nar` texts from `index.html` into `assets/audio/manifest.json` and `assets/audio/narration_list.json`
- `scripts/generate_audio.js` — Generates MP3 files from narration_list.json using Google Cloud TTS
- `assets/audio/manifest.json` — Maps each story/slide to its audio filename and text
- `assets/audio/{storyId}_{slideIdx}.mp3` — Individual narration audio files

### How it works
1. `initAudio()` checks if `assets/audio/intro_0.mp3` exists on page load (`HEAD` request)
2. If MP3 files exist (`state.hasAudio = true`), they are played directly — no API calls, works offline, consistent quality
3. If MP3 files are missing, falls back to browser `SpeechSynthesis` with a **voice selector**
4. The voice selector (`#voiceSelector`) lists all available Arabic TTS voices installed on the system — neural voices (like "Hamed" or "Shakir" from Microsoft) appear first
5. `queueNarration()` plays audio files or TTS sequentially, advancing slides in sync

### Generating audio files (optional — for offline use)
```powershell
# Option A: Microsoft Azure TTS
# Use Azure Cognitive Services to generate MP3 files
# See: https://learn.microsoft.com/azure/ai-services/speech-service/

# Option B: Google Cloud TTS (requires GCloud project)
npm install @google-cloud/text-to-speech
gcloud auth application-default login
node scripts/generate_audio.js    # generates all 95 MP3 files
```

### Regenerating after content changes
```powershell
node scripts/extract_narration.js     # re-extract texts after editing index.html
node scripts/generate_audio.js        # regenerate audio files
```

### Available Arabic system voices (browser)
The app can use whatever Arabic TTS voices are installed on the user's system. For best quality:
- **Windows 11 + Edge**: Microsoft Arabic neural voices (Hamed, Shakir, Zariyah etc.) are available
- **macOS**: Arabic voices from the system
- **Chrome**: Uses Google TTS engine
- The voice selector automatically groups neural voices first for easy choice

If tooling is added later, document the exact commands here before relying on them in reviews.

## Coding Style & Naming Conventions

Treat all prose files as UTF-8 text. Preserve Arabic right-to-left content, punctuation, and diacritics where present. Prefer descriptive filenames in Arabic, using spaces when helpful, such as `ذو النجادين.txt`. Keep headings consistent inside manuscripts and avoid mixing unrelated drafts in one biography file.

For Markdown files, use `#` headings, short paragraphs, and concise bullet lists. Do not introduce generated binary files or editor-specific metadata.

## Testing Guidelines

There are no automated tests. Review changes manually for factual accuracy, source consistency, spelling, readability, and encoding. Before submitting, open edited Arabic files in an editor that confirms UTF-8 rendering and scan the diff for accidental mojibake or replacement characters.

## Commit & Pull Request Guidelines

The current history only contains `Initial commit`, so no strict convention is established. Use short, imperative commit messages that name the content area, for example `Add biography for Rabi'a ibn Ka'b` or `Revise project introduction`.

Pull requests should include a brief summary, list the manuscript files changed, note any historical or hadith sources consulted, and include screenshots or rendered previews only if formatting changes affect presentation.

## Security & Configuration Tips

Do not commit private notes, credentials, unpublished contact details, or copyrighted source scans. When quoting historical sources, keep excerpts limited and cite the source in the manuscript or PR notes.
