export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  status: 'Live' | 'Beta' | 'Development';
  url?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'popnchat',
    title: 'Popnchat',
    category: 'Mobile Application',
    description: 'A modern, real-time messaging application focused on secure and seamless connectivity. Built for performance and user engagement.',
    imageUrl: '/popnchat-logo.png',
    technologies: ['React Native', 'Node.js', 'WebSockets', 'Firebase'],
    status: 'Live',
    url: 'https://play.google.com/store/apps/details?id=com.Yamposki.popnchat&pcampaignid=web_share'
  },
  {
    id: 'allrounder',
    title: 'Allrounder',
    category: 'Mobile Application',
    description: 'A versatile mobile utility application designed to handle everyday tasks with maximum efficiency.',
    imageUrl: '/allrounder-logo.png',
    technologies: ['Flutter', 'Firebase', 'Node.js'],
    status: 'Live',
    url: 'https://play.google.com/store/apps/details?id=com.allroundar.www&pcampaignid=web_share'
  },
  {
    id: 'schoolhive',
    title: 'Schoolhive',
    category: 'Mobile Application',
    description: 'A comprehensive educational management platform enabling seamless communication between students, teachers, and parents.',
    imageUrl: '/schoolhive-logo.png',
    technologies: ['React Native', 'Express', 'MongoDB'],
    status: 'Live',
    url: 'https://play.google.com/store/apps/details?id=com.schoolhives.app'
  },
  {
    id: 'website-generator',
    title: 'Website Generator Platform',
    category: 'SaaS Platform',
    description: 'An AI-powered website builder that allows users to generate fully functional, responsive websites from text prompts in seconds.',
    imageUrl: '/window.svg', 
    technologies: ['Next.js', 'React', 'OpenAI', 'Tailwind CSS'],
    status: 'Beta',
    url: 'https://liberty-site-builder.vercel.app/app.html'
  },
  {
    id: 'political-supporter-management',
    title: 'Political Supporter Management System',
    category: 'Enterprise Software',
    description: 'A comprehensive CRM platform tailored for political campaigns to manage supporters, track donations, and coordinate grassroots efforts.',
    imageUrl: '/window.svg', 
    technologies: ['PostgreSQL', 'Express', 'React', 'AWS'],
    status: 'Development'
  }
];
