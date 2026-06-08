import { Code, Cloud, Bot, Smartphone, ShieldCheck, Database, Layout } from 'lucide-react';
import React from 'react';

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  icon: React.ElementType;
  seoMetadata: {
    title: string;
    description: string;
  };
  products?: {
    name: string;
    description: string;
    status: 'Live' | 'Beta' | 'Development';
    imageUrl: string;
    url: string;
  }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: 'custom-software',
    title: 'Custom Software',
    description: 'Bespoke scalable applications engineered for extreme performance and security.',
    longDescription: 'We build enterprise-grade custom software solutions tailored to your unique business logic. Our architecture ensures zero-downtime deployments, massive horizontal scalability, and bank-grade security protocols natively integrated into the codebase.',
    features: [
      'Microservices Architecture',
      'Event-Driven Systems',
      'High-Concurrency Processing',
      'Secure Data Pipelines'
    ],
    benefits: [
      'Reduced operational costs by automating manual processes',
      'Infinite scalability to handle sudden traffic spikes',
      'Complete intellectual property ownership',
      'Seamless integration with your existing legacy systems'
    ],
    technologies: ['Next.js', 'Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker'],
    icon: Code,
    seoMetadata: {
      title: 'Custom Enterprise Software Development | Rixing Software',
      description: 'Expert custom software development services. We architect and build scalable, secure, and high-performance enterprise applications.'
    },
    products: [
      {
        name: 'popnchat',
        description: 'A seamless, high-performance messaging application designed for quick, reliable communication and media sharing.',
        status: 'Live',
        imageUrl: '/popnchat-logo.png',
        url: 'https://play.google.com/store/apps/details?id=com.Yamposki.popnchat&pcampaignid=web_share'
      },
      {
        name: 'allrounder',
        description: 'A versatile utility platform integrating multiple daily-use tools into a single, cohesive mobile experience.',
        status: 'Live',
        imageUrl: '/allrounder-logo.png',
        url: 'https://play.google.com/store/apps/details?id=com.allroundar.www&pcampaignid=web_share'
      },
      {
        name: 'schoolhive',
        description: 'An intuitive educational management platform that seamlessly connects students, teachers, and administrators.',
        status: 'Live',
        imageUrl: '/schoolhive-logo.png',
        url: 'https://play.google.com/store/apps/details?id=com.schoolhives.app'
      },
      {
        name: 'Website Generator Pro',
        description: 'A low-code SaaS tool that dynamically generates fully responsive, SEO-optimized business websites in seconds.',
        status: 'Development',
        imageUrl: '/window.svg',
        url: 'https://liberty-site-builder.vercel.app/app.html'
      },
      {
        name: 'Political Supporter Management System',
        description: 'A comprehensive CRM built specifically for political campaigns to manage donors, track engagement, and organize grassroots events.',
        status: 'Beta',
        imageUrl: '/window.svg',
        url: 'https://campaign.example.com'
      }
    ]
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Architecture',
    description: 'Cloud-native infrastructure leveraging AWS, Azure, and Google Cloud.',
    longDescription: 'Transform your infrastructure with our elite cloud engineering services. We design, migrate, and optimize cloud environments using Infrastructure as Code (IaC) to guarantee 99.99% uptime and extreme cost-efficiency.',
    features: [
      'Multi-Cloud & Hybrid Cloud deployments',
      'Kubernetes Container Orchestration',
      'Serverless Architectures',
      'Automated CI/CD Pipelines'
    ],
    benefits: [
      'Drastically reduced infrastructure costs via auto-scaling',
      'Disaster recovery and automated backups built-in',
      'Global edge caching for sub-10ms latency',
      'Enterprise security and compliance out of the box'
    ],
    technologies: ['AWS', 'Google Cloud', 'Kubernetes', 'Terraform', 'Docker', 'Vercel'],
    icon: Cloud,
    seoMetadata: {
      title: 'Cloud Architecture & Infrastructure | Rixing Software',
      description: 'Cloud-native infrastructure solutions. We architect, deploy, and manage scalable cloud systems on AWS, GCP, and Azure.'
    }
  },
  {
    slug: 'ai-integration',
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and predictive analytics systems.',
    longDescription: 'Supercharge your enterprise with custom Artificial Intelligence and Large Language Models. We securely integrate AI into your workflows, enabling predictive analytics, autonomous agents, and massive productivity gains without risking your proprietary data.',
    features: [
      'Custom LLM Fine-Tuning',
      'Retrieval-Augmented Generation (RAG)',
      'Predictive Analytics Models',
      'Computer Vision & NLP'
    ],
    benefits: [
      'Automate up to 80% of repetitive cognitive tasks',
      'Unlock hidden revenue opportunities via predictive insights',
      'Deliver hyper-personalized experiences to your customers',
      'Maintain 100% data privacy within your own VPC'
    ],
    technologies: ['PyTorch', 'TensorFlow', 'OpenAI', 'LangChain', 'Pinecone', 'Python'],
    icon: Bot,
    seoMetadata: {
      title: 'Enterprise AI & Machine Learning Services | Rixing Software',
      description: 'Custom AI integration, predictive analytics, and LLM development for enterprise productivity.'
    }
  },
  {
    slug: 'mobile-apps',
    title: 'Enterprise Mobile',
    description: 'Native iOS and Android applications for the modern workforce.',
    longDescription: 'We develop award-winning, high-performance mobile applications for iOS and Android. Our mobile solutions feature biometric security, offline-first architectures, and smooth 60fps animations for an unparalleled user experience.',
    features: [
      'Native iOS (Swift) & Android (Kotlin)',
      'Cross-Platform React Native',
      'Offline-First Data Syncing',
      'Biometric & MDM Security'
    ],
    benefits: [
      'Engage your customers with lightning-fast mobile experiences',
      'Empower remote workforces with secure internal apps',
      'Utilize native device hardware (Camera, GPS, ARKit)',
      'Rapid deployment to both App Store and Google Play'
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'GraphQL', 'Firebase', 'SQLite'],
    icon: Smartphone,
    seoMetadata: {
      title: 'Enterprise Mobile App Development | Rixing Software',
      description: 'Premium native and cross-platform mobile application development for iOS and Android.'
    }
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Lightning-fast, accessible, and SEO-optimized web applications.',
    longDescription: 'We construct complex, highly-interactive web applications using modern React frameworks. Our frontends are engineered for perfect Lighthouse scores, utilizing edge rendering and advanced caching to deliver sub-second page loads globally.',
    features: [
      'Server-Side Rendering (SSR)',
      'Progressive Web Apps (PWA)',
      'Real-time WebSockets',
      'Advanced Animations (WebGL/Framer)'
    ],
    benefits: [
      'Boost conversion rates with lightning-fast load times',
      'Dominate search engine rankings with perfect technical SEO',
      'Accessible across all devices and screen sizes',
      'Engage users with smooth, app-like micro-interactions'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'WebGL', 'Prisma'],
    icon: Layout,
    seoMetadata: {
      title: 'High-Performance Web Development | Rixing Software',
      description: 'Modern, blazing-fast web applications built with Next.js, React, and cutting-edge frontend architectures.'
    }
  }
];
