"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { ThemeToggle } from '@/components/ThemeToggle';

import logoImg from '../../../public/logo-transparent.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle sticky header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        
        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="Rixings Innovation Through Software" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} priority />
        </Link>

        {/* Desktop Navigation Links */}
        <div className={styles.desktopMenu}>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/technologies" className={styles.navLink}>Technologies</Link>
          <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
        </div>

        {/* Authentication & Portal */}
        <div className={styles.authGroup}>
          <ThemeToggle />
          <Link href="/contact" className={styles.loginBtn}>Contact Sales</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Full-Screen Navigation */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <Link href="/" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link href="/services" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
        <Link href="/technologies" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Technologies</Link>
        <Link href="/portfolio" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
        <Link href="/about" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
        
        <div className={styles.mobileAuth}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <ThemeToggle />
          </div>
          <Link href="/contact" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Sales
          </Link>
        </div>
      </div>
    </header>
  );
}
