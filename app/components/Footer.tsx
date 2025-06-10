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
          href="https://github.com/TechBizSavy" 
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
          href="https://docs.google.com/document/d/1BMBpZzXMLHTglNkYXkocAF7__cThZcvnZyZBGnHWRes/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Stack Overflow Profile"
        >
          <Image 
            src="/resume.svg" 
            alt="Resume" 
            width={25} 
            height={25}
            className={darkMode ? styles.invertIcon : ''}
          />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/harsh-chalwadi-1944052b3/" 
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
          href="https://x.com/Harsh__chalwadi" 
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
