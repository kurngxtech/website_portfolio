export interface Project {
   slug: string;
   title: string;
   category: string;
   description: string;
   featured: boolean;
   technologies: string[];
   role: string;
   team?: string;
   year: string;
   status: string;
   context?: string;
   liveUrl?: string;
   liveUrlNote?: string;
   repositoryUrl?: string;
   repositoryNote?: string;
   limitations?: string;
   challenge?: string;
   solution?: string;
   highlights: string[];
   rolesBreakdown?: { role: string; description: string; capabilities: string[] }[];
   architectureOverview?: string[];
   securityHighlights?: string[];
   testingHighlights?: string[];
}

export const projects: Project[] = [
   {
      slug: 'saint-ink-tattoo',
      title: 'Saint Ink Tattoo',
      category: 'Production Web Platform · Custom CMS',
      description:
         'A production web platform developed during an internship providing a public-facing landing page and a custom CMS allowing administrators to manage content safely without direct database access.',
      featured: true,
      technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Playwright', 'GitHub Actions', 'Vercel'],
      role: 'Backend Developer',
      team: '2 developers',
      year: '2026',
      status: 'Deployed to Production',
      context: 'Internship & Real Client/Company Project',
      liveUrlNote: 'Deployed on Vercel (Free tier, no custom domain assigned)',
      repositoryNote: 'Private client repository (Source code cannot be published)',
      limitations:
         'Real-world user testing was limited because there were not enough volunteer users available for broader end-user testing.',
      challenge:
         'The admin login initially suffered from a usability and latency issue where successful authentication took several seconds before the CMS page became available, frequently causing administrators to click the login button repeatedly.',
      solution: '[TECHNICAL ROOT CAUSE AND SOLUTION TO BE DOCUMENTED]',
      highlights: [
         'Serverless web application architecture with React & TypeScript',
         'Custom Content Management System (CMS) for studio administrators',
         'PostgreSQL Row Level Security (RLS) ensuring strict access control',
         'Automated end-to-end testing with Playwright and GitHub Actions CI/CD',
         'Client inquiry and email system integrated into public landing page',
      ],
      architectureOverview: [
         'User Browser → React Client (Vercel Edge)',
         'Admin Portal → Protected CMS Routing with Auth Guard',
         'Backend Infrastructure → Supabase BaaS',
         'Database Layer → PostgreSQL with strict Row Level Security (RLS) policies',
         'Automation Pipeline → GitHub Actions running Playwright E2E suites on push',
      ],
      securityHighlights: [
         'Authentication managed via Supabase Auth with token-based session verification',
         'Authorization strictly enforced at the database level using PostgreSQL Row Level Security (RLS)',
         'Protected CMS administrative routes guarded against unauthenticated access',
         'Sanitized form inputs to prevent injection attacks on the public contact form',
      ],
      testingHighlights: [
         'Playwright end-to-end automation covering critical user journeys and admin login flows',
         'Automated GitHub Actions CI pipeline executing tests prior to production deployment',
         'Manual regression testing across responsive viewports before deployment to Vercel',
      ],
   },
   {
      slug: 'cinema-ticketing',
      title: 'Cinema Ticketing System',
      category: 'Multi-role Web Application',
      description:
         'A multi-role cinema booking platform designed around distinct, role-tailored workflows for customers, cinema organizers, and system administrators.',
      featured: true,
      technologies: ['Angular', 'TypeScript', 'MongoDB'],
      role: 'Full-Stack Developer [PLACEHOLDER — ROLE TO BE CONFIRMED]',
      team: 'Academic Project Team [PLACEHOLDER]',
      year: '2025',
      status: 'Completed Academic Project',
      context: 'University Coursework & System Architecture Study',
      repositoryUrl: 'https://github.com/kurngxtech/',
      repositoryNote: 'Repository link on profile [PLACEHOLDER — TO BE VERIFIED]',
      highlights: [
         'Distinct role architectures for Customer, Organizer, and Admin workflows',
         'Browse movie catalogs, screen schedules, and seat reservations',
         'Organizer dashboard for screening management [PLACEHOLDER]',
         'Administrative controls for system oversight [PLACEHOLDER]',
      ],
      rolesBreakdown: [
         {
            role: 'Customer',
            description: 'Public-facing user journey focused on movie discovery and ticket booking.',
            capabilities: [
               'Browse currently showing and upcoming movies',
               'Select screening dates, cinema halls, and showtimes',
               'Interactive seat selection and reservation [PLACEHOLDER]',
               'Booking summary and order confirmation [PLACEHOLDER]',
            ],
         },
         {
            role: 'Cinema Organizer',
            description: 'Operational portal for managing films and hall scheduling.',
            capabilities: [
               'Manage movie listings and screening schedules [PLACEHOLDER]',
               'Monitor hall allocations and availability [PLACEHOLDER]',
               'View booking updates and organizer statistics [PLACEHOLDER]',
            ],
         },
         {
            role: 'Admin',
            description: 'System-wide governance and operational oversight.',
            capabilities: [
               'User role and access administration [PLACEHOLDER]',
               'System configurations and master data control [PLACEHOLDER]',
               'Audit and activity monitoring [PLACEHOLDER]',
            ],
         },
      ],
   },
   {
      slug: 'smartwaste',
      title: 'SmartWaste',
      category: 'Food Waste Management Web Application',
      description:
         'A web application designed to help maximize food utilization and reduce unnecessary food waste through tracking, planning, and community sharing.',
      featured: true,
      technologies: ['Angular', 'TypeScript', 'MongoDB'],
      role: 'Web Application Developer [PLACEHOLDER — ROLE TO BE CONFIRMED]',
      team: 'Academic Project Team [PLACEHOLDER]',
      year: '2025',
      status: 'Completed Academic Project',
      context: 'Sustainable Computing Academic Initiative',
      repositoryUrl: 'https://github.com/kurngxtech/',
      repositoryNote: 'Repository link on profile [PLACEHOLDER — TO BE VERIFIED]',
      highlights: [
         'Food inventory tracking with expiration notifications [PLACEHOLDER]',
         'Utilization suggestions to minimize domestic waste [PLACEHOLDER]',
         'Community distribution and sharing workflow [PLACEHOLDER]',
      ],
   },
   {
      slug: 'android-health',
      title: 'Android Health Tracking',
      category: 'Android Mobile Application',
      description:
         'A native Android mobile application built with Kotlin designed for daily health habit logging and personal metric monitoring.',
      featured: false,
      technologies: ['Kotlin', 'Android SDK'],
      role: 'Android Developer [PLACEHOLDER — ROLE TO BE CONFIRMED]',
      year: '2025',
      status: 'Completed Academic Project',
      context: 'Mobile Development Course Project',
      repositoryUrl: 'https://github.com/kurngxtech/',
      highlights: [
         'Native Android interface implementing Material Design principles',
         'Daily activity and health metric logging [PLACEHOLDER]',
         'Local persistence and user preference management [PLACEHOLDER]',
      ],
   },
   {
      slug: 'seed-of-hope',
      title: 'Seed of Hope Orphanage',
      category: 'Nonprofit Landing Page',
      description:
         'A clean, responsive static website created to present an orphanage’s mission, activity gallery, and communication channels for donors and supporters.',
      featured: false,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      role: 'Frontend Developer [PLACEHOLDER — ROLE TO BE CONFIRMED]',
      year: '2024',
      status: 'Completed Community Project',
      context: 'Social Responsibility & Web Fundamentals Project',
      repositoryUrl: 'https://github.com/kurngxtech/',
      highlights: [
         'Accessible, mobile-responsive semantic layout',
         'Information architecture tailored for donor engagement',
         'Lightweight vanilla web stack optimized for zero-overhead loading',
      ],
   },
];

