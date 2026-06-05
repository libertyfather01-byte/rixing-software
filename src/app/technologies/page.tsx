import styles from './page.module.css';

export default function Technologies() {
  const techStacks = [
    {
      category: 'Frontend Development',
      description: 'We build responsive, fast, and accessible user interfaces using the latest frameworks.',
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Redux', 'Tailwind CSS', 'SASS/SCSS']
    },
    {
      category: 'Backend Development',
      description: 'Robust server-side engineering handling complex business logic and massive data throughput.',
      technologies: ['Node.js', 'Python', 'Django', 'FastAPI', '.NET Core', 'Java Spring Boot', 'PHP', 'Go']
    },
    {
      category: 'Mobile Development',
      description: 'Native and cross-platform applications delivering seamless mobile experiences.',
      technologies: ['Flutter', 'React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Objective-C', 'Java']
    },
    {
      category: 'Databases & Storage',
      description: 'Scalable data architectures designed for high availability and performance.',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Cassandra']
    },
    {
      category: 'Cloud & DevOps',
      description: 'Infrastructure automation and cloud-native solutions for ultimate scalability.',
      technologies: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud (GCP)', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD (GitHub Actions, Jenkins)']
    },
    {
      category: 'AI & Machine Learning',
      description: 'Advanced data models and intelligent algorithms to empower your applications.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Scikit-learn', 'Computer Vision']
    }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className="animate-fade-in">
            <h1 className={styles.heroTitle}>Our <span className="text-gradient">Technology Stack</span></h1>
            <p className={styles.heroSubtitle}>
              We are polyglot engineers. We select the right tool for the job to ensure your software is fast, scalable, and future-proof.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stacks Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.framedContainer}>
            <div className={styles.grid}>
            {techStacks.map((stack, idx) => (
              <div key={idx} className={`glass-card ${styles.card}`}>
                <h2 className={styles.categoryTitle}>{stack.category}</h2>
                <p className={styles.categoryDesc}>{stack.description}</p>
                <div className={styles.techTags}>
                  {stack.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
