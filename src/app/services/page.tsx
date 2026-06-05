import { servicesData } from '@/data/servicesData';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Enterprise Services | Rixing Software',
  description: 'Explore our elite software engineering services including custom software development, cloud architecture, and AI integration.',
};

export default function ServicesListingPage() {
  return (
    <div className={styles.servicesPage}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>Elite Engineering Services</h1>
          <p className={styles.heroSubtitle}>
            We construct bank-grade, highly scalable software systems tailored to your enterprise requirements. Explore our core capabilities below.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container">
        <div className={styles.servicesGrid}>
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Link href={`/services/${service.slug}`} key={service.slug} className={styles.serviceCard}>
                <div className={styles.iconWrapper}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.description}</p>
                <div className={styles.serviceLink}>
                  Explore Capability <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}
