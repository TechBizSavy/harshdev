'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';
import styles from './Footer.module.css';

export default function Footer() {
  const context = useContext(ThemeContext);

  if (!context) {
    // If context is undefined, throw error or provide fallback
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { darkMode } = context;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        © {currentYear} Harsh Chalwadi
      </div>
      <div className={styles.socialLinks}>
        <Link 
          href="https://github.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub Profile"
        >
          <Image 
            src="/github.svg" 
            alt="GitHub" 
            width={24} 
            height={24}
            className={darkMode ? styles.invertIcon : ''}
          />
        </Link>
        <Link 
          href="https://stackoverflow.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Stack Overflow Profile"
        >
          <Image 
            src="/stack.svg" 
            alt="Stack Overflow" 
            width={24} 
            height={24}
            className={darkMode ? styles.invertIcon : ''}
          />
        </Link>
        <Link 
          href="https://linkedin.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn Profile"
        >
          <Image 
            src="/linkedin.svg" 
            alt="LinkedIn" 
            width={24} 
            height={24}
            className={darkMode ? styles.invertIcon : ''}
          />
        </Link>
        <Link 
          href="https://twitter.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter Profile"
        >
          <Image 
            src="/twitter.svg" 
            alt="Twitter" 
            width={24} 
            height={24}
            className={darkMode ? styles.invertIcon : ''}
          />
        </Link>
      </div>
    </footer>
  );
}
