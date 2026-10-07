'use client';

import { createContext, useCallback, useContext, useEffect } from 'react';

const STORAGE_KEY = 'portfolio-theme';

const ThemeContext = createContext({
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    let l = document.querySelector("link[data-dynamic-favicon='true']");
    if (!l) {
      l = document.createElement('link');
      l.rel = 'icon';
      l.setAttribute('data-dynamic-favicon', 'true');
      document.head.appendChild(l);
    }
    l.href = theme === 'dark' ? '/logo-white-g.png' : '/logo-black-g.png';
  } catch {
    // ignore
  }
}

/**
 * The initial theme is applied before first paint by the inline script in
 * app/layout.js (prevents a flash of the wrong theme). This provider only
 * handles changes afterwards: the toggle button, the `t` keyboard shortcut,
 * and following the OS setting until the visitor picks a theme explicitly.
 *
 * Toggle labels are switched purely via CSS on [data-theme], so no React
 * state is needed and server/client markup always matches.
 */
export default function ThemeProvider({ children }) {
  const toggleTheme = useCallback(() => {
    const next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (e.g. private mode) — theme still applies for this visit
    }
  }, []);

  // Follow OS light/dark changes until the visitor chooses a theme explicitly
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch {
        // ignore
      }
      applyTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Keyboard shortcut: press `t` to toggle theme
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== 't' && e.key !== 'T') return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;

      const el = e.target;
      if (
        el instanceof HTMLElement &&
        (el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName))
      ) {
        return;
      }

      toggleTheme();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggleTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
