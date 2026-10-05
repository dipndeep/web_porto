'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle({ className, darkLabelClassName, lightLabelClassName }) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle light/dark theme"
      aria-keyshortcuts="t"
      title="Toggle theme (t)"
    >
      {/* Only one label is visible at a time, chosen by CSS from [data-theme] */}
      <span className={darkLabelClassName}>(dark)</span>
      <span className={lightLabelClassName}>(light)</span>
    </button>
  );
}
