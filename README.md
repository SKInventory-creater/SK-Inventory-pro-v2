# SK Inventory Pro v2

Cloud Inventory Management System

## Overview

SK Inventory Pro v2 is a production inventory application built with:

- Capacitor 7
- Vite
- Firebase Authentication
- Cloud Firestore
- HTML / CSS / JavaScript ES Modules


## Features

- Myanmar UI
- Admin / Staff Login
- Dashboard
- Bundle Management
- Item Management
- Search
- Daily / Monthly Reports
- Settings
- Cloud Backup / Restore


## Requirements

- Node.js 22 LTS
- npm
- Android Studio (for local Android build)
- Firebase Account


## Installation

Clone Repository:

```bash
git clone https://github.com/SKInventory-creater/SK-Inventory-Pro-v2.git

Install Packages:

npm install

Firebase Setup

Create ".env" file:

VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=sk-inventory-pro
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

Development

Run Vite:

npm run dev

Build

Create Production Build:

npm run build

Android APK Build

Sync Capacitor:

npx cap sync android

Build APK:

cd android

./gradlew assembleDebug

Firebase Collections

users
bundles
items
settings
logs

Version

SK Inventory Pro v2.0.0
