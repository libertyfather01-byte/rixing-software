export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
  tags: string[];
}

export const blogData: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable SaaS Applications',
    slug: 'building-scalable-saas-applications',
    description: 'Learn the architectural patterns and technologies we use at Rixing Software to build enterprise-grade SaaS platforms that scale to millions of users seamlessly.',
    imageUrl: '/saas-architecture.png', 
    date: '2026-06-01',
    author: 'Rixing Software',
    tags: ['SaaS', 'Architecture', 'Cloud']
  },
  {
    id: '2',
    title: 'AI in Modern Software Development',
    slug: 'ai-in-modern-software-development',
    description: 'Discover how artificial intelligence is transforming the software development lifecycle, from automated code generation to intelligent testing and deployment.',
    imageUrl: '/ai-software.png',
    date: '2026-05-24',
    author: 'Rixing Software',
    tags: ['AI', 'Engineering', 'Innovation']
  },
  {
    id: '3',
    title: 'Custom Software Engineering Approach at Rixing Software',
    slug: 'custom-software-engineering-approach',
    description: 'An inside look at our agile methodology, client collaboration framework, and quality assurance processes that ensure successful project delivery.',
    imageUrl: '/agile-engineering.png',
    date: '2026-05-15',
    author: 'Rixing Software',
    tags: ['Methodology', 'Agile', 'Development']
  },
  {
    id: '4',
    title: 'Modern Web Architecture for SaaS Platforms',
    slug: 'modern-web-architecture-for-saas',
    description: 'A deep dive into the modern frontend and backend architectures driving today\'s most successful SaaS applications, including Next.js, React, and serverless technologies.',
    imageUrl: '/web-architecture.png',
    date: '2026-05-02',
    author: 'Rixing Software',
    tags: ['Frontend', 'Next.js', 'React']
  }
];
