import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Code2, MonitorSmartphone, Database, Cloud, Shield, CheckCircle2, ChevronRight, Play, ShieldCheck, BarChart3, Users, Activity, Bot, Smartphone, Layout } from 'lucide-react';
import styles from "./page.module.css";
import { servicesData } from "@/data/servicesData";
import { portfolioData } from "@/data/portfolioData";

const projects = [
  {
    id: '1',
    title: 'Enterprise ERP System',
    slug: 'enterprise-erp',
    clientName: 'Global Manufacturing Inc.',
    technologies: 'Next.js, Node.js, PostgreSQL',
  },
  {
    id: '2',
    title: 'Fintech Mobile App',
    slug: 'fintech-app',
    clientName: 'SecureBank Ltd.',
    technologies: 'React Native, Go, AWS',
  },
  {
    id: '3',
    title: 'AI Analytics Dashboard',
    slug: 'ai-dashboard',
    clientName: 'DataCorp Solutions',
    technologies: 'Python, React, TensorFlow',
  }
];

export default async function Home() {

  return (
    <div className={styles.page}>
      
      {/* 3D Premium Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow1}></div>
        <div className={styles.heroGlow2}></div>
        
        <div className={`container ${styles.heroContainer}`}>
          <div className={`${styles.heroContent} animate-fade-in`}>
            <div className={styles.heroBadge}>
              <span className={styles.badgePulse}></span>
              Enterprise Software Solutions
            </div>
            
            <h1 className={styles.heroTitle}>
              Architecting the <br />
              <span className="text-gradient">Future of Enterprise</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Rixing Software delivers elite, scalable, and secure technology solutions 
              designed to power the next generation of industry leaders.
            </p>
            
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className={styles.secondaryBtn}>
                View Portfolio
              </Link>
            </div>
          </div>
          
          <div className={`${styles.heroVisual}`}>
            <div className={styles.mockupDashboard}>
              {/* Dashboard Browser/App Frame */}
              <div className={styles.mockupHeader}>
                <div className={styles.macButtons}>
                  <span className={styles.macRed}></span>
                  <span className={styles.macYellow}></span>
                  <span className={styles.macGreen}></span>
                </div>
                <div className={styles.mockupUrl}>
                  <Shield size={12} className={styles.urlIcon} />
                  app.rixingsoftware.com
                </div>
              </div>
              
              <div className={styles.mockupBody}>
                {/* Mockup Sidebar */}
                <div className={styles.mockupSidebar}>
                  <div className={styles.mockupLogo}>
                    <Code size={20} className="text-primary" />
                    <span className={styles.sidebarBrand}>Rixing OS</span>
                  </div>
                  <div className={styles.mockupNav}>
                    <div className={`${styles.mockupNavItem} ${styles.mockupNavItemActive}`}>
                      <BarChart3 size={14} /> Overview
                    </div>
                    <div className={styles.mockupNavItem}>
                      <Users size={14} /> Customers
                    </div>
                    <div className={styles.mockupNavItem}>
                      <Activity size={14} /> Analytics
                    </div>
                    <div className={styles.mockupNavItem}>
                      <Cloud size={14} /> Infrastructure
                    </div>
                  </div>
                </div>

                {/* Mockup Main Content */}
                <div className={styles.mockupMain}>
                  <div className={styles.mockupTopbar}>
                    <div className={styles.mockupSearch}>
                      <span className={styles.searchText}>Search projects...</span>
                    </div>
                    <div className={styles.mockupProfile}></div>
                  </div>
                  
                  <div className={styles.mockupContentArea}>
                    <h3 className={styles.mockupWelcome}>Enterprise Dashboard</h3>
                    
                    {/* Analytics KPIs */}
                    <div className={styles.mockupStatsGrid}>
                      <div className={styles.mockupStatCard}>
                        <div className={styles.mockupStatHeader}>
                          <span className={styles.mockupStatTitle}>Total Revenue</span>
                          <span className={styles.mockupStatTrendUp}>+14.5%</span>
                        </div>
                        <div className={styles.mockupStatValue}>$2.4M</div>
                      </div>
                      <div className={styles.mockupStatCard}>
                        <div className={styles.mockupStatHeader}>
                          <span className={styles.mockupStatTitle}>Active Users</span>
                          <span className={styles.mockupStatTrendUp}>+8.2%</span>
                        </div>
                        <div className={styles.mockupStatValue}>14,234</div>
                      </div>
                      <div className={styles.mockupStatCard}>
                        <div className={styles.mockupStatHeader}>
                          <span className={styles.mockupStatTitle}>System Latency</span>
                          <span className={styles.mockupStatTrendDown}>-12ms</span>
                        </div>
                        <div className={styles.mockupStatValue}>24ms</div>
                      </div>
                    </div>

                    {/* Chart & Projects Grid */}
                    <div className={styles.mockupComplexGrid}>
                      {/* Revenue Chart Area */}
                      <div className={styles.mockupChartCard}>
                        <div className={styles.mockupCardHeader}>Platform Usage</div>
                        <div className={styles.mockupChart}>
                          <div className={styles.mockupChartBar} style={{ height: "40%" }}></div>
                          <div className={styles.mockupChartBar} style={{ height: "60%" }}></div>
                          <div className={styles.mockupChartBar} style={{ height: "45%" }}></div>
                          <div className={styles.mockupChartBar} style={{ height: "80%" }}></div>
                          <div className={styles.mockupChartBar} style={{ height: "100%", background: "var(--primary)" }}></div>
                          <div className={styles.mockupChartBar} style={{ height: "70%" }}></div>
                          <div className={styles.mockupChartBar} style={{ height: "85%" }}></div>
                        </div>
                      </div>

                      {/* Active Projects Area */}
                      <div className={styles.mockupProjectsCard}>
                        <div className={styles.mockupCardHeader}>Recent Deployments</div>
                        <div className={styles.mockupProjectList}>
                          <div className={styles.mockupProjectItem}>
                            <div className={styles.mockupStatusDotSuccess}></div>
                            <div className={styles.mockupProjectInfo}>
                              <span className={styles.mockupProjectName}>Core API v2.4</span>
                              <span className={styles.mockupProjectTime}>2 mins ago</span>
                            </div>
                          </div>
                          <div className={styles.mockupProjectItem}>
                            <div className={styles.mockupStatusDotSuccess}></div>
                            <div className={styles.mockupProjectInfo}>
                              <span className={styles.mockupProjectName}>Auth Service</span>
                              <span className={styles.mockupProjectTime}>1 hr ago</span>
                            </div>
                          </div>
                          <div className={styles.mockupProjectItem}>
                            <div className={styles.mockupStatusDotWarning}></div>
                            <div className={styles.mockupProjectInfo}>
                              <span className={styles.mockupProjectName}>DB Migration</span>
                              <span className={styles.mockupProjectTime}>Pending</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Floating Supporting Widgets (Controlled Depth) */}
            <div className={`${styles.floatingWidget} ${styles.widget1}`}>
              <ShieldCheck size={20} className="text-success" />
              <div className={styles.widgetContent}>
                <span className={styles.widgetTitle}>Security Scan</span>
                <span className={styles.widgetSub}>No vulnerabilities found</span>
              </div>
            </div>

            <div className={`${styles.floatingWidget} ${styles.widget2}`}>
              <div className={styles.widgetContent}>
                <span className={styles.widgetTitle}>Build Status</span>
                <span className={styles.widgetSub}>Production deployed</span>
              </div>
              <span className={styles.widgetBadge}>Success</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Trust Indicators */}
      <section className="section">
        <div className={`container ${styles.trustContainer}`}>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>500+</div>
            <div className={styles.trustLabel}>Enterprise Clients</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>99.99%</div>
            <div className={styles.trustLabel}>Platform Uptime</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>1,200+</div>
            <div className={styles.trustLabel}>Projects Delivered</div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustValue}>Bank-Grade</div>
            <div className={styles.trustLabel}>Security Infrastructure</div>
          </div>
        </div>
      </section>

      {/* Interactive Service Showcase */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Elite Capabilities</h2>
            <p className={styles.sectionDesc}>Comprehensive engineering practices for complex business needs.</p>
          </div>

          <div className={styles.serviceGrid}>
            {servicesData.slice(0, 4).map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.slug} className={`glass-card-interactive ${styles.serviceCard}`}>
                  <div className={styles.serviceIconWrapper}>
                    <Icon size={28} className={styles.serviceIcon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href={`/services/${service.slug}`} className={styles.serviceLink}>
                    Learn more <ChevronRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beyond Building Software Section */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Beyond Building Software.<br />
              <span className="text-gradient" style={{ display: 'inline-block', marginTop: '0.5rem' }}>Building Technology. Empowering People.</span>
            </h2>
            <p className={styles.sectionDesc}>
              At Rixings, we don't just create digital solutions.<br />
              We also help individuals and businesses develop practical AI and technology skills through Rixings Academy.
            </p>
          </div>

          <div className={styles.premiumEcosystemGrid}>
            <div className={styles.premiumCard}>
              <div className={styles.cardBg}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="Modern software development workspace" loading="lazy" />
                <div className={styles.cardOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <span className={styles.iconAccent}>💻</span> Rixings Software
                </h3>
                <p className={styles.cardDesc}>
                  Building AI-powered websites, applications, and digital solutions that help businesses innovate and grow.
                </p>
                <Link href="/services" className={styles.cardLink}>
                  Explore Services <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <a href="https://rixing-ai-academy.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.premiumCard}>
              <div className={styles.cardBg}>
                <img src="/academy-bg.png" alt="Modern African AI classroom" loading="lazy" />
                <div className={styles.cardOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <span className={styles.iconAccent}>🎓</span> Rixings Academy
                </h3>
                <p className={styles.cardDesc}>
                  Practical AI, web development, and technology education designed around real-world projects.
                </p>
                <span className={styles.cardLink}>
                  Visit Academy <ArrowRight size={18} />
                </span>
              </div>
            </a>
          </div>

          <div className={styles.ecosystemCtaArea}>
            <div className={styles.ctaGlow}></div>
            <h3 className={styles.ecosystemCtaTitle}>Ready to Build or Learn?</h3>
            <p className={styles.ecosystemCtaDesc}>
              Whether you need innovative digital solutions or want to master modern AI and technology skills, Rixings has a path for you.
            </p>
            <div className={styles.ecosystemCtaButtons}>
              <Link href="/services" className="btn-primary">
                Explore Rixings Software
              </Link>
              <a href="https://rixing-ai-academy.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit Rixings Academy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Portfolio Display */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Work</h2>
            <Link href="/portfolio" className={styles.viewAllLink}>
              View entire portfolio <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.portfolioGrid}>
            {portfolioData.slice(0, 3).map((project) => (
              project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.id} className={`glass-card-interactive ${styles.portfolioCard}`}>
                  <div className={styles.portfolioImage}>
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title} 
                      fill 
                      className={styles.portfolioImg}
                    />
                  </div>
                  <div className={styles.portfolioContent}>
                    <span className={styles.portfolioClient}>{project.category}</span>
                    <h3>{project.title}</h3>
                    <div className={styles.techTags}>
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className={styles.techTag}>{tech.trim()}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <div key={project.id} className={`glass-card-interactive ${styles.portfolioCard}`}>
                  <div className={styles.portfolioImage}>
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title} 
                      fill 
                      className={styles.portfolioImg}
                    />
                  </div>
                  <div className={styles.portfolioContent}>
                    <span className={styles.portfolioClient}>{project.category}</span>
                    <h3>{project.title}</h3>
                    <div className={styles.techTags}>
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className={styles.techTag}>{tech.trim()}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="section">
        <div className={`container ${styles.statsContainer}`}>
          <div className={`glass-card ${styles.statPanel}`}>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Enterprise Clients</div>
          </div>
          <div className={`glass-card ${styles.statPanel}`}>
            <div className={styles.statNumber}>$500M+</div>
            <div className={styles.statLabel}>Revenue Generated</div>
          </div>
          <div className={`glass-card ${styles.statPanel}`}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Global Awards</div>
          </div>
          <div className={`glass-card ${styles.statPanel}`}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>Uptime SLA</div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="section">
        <div className={`container ${styles.ctaContainer}`}>
          <div className={`glass-card ${styles.ctaCard}`}>
            <div className={styles.ctaGlow}></div>
            <h2>Ready to transform your business?</h2>
            <p>Schedule a technical consultation with our principal engineers.</p>
            <Link href="/contact" className="btn-primary">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
