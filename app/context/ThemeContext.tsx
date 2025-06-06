'use client';

import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { 
    // Initialize once mounted to avoid hydration mismatch
    setMounted(true);
    
    const isDarkMode = 
      localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }
  }, [darkMode, mounted]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};