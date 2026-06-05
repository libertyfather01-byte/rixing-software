import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';
import styles from './page.module.css';

export default async function Careers() {
  const jobs: any[] = [];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className="animate-fade-in">
            <h1 className={styles.heroTitle}>Join Our <span className="text-gradient">Team</span></h1>
            <p className={styles.heroSubtitle}>
              We are always looking for passionate engineers, designers, and innovators to help us build the future of enterprise software.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>Open Positions</h2>
          </div>

          {jobs.length === 0 ? (
            <div className={styles.emptyState}>
              <h2>No open positions right now.</h2>
              <p>We are not actively hiring at the moment, but feel free to send your resume to support@rixings.com.</p>
            </div>
          ) : (
            <div className={styles.jobList}>
              {jobs.map((job) => (
                <div key={job.id} className={`glass-card ${styles.jobCard}`}>
                  <div className={styles.jobInfo}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.metaItem}>
                        <MapPin size={16} /> {job.location}
                      </span>
                      <span className={styles.metaItem}>
                        <Clock size={16} /> {job.type.replace('_', ' ')}
                      </span>
                      <span className={styles.department}>{job.department}</span>
                    </div>
                  </div>
                  <Link href={`/careers/${job.id}`} className={styles.applyBtn}>
                    View & Apply
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
