'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.nameContainer}>
        <Link href="/" className={styles.name}>
          Harsh Chalwadi
        </Link>
      </div>
      
      <nav className={styles.nav}>
        <div className={styles.navItems}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Home
          </Link>
          <Link href="/projects" className={pathname === '/projects' ? styles.active : ''}>
            Projects
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
            Contact
          </Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}