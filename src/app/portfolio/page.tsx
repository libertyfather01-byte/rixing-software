import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import styles from './page.module.css';

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className="animate-fade-in">
            <h1 className={styles.heroTitle}>Our <span className="text-gradient">Portfolio</span></h1>
            <p className={styles.heroSubtitle}>
              Explore our recent work. We've helped enterprises across the globe transform their digital capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {portfolioData.map((item) => (
              <div key={item.id} className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={item.imageUrl} 
                    alt={item.title} 
                    fill 
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{item.category}</span>
                    <span className={`${styles.statusBadge} ${
                      item.status === 'Live' ? styles.statusLive :
                      item.status === 'Beta' ? styles.statusBeta :
                      styles.statusDev
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                  
                  <div className={styles.techTags}>
                    {item.technologies.map((tech, i) => (
                      <span key={i} className={styles.tag}>{tech}</span>
                    ))}
                  </div>

                  {item.url && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                      Visit Project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
