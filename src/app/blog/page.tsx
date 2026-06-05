import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { blogData } from '@/data/blogData';
import styles from './page.module.css';

export default function Blog() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className="animate-fade-in">
            <h1 className={styles.heroTitle}>Our <span className="text-gradient">Blog</span></h1>
            <p className={styles.heroSubtitle}>
              Insights, engineering practices, and industry news from the Rixing Software team.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {blogData.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className={styles.postCard}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.description}</p>
                  
                  <div className={styles.techTags}>
                    {post.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.readMoreContainer}>
                    <span className={styles.readMore}>Read Article &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
