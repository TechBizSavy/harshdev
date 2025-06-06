'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';
import Image from 'next/image';

export default function ThemeToggle() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeToggle must be used within a ThemeProvider');
  }

  const { darkMode, toggleTheme, mounted } = context;

  if (!mounted) {
    return <div className="toggle-theme-placeholder" style={{ width: 40, height: 40 }}></div>;
  }

  return (
    <button
      className="toggle-theme"
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Image src="/sun.svg" alt="Switch to light mode" width={24} height={24} />
      ) : (
        <Image src="/moon.svg" alt="Switch to dark mode" width={24} height={24} />
      )}
    </button>
  );
}