export const skillsData = {
   languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Kotlin'],
   frontend: ['React', 'Angular', 'Vue', 'Astro'],
   backend: ['Node.js', 'Laravel'],
   databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
   testing: ['Playwright', 'Cypress', 'Selenium'],
   devops: ['Docker', 'Ubuntu', 'Git', 'GitHub', 'GitHub Actions', 'Vercel'],
};

export const learningAreas = [
   {
      title: 'Backend Engineering',
      topics: ['APIs & RESTful Design', 'System Architecture', 'Database Optimization', 'Server-Side Development'],
      description: 'Deepening understanding of scalable services, API security, and high-performance databases.',
   },
   {
      title: 'Cloud Engineering',
      topics: ['Linux Administration', 'Docker Containerization', 'CI/CD Pipelines', 'Infrastructure Fundamentals'],
      description: 'Learning modern deployment environments, reproducible runtime configuration, and cloud architectures.',
   },
   {
      title: 'Application Security',
      topics: ['Authentication & Session Models', 'Row Level Security (RLS)', 'Secure Data Access', 'OWASP Best Practices'],
      description: 'Committed to building systems that protect sensitive user data from the ground up.',
   },
   {
      title: 'AI Engineering',
      topics: ['LLM APIs & Tool Calling', 'AI Application Architecture', 'Context Engineering', 'AI Developer Tooling'],
      description: 'Exploring reliable patterns for integrating language model capabilities into web applications.',
   },
];

