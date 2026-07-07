# Generate MP3 audio files using edge-tts (Microsoft Azure Neural TTS)
# Prerequisites: pip install edge-tts
#
# Usage:
#   .\scripts\generate_audio.ps1           # default: hamed
#   .\scripts\generate_audio.ps1 shakir
#   .\scripts\generate_audio.ps1 salma

$slot = $args[0]
if (-not $slot) { $slot = "hamed" }

Write-Host "=== Audio Generation (edge-tts) ===" -ForegroundColor Cyan
Write-Host "Voice slot: $slot" -ForegroundColor Yellow

# Delegate to Node.js script
node "$PSScriptRoot\generate_audio.js" $slot

if ($LASTEXITCODE -eq 0) {
    Write-Host " Done!" -ForegroundColor Green
} else {
    Write-Error "Generation failed (exit code: $LASTEXITCODE)"
}
