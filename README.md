# KS Baseplate Native (Bleeding Edge)

A high-performance, offline-first React Native boilerplate built on the **New Architecture**. This template is specifically tuned for Expo 54, NativeWind v5, and PowerSync.

## 🚀 Tech Stack

- **Core:** [Expo SDK 54](https://expo.dev) (New Architecture enabled)
- **Styling:** [NativeWind v5](https://www.nativewind.dev) (Preview) + Tailwind CSS v4
- **Database:** [PowerSync](https://www.powersync.com) + `react-native-quick-sqlite` (v2.x)
- **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/)
- **Animation:** [Reanimated v4](https://docs.swmansion.com/react-native-reanimated/) + Worklets

---

## ⚠️ Prerequisites

This project uses **Preview** versions of libraries to support the New Architecture. Do not upgrade dependencies without testing, as peer dependency conflicts are common.

### Required Environment
- **Node.js:** v20+
- **JDK:** 17
- **Android SDK:** API 35
- **Android NDK:** Version 26/27

---

## 🛠 Installation

Because of SQLite/PowerSync peer dependency conflicts, use the legacy flag:

```bash
npm install --legacy-peer-deps
```

### Native Prebuild
You must run prebuild to generate the `android` and `ios` folders and register the app `scheme`.

```bash
npx expo prebuild
```

---

## 🏃‍♂️ Running the App

### Android
Ensure your emulator is running **API 24** or higher (required by PowerSync).

```bash
npx expo run:android
```

### Start Bundler (Reset Cache)
If you see a white screen or styling doesn't apply, always clear the cache:

```bash
npx expo start --clear
```

---

## 📐 Project Structure

```text
/
├── app/                  # Expo Router Pages
│   ├── _layout.tsx       # Root Layout (Injects CSS & Slot)
│   └── index.tsx         # Root Screen (Home)
├── global.css            # Tailwind v4 Entry Point
├── babel.config.js       # Minimalist v5 Babel Config
├── metro.config.js       # NativeWind v5 Metro Wrapper
├── globals.d.ts          # CSS Module Declarations
├── nativewind-env.d.ts   # NativeWind Type Definitions
└── package.json          # "main" points to expo-router/entry
```

---

## 🧩 Key Configurations (Critical)

### 1. Root Layout (`app/_layout.tsx`)
The app will render a blank screen if the layout doesn't have `flex: 1` or if the CSS isn't imported.
```tsx
import "../global.css";
// ... View style={{ flex: 1 }}
```

### 2. Metro Config
Uses lowercase `withNativewind` and automatically detects the CSS via the `_layout` import.

### 3. Babel Config
Uses `nativewind/babel` as a preset. Avoid using `jsxImportSource: "nativewind"` as it is deprecated in the latest NW v5 previews.

---

## 🐛 Troubleshooting

- **White Screen:** Restart the Android Emulator and run `npx expo start --clear`.
- **CSS Not Loading:** Verify `global.css` has `@import "nativewind/theme";`.
- **Linking Warning:** Ensure `scheme` is defined in `app.json` and run `npx expo prebuild`.
