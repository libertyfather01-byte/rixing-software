import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { servicesData } from '@/data/servicesData';
import logoImg from '../../../public/logo-transparent.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.companyInfo}>
          <Link href="/" className={styles.logo}>
            <Image src={logoImg} alt="Rixings Innovation Through Software" style={{ height: '96px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <p className={styles.description}>
            World-class, enterprise-grade software development. We build scalable, secure, and modern digital solutions for businesses globally.
          </p>
        </div>

        <div className={styles.linkGroup}>
          <h4 className={styles.heading}>Services</h4>
          <div className={styles.linkList}>
            {servicesData.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.linkGroup}>
          <h3 className={styles.heading}>Company</h3>
          <ul className={styles.linkList}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.linkGroup}>
          <h3 className={styles.heading}>Our Ecosystem</h3>
          <ul className={styles.linkList}>
            <li><Link href="/">Rixings Software</Link></li>
            <li><a href="https://rixing-ai-academy.vercel.app/" target="_blank" rel="noopener noreferrer">Rixings Academy</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {currentYear} Rixing Software. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
