# Studio Desk — Electron project

A desktop interface inspired by Google AI Studio, built with Electron, TypeScript, and Vite.

## Build on Windows

Install Node.js 22 or newer, open PowerShell in this folder, then run:

```powershell
npm install
npm run build
npx electron-builder --win nsis --x64
```

The Windows x64 NSIS installer is written to `release/`.

## Build automatically on GitHub

This repository includes `.github/workflows/build-windows.yml`.

1. Upload the contents of this `StudioDesk` folder to the root of a GitHub repository.
2. Open the repository's **Actions** tab.
3. Select **Build Studio Desk for Windows** and choose **Run workflow**.
4. When the run succeeds, open its summary and download the `StudioDesk-Windows-x64` artifact.

The workflow also runs automatically whenever you push to the `main` branch.

## API key and privacy

- Enter your Gemini API key inside the desktop app.
- Do not put API keys in source files, notebooks, GitHub commits, or ZIP archives.
- The app stores the key using Electron's `safeStorage` encryption on the computer.

## Build status

The frontend TypeScript/Vite production build has passed in the supplied build log. A successful native Windows installer build has not yet been confirmed.
