import { notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Zap, Cpu, ExternalLink, Box } from 'lucide-react';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

// Dynamically Generate Static Params for ultra-fast performance
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Dynamically Generate SEO Metadata
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const service = servicesData.find((s) => s.slug === params.slug);
  
  if (!service) {
    return { title: 'Service Not Found | Rixing Software' };
  }

  return {
    title: service.seoMetadata.title,
    description: service.seoMetadata.description,
    openGraph: {
      title: service.seoMetadata.title,
      description: service.seoMetadata.description,
      type: 'website',
    },
  };
}

export default async function ServicePage(props: Props) {
  const params = await props.params;
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className={styles.servicePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow}></div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.iconWrapper}>
            <Icon size={40} strokeWidth={1.5} />
          </div>
          <h1 className={styles.heroTitle}>{service.title}</h1>
          <p className={styles.heroSubtitle}>{service.description}</p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className={`container ${styles.contentGrid}`}>
        
        {/* Left: Detailed Information */}
        <div className={styles.mainColumn}>
          <div className={styles.overviewSection}>
            <p className={styles.longDesc}>{service.longDescription}</p>
          </div>

          <div className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>
              <Layers size={24} className="text-primary" /> Key Capabilities
            </h2>
            <div className={styles.featuresGrid}>
              {service.features.map((feature, i) => (
                <div key={i} className={styles.featureCard}>
                  <Zap size={20} className={styles.featureIcon} />
                  <span className={styles.featureText}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.benefitsSection}>
            <h2 className={styles.sectionTitle}>
              <CheckCircle2 size={24} className="text-primary" /> Business Value
            </h2>
            <div className={styles.benefitsGrid}>
              {service.benefits.map((benefit, i) => (
                <div key={i} className={styles.featureCard}>
                  <CheckCircle2 size={20} className={styles.featureIcon} />
                  <span className={styles.featureText}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {service.products && service.products.length > 0 && (
            <div className={styles.productsSection}>
              <h2 className={styles.sectionTitle}>
                <Box size={24} className="text-primary" /> Software Solutions Built by Rixing Software
              </h2>
              <div className={styles.productsGrid}>
                {service.products.map((product, i) => (
                  <div key={i} className={styles.productCard}>
                    <div className={styles.productImageContainer}>
                      <Image 
                        src={product.imageUrl} 
                        alt={product.name}
                        fill
                        className={styles.productImage}
                      />
                    </div>
                    <div className={styles.productContent}>
                      <div className={styles.productHeader}>
                        <h3 className={styles.productTitle}>{product.name}</h3>
                        <span className={`${styles.productBadge} ${
                          product.status === 'Live' ? styles.badgeLive :
                          product.status === 'Beta' ? styles.badgeBeta :
                          styles.badgeDevelopment
                        }`}>
                          {product.status}
                        </span>
                      </div>
                      <p className={styles.productDescription}>{product.description}</p>
                      <a href={product.url} target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                        Visit Software <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Sticky Sidebar (Tech Stack + CTA) */}
        <div className={styles.sidebarColumn}>
          <div className={styles.stickySidebar}>
            
            <div className={styles.technologiesSection}>
              <h3 className={styles.sectionTitle} style={{ fontSize: '1.25rem' }}>
                <Cpu size={20} className="text-primary" /> Technology Stack
              </h3>
              <div className={styles.techGrid}>
                {service.technologies.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.ctaCard} style={{ marginTop: '3rem' }}>
              <h3 className={styles.ctaTitle}>Accelerate Your Vision</h3>
              <p className={styles.ctaDesc}>
                Partner with our engineering team to build scalable, robust {service.title.toLowerCase()} solutions.
              </p>
              <Link href="/contact" className={`btn-primary ${styles.ctaButton}`}>
                Get an Estimate <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
