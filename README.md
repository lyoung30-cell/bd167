# FuelTrack — Food & Sports Planner

This folder contains the complete GitHub Pages package using the same file layout as the example repository.

## Upload to GitHub
1. Download and unzip this folder.
2. Upload all seven files in this folder to the root of your GitHub repository.
3. Commit the upload.
4. Open **Settings → Pages** and publish from the `main` branch and `/ (root)`.
5. Open the Pages URL GitHub gives you.

## Files
- `index.html` — complete working FuelTrack app.
- `manifest.json` — installable web-app settings.
- `sw.js` — offline cache service worker.
- `icon-192.png` and `icon-512.png` — app icons.
- `goldline_daily_hub.tsx` — optional React companion source; GitHub Pages runs the standalone `index.html` and does not compile this TSX file.
- `README.md` — setup instructions.

The app saves meal selections and water tracking in the current browser's local storage; those values do not automatically sync across devices. GitHub Pages hosts a website/PWA, not a native App Store app.
