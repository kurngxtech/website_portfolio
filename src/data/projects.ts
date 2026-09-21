export interface Project {
   slug: string;
   title: string;
   titleId?: string;
   category: string;
   categoryId?: string;
   description: string;
   descriptionId?: string;
   featured: boolean;
   thumbnail?: string;
   technologies: string[];
   role: string;
   roleId?: string;
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
      titleId: 'Saint Ink Tattoo',
      category: 'Production Web Platform · Custom CMS',
      categoryId: 'Platform Web Produksi · CMS Kustom',
      description:
         'A production web platform developed during an internship providing a public-facing landing page and a custom CMS allowing administrators to manage content safely without direct database access.',
      descriptionId:
         'Platform web skala produksi yang dikembangkan pada masa magang industri, mencakup landing page publik serta panel manajemen konten (CMS) internal untuk tata kelola data secara aman tanpa intervensi basis data langsung.',
      featured: true,
      thumbnail: '/images/project-saint-ink.svg',
      technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Playwright', 'GitHub Actions', 'Vercel'],
      role: 'Backend Developer',
      roleId: 'Backend Developer',
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
      titleId: 'Sistem Pemesanan Tiket Bioskop',
      category: 'Multi-role Web Application',
      categoryId: 'Aplikasi Web Multi-Peran',
      description:
         'A multi-role cinema booking platform designed around distinct, role-tailored workflows for customers, cinema organizers, and system administrators.',
      descriptionId:
         'Platform reservasi bioskop multi-peran yang dirancang dengan pemisahan hak akses dan alur kerja terstruktur untuk pelanggan, pihak pengelola bioskop, serta administrator sistem.',
      featured: true,
      thumbnail: '/images/project-cinema.svg',
      technologies: ['Angular', 'TypeScript', 'MongoDB'],
      role: 'Full-Stack Developer',
      roleId: 'Full-Stack Developer',
      team: 'Academic Project Team',
      year: '2025',
      status: 'Completed Academic Project',
      context: 'University Coursework & System Architecture Study',
      repositoryUrl: 'https://github.com/kurngxtech/',
      repositoryNote: 'Repository link on profile',
      highlights: [
         'Distinct role architectures for Customer, Organizer, and Admin workflows',
         'Browse movie catalogs, screen schedules, and seat reservations',
         'Organizer dashboard for screening management',
         'Administrative controls for system oversight',
      ],
      rolesBreakdown: [
         {
            role: 'Customer',
            description: 'Public-facing user journey focused on movie discovery and ticket booking.',
            capabilities: [
               'Browse currently showing and upcoming movies',
               'Select screening dates, cinema halls, and showtimes',
               'Interactive seat selection and reservation',
               'Booking summary and order confirmation',
            ],
         },
         {
            role: 'Cinema Organizer',
            description: 'Operational portal for managing films and hall scheduling.',
            capabilities: [
               'Manage movie listings and screening schedules',
               'Monitor hall allocations and availability',
               'View booking updates and organizer statistics',
            ],
         },
         {
            role: 'Admin',
            description: 'System-wide governance and operational oversight.',
            capabilities: [
               'User role and access administration',
               'System configurations and master data control',
               'Audit and activity monitoring',
            ],
         },
      ],
   },
   {
      slug: 'smartwaste',
      title: 'SmartWaste',
      titleId: 'SmartWaste',
      category: 'Food Waste Management Web Application',
      categoryId: 'Aplikasi Web Manajemen Limbah Pangan',
      description:
         'A web application designed to help maximize food utilization and reduce unnecessary food waste through tracking, planning, and community sharing.',
      descriptionId:
         'Aplikasi web manajemen bahan makanan yang dirancang untuk mengoptimalkan pemanfaatan stok pangan serta menekan pemborosan melalui pemantauan berkala dan koordinasi distribusi.',
      featured: true,
      thumbnail: '/images/project-smartwaste.svg',
      technologies: ['Angular', 'TypeScript', 'MongoDB'],
      role: 'Web Application Developer',
      roleId: 'Web Application Developer',
      team: 'Academic Project Team',
      year: '2025',
      status: 'Completed Academic Project',
      context: 'Sustainable Computing Academic Initiative',
      repositoryUrl: 'https://github.com/kurngxtech/',
      repositoryNote: 'Repository link on profile',
      highlights: [
         'Food inventory tracking with expiration notifications',
         'Utilization suggestions to minimize domestic waste',
         'Community distribution and sharing workflow',
      ],
   },
   {
      slug: 'android-health',
      title: 'Android Health Tracking',
      titleId: 'Aplikasi Pelacak Kesehatan Android',
      category: 'Android Mobile Application',
      categoryId: 'Aplikasi Mobile Android Native',
      description:
         'A native Android mobile application built with Kotlin designed for daily health habit logging and personal metric monitoring.',
      descriptionId:
         'Aplikasi mobile Android native berbasis Kotlin yang dirancang untuk pencatatan kebiasaan kesehatan harian dan pemantauan metrik personal secara terstruktur.',
      featured: false,
      thumbnail: '/images/project-health.svg',
      technologies: ['Kotlin', 'Android SDK'],
      role: 'Android Developer',
      roleId: 'Android Developer',
      year: '2025',
      status: 'Completed Academic Project',
      context: 'Mobile Development Course Project',
      repositoryUrl: 'https://github.com/kurngxtech/',
      highlights: [
         'Native Android interface implementing Material Design principles',
         'Daily activity and health metric logging',
         'Local persistence and user preference management',
      ],
   },
   {
      slug: 'seed-of-hope',
      title: 'Seed of Hope Orphanage',
      titleId: 'Panti Asuhan Seed of Hope',
      category: 'Nonprofit Landing Page',
      categoryId: 'Website Organisasi Nirlaba',
      description:
         'A clean, responsive static website created to present an orphanage’s mission, activity gallery, and communication channels for donors and supporters.',
      descriptionId:
         'Website statis responsif yang dibangun untuk mempublikasikan profil, galeri kegiatan, serta transparansi saluran komunikasi bagi para donatur panti asuhan.',
      featured: false,
      thumbnail: '/images/project-seed.svg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      role: 'Frontend Developer',
      roleId: 'Frontend Developer',
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
