# Calmi - React + RTK Query Setup

## Installation

To complete the setup, install the required dependencies:

```bash
npm install @reduxjs/toolkit react-redux react-router-dom zod
```

## Project Structure

The project follows the architecture outlined in `.amazonq/rules/architecture.md`:

```
src/
├── app/
│   └── store/
│       ├── store.ts          # Redux store configuration
│       └── hooks.ts          # Typed Redux hooks
├── components/
│   └── ui/
│       └── LanguageSelector.tsx
├── pages/
│   └── home/
│       └── HomeScreen.tsx    # Main landing page
├── services/
│   └── api/
│       └── data/
│           └── dataApi.ts    # RTK Query API service
├── utils/
│   ├── constants/
│   │   ├── api_constants.ts  # API endpoints (localhost:1000)
│   │   └── app_constants.ts  # App constants & translations
│   └── validation/
│       └── schema.ts         # Zod validation schemas
└── styles/
    └── App.css              # Main stylesheet
```

## Features Implemented

- ✅ Multi-language support (EN, FR, HI, RU, DE)
- ✅ RTK Query setup for API calls
- ✅ Zod validation schemas
- ✅ Responsive design
- ✅ Component-based architecture
- ✅ TypeScript support
- ✅ Redux state management

## API Configuration

The app is configured to use `localhost:1000` as the API base URL as specified.

## Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173`