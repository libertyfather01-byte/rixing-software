import { Users, Target, Award, Globe } from 'lucide-react';
import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className="animate-fade-in">
            <h1 className={styles.heroTitle}>About <span className="text-gradient">Rixing Software</span></h1>
            <p className={styles.heroSubtitle}>
              We are a global team of visionary engineers, designers, and strategists committed to building the next generation of enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className={`container ${styles.twoColumn}`}>
          <div className={styles.columnContent}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.textBlock}>
              Founded with the vision to bridge the gap between complex business challenges and scalable technology solutions, Rixing Software has grown into a premier enterprise software development agency. 
            </p>
            <p className={styles.textBlock}>
              For over 15 years, we have partnered with Fortune 500 companies and fast-growing startups to engineer robust platforms that drive operational efficiency, enhance user experiences, and accelerate digital transformation.
            </p>
          </div>
          <div className={styles.imagePlaceholder} style={{ position: 'relative', overflow: 'hidden' }}>
            <img 
              src="/about-us-hologram.png" 
              alt="African software engineers collaborating on holographic dashboard" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <p className={styles.sectionSubtitle}>The principles that guide our engineering and partnerships.</p>
          </div>
          
          <div className={styles.valuesGrid}>
            <div className={`glass-card ${styles.valueCard}`}>
              <Target size={32} className={styles.valueIcon} />
              <h3>Precision Engineering</h3>
              <p>We write clean, maintainable, and highly optimized code designed for scale and security.</p>
            </div>
            <div className={`glass-card ${styles.valueCard}`}>
              <Award size={32} className={styles.valueIcon} />
              <h3>Uncompromising Quality</h3>
              <p>Through rigorous testing and QA processes, we deliver software that performs flawlessly under pressure.</p>
            </div>
            <div className={`glass-card ${styles.valueCard}`}>
              <Globe size={32} className={styles.valueIcon} />
              <h3>Global Perspective</h3>
              <p>With a diverse team of experts from around the world, we bring global insights to local challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
