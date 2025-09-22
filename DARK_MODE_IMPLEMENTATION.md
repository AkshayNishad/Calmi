# Dark/Light Mode Implementation Guide

## Overview
This guide provides a complete implementation of dark/light mode functionality using Tailwind CSS 4 in your React application. The implementation includes theme persistence, system preference detection, and seamless theme switching.

## Current Project Structure
- **Framework**: React 19.1.1 with TypeScript
- **Styling**: Tailwind CSS 4.1.13
- **State Management**: Redux Toolkit
- **Build Tool**: Vite 7.1.6

## Implementation Steps

### 1. Theme Context Setup

Create a theme context to manage dark/light mode state:

```typescript
// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    return saved || 'system';
  });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = theme === 'dark' || (theme === 'system' && systemDark);
    
    setIsDark(shouldBeDark);
    root.classList.toggle('dark', shouldBeDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        const shouldBeDark = mediaQuery.matches;
        setIsDark(shouldBeDark);
        document.documentElement.classList.toggle('dark', shouldBeDark);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 2. Theme Toggle Component

Create a theme toggle component:

```typescript
// src/components/ui/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, isDark } = useTheme();

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};
```

### 3. Advanced Theme Selector

Create a dropdown theme selector with system option:

```typescript
// src/components/ui/ThemeSelector.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'system', label: 'System', icon: '💻' }
  ] as const;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentTheme = themes.find(t => t.value === theme);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Select theme"
      >
        <span>{currentTheme?.icon}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentTheme?.label}
        </span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 min-w-[120px]">
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              onClick={() => {
                setTheme(themeOption.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                theme === themeOption.value ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'
              } ${themeOption.value === themes[0].value ? 'rounded-t-lg' : ''} ${themeOption.value === themes[themes.length - 1].value ? 'rounded-b-lg' : ''}`}
            >
              <span>{themeOption.icon}</span>
              <span className="text-sm">{themeOption.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
```

### 4. Update Main App Structure

Update your main.tsx to include the ThemeProvider:

```typescript
// src/main.tsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store/store.ts'
import { ThemeProvider } from './contexts/ThemeContext'

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
} else {
  throw new Error('Root element not found');
}
```

### 5. Update CSS Configuration

Update your index.css to support dark mode:

```css
/* src/index.css */
@import "tailwindcss";

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
}

#root {
  width: 100%;
  min-height: 100vh;
}

/* Smooth transitions for theme changes */
.theme-transition {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

### 6. Update HomeScreen with Dark Mode Support

Here's how to update your HomeScreen component with dark mode classes:

```typescript
// Key sections to update in src/pages/home/HomeScreen.tsx

// Hero Section
<section className="relative bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 py-20 px-5 text-center overflow-hidden">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">{t.heroTitle}</h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t.heroSubtitle}</p>
  </div>
  {/* Add theme toggle in hero */}
  <div className="absolute top-4 right-4 z-20">
    <ThemeSelector />
  </div>
  {/* SVG with dark mode support */}
  <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 500 120" preserveAspectRatio="none">
    <path d="M0,60 C150,160 350,-20 500,60 L500,120 L0,120 Z" fill="currentColor" className="text-gray-50 dark:text-gray-900" />
  </svg>
</section>

// Services Section
<section className="py-16 px-5 bg-white dark:bg-gray-900">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">{t.servicesTitle}</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{t.service1Title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{t.service1Desc}</p>
        <button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors">
          {t.service1Button}
        </button>
      </div>
      {/* Repeat for other service cards */}
    </div>
  </div>
</section>
```

### 7. Tailwind CSS 4 Configuration

Create a tailwind.config.js file if it doesn't exist:

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom color palette that works well in both themes
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          900: '#4c1d95',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
```

### 8. Redux Integration (Optional)

If you want to manage theme state in Redux:

```typescript
// src/features/theme/themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  isDark: boolean;
}

const initialState: ThemeState = {
  theme: (localStorage.getItem('theme') as Theme) || 'system',
  isDark: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
    setIsDark: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
  },
});

export const { setTheme, setIsDark } = themeSlice.actions;
export default themeSlice.reducer;
```

## Usage Examples

### Basic Theme Toggle
```typescript
import { ThemeToggle } from '../components/ui/ThemeToggle';

// In your component
<ThemeToggle />
```

### Advanced Theme Selector
```typescript
import { ThemeSelector } from '../components/ui/ThemeSelector';

// In your component
<ThemeSelector />
```

### Using Theme in Components
```typescript
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { isDark, theme } = useTheme();
  
  return (
    <div className={`p-4 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      Current theme: {theme}
    </div>
  );
};
```

## Dark Mode Class Patterns

### Common Patterns for Your Components:

```css
/* Backgrounds */
bg-white dark:bg-gray-900
bg-gray-50 dark:bg-gray-800
bg-gray-100 dark:bg-gray-700

/* Text Colors */
text-gray-900 dark:text-gray-100
text-gray-600 dark:text-gray-300
text-gray-500 dark:text-gray-400

/* Borders */
border-gray-200 dark:border-gray-700
border-gray-300 dark:border-gray-600

/* Buttons */
bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600

/* Cards/Surfaces */
bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700
```

## Performance Considerations

1. **Theme Persistence**: Uses localStorage for theme preference persistence
2. **System Preference**: Automatically detects and responds to system theme changes
3. **Smooth Transitions**: CSS transitions for seamless theme switching
4. **Minimal Re-renders**: Optimized context to prevent unnecessary re-renders

## Testing

Test your implementation:

1. **Manual Testing**: Toggle between themes and verify all components update correctly
2. **System Preference**: Change your OS theme and verify 'system' mode responds
3. **Persistence**: Refresh the page and verify theme preference is maintained
4. **Accessibility**: Ensure proper ARIA labels and keyboard navigation

## Browser Support

- Modern browsers with CSS custom properties support
- Tailwind CSS 4 requirements
- localStorage support for persistence

This implementation provides a robust, accessible, and performant dark/light mode system that integrates seamlessly with your existing Tailwind CSS 4 setup.