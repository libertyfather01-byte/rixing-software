import { Building2, HeartPulse, Landmark, ShoppingBag, Truck, Plane } from 'lucide-react';
import styles from './page.module.css';

export default function Industries() {
  const industries = [
    {
      id: 'finance',
      icon: Landmark,
      title: 'Finance & Banking',
      description: 'Secure, compliant, and high-performance platforms for FinTech, banking, and insurance companies. We build trading platforms, payment gateways, and core banking systems.'
    },
    {
      id: 'healthcare',
      icon: HeartPulse,
      title: 'Healthcare & Life Sciences',
      description: 'HIPAA-compliant telemedicine platforms, electronic health records (EHR), and patient management systems that improve care delivery.'
    },
    {
      id: 'retail',
      icon: ShoppingBag,
      title: 'Retail & E-commerce',
      description: 'Scalable e-commerce ecosystems, supply chain management systems, and omnichannel retail experiences that drive sales and loyalty.'
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'Fleet management, real-time tracking, and warehouse automation software that optimizes complex supply chains.'
    },
    {
      id: 'real-estate',
      icon: Building2,
      title: 'Real Estate & PropTech',
      description: 'Property management software, virtual tour integrations, and real estate marketplaces that modernize property transactions.'
    },
    {
      id: 'travel',
      icon: Plane,
      title: 'Travel & Hospitality',
      description: 'Booking engines, property management systems, and travel loyalty programs that deliver seamless experiences for travelers.'
    }
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className="animate-fade-in">
            <h1 className={styles.heroTitle}>Industries <span className="text-gradient">We Serve</span></h1>
            <p className={styles.heroSubtitle}>
              Deep domain expertise across multiple sectors allows us to build software that addresses your specific industry challenges and regulations.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {industries.map((industry, idx) => (
              <div key={idx} className={`glass-card ${styles.card}`}>
                <div className={styles.iconWrapper}>
                  <industry.icon size={36} />
                </div>
                <h3 className={styles.title}>{industry.title}</h3>
                <p className={styles.description}>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
