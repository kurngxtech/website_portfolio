export interface Note {
   slug: string;
   title: string;
   titleId?: string;
   date: string;
   dateId?: string;
   readingTime: string;
   readingTimeId?: string;
   category: string;
   categoryId?: string;
   summary: string;
   summaryId?: string;
   technologies: string[];
   isPlaceholder?: boolean;
   content: string[];
}

export const notes: Note[] = [
   {
      slug: 'postgresql-row-level-security',
      title: 'What I Learned Implementing PostgreSQL Row Level Security',
      titleId: 'Penerapan Row Level Security (RLS) PostgreSQL untuk Proteksi Data Produksi',
      date: 'February 2026',
      dateId: 'Februari 2026',
      readingTime: '5 min read',
      readingTimeId: '5 menit baca',
      category: 'Security & Databases',
      categoryId: 'Keamanan & Basis Data',
      technologies: ['PostgreSQL', 'Supabase', 'RLS', 'SQL'],
      summary:
         'Why client-side role checks are never enough, and how moving authorization logic directly into PostgreSQL policies protects production data.',
      summaryId:
         'Pentingnya memindahkan logika otorisasi langsung ke dalam kebijakan PostgreSQL engine guna menjamin proteksi data produksi yang tidak dapat dimanipulasi pada sisi klien.',
      content: [
         'When building applications that interact directly with database services or BaaS platforms like Supabase, traditional application-layer authorization can leave gaps if an endpoint or client token is misconfigured.',
         'PostgreSQL Row Level Security (RLS) fundamentally changes this model by enforcing data access rules at the database engine level. Every SELECT, INSERT, UPDATE, and DELETE query is automatically evaluated against security policies tied to the authenticated user ID (`auth.uid()`).',
         'Key takeaways from production implementation:',
         '1. Enable RLS by default on every public table: `ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;`',
         '2. Write granular policies for each operational verb rather than generic "ALL" rules to maintain clear auditability.',
         '3. Always test policies using unprivileged roles to verify that unauthorized reads and writes are rejected cleanly.',
      ],
   },
   {
      slug: 'debugging-authentication-delay-production',
      title: 'Debugging an Authentication Delay in a Production Application',
      titleId: 'Investigasi & Analisis Latensi Autentikasi pada Aplikasi Produksi',
      date: 'January 2026',
      dateId: 'Januari 2026',
      readingTime: '6 min read',
      readingTimeId: '6 menit baca',
      category: 'Production Experience',
      categoryId: 'Pengalaman Produksi',
      technologies: ['React', 'Supabase', 'Auth', 'Performance'],
      summary:
         'Analyzing a multi-second login delay on Saint Ink Tattoo that caused users to repeatedly click submit, and lessons learned about auth state transitions.',
      summaryId:
         'Analisis investigatif mengenai penanganan latensi respon autentikasi pada platform Saint Ink Tattoo serta perbaikan transisi state pada antarmuka admin.',
      content: [
         'In a production environment, perceived latency often hurts usability more than actual compute time. During the development of the Saint Ink Tattoo platform, we identified a critical friction point: after submitting valid credentials, the admin portal appeared unresponsive for several seconds before transitioning into the CMS.',
         'This delay caused administrators to assume the click was lost and click multiple times, spawning redundant network requests and confusion.',
         '[TECHNICAL ROOT CAUSE AND SOLUTION TO BE DOCUMENTED — Verified implementation details will be updated once documented from the project repository].',
         'Key lesson: Always implement immediate UI feedback (loading indicators, disabled submit buttons) and audit asynchronous token verification chains to keep authentication crisp.',
      ],
   },
   {
      slug: 'lessons-from-first-production-deployment',
      title: 'What I Learned From My First Production Deployment',
      titleId: 'Wawasan Berharga dari Peluncuran Pertama ke Lingkungan Produksi',
      date: 'January 2026',
      dateId: 'Januari 2026',
      readingTime: '4 min read',
      readingTimeId: '4 menit baca',
      category: 'DevOps & Deployment',
      categoryId: 'DevOps & Deployment',
      technologies: ['Vercel', 'CI/CD', 'GitHub Actions', 'DNS'],
      summary:
         'Reflections from shipping a real client web platform to production: automated checks, environment variables, and deployment discipline.',
      summaryId:
         'Refleksi praktis dari peluncuran platform klien ke produksi: pengujian otomatis CI/CD, isolasi environment variables, serta keandalan rilis.',
      content: [
         'Deploying an application to production for a real client is a distinctly different discipline than running `npm run dev` locally.',
         '1. Environment variables must be isolated and documented: Secret keys, database URLs, and API endpoints must never touch version control, and production builds must fail fast if any required variable is absent.',
         '2. CI/CD builds confidence: Hooking up GitHub Actions to execute Playwright end-to-end tests before allowing code onto the production branch caught subtle layout and route breaks before end-users saw them.',
         '3. Deployment is not the finish line: Monitoring real client usage immediately reveals edge cases that developer testing simply never exercises.',
      ],
   },
   {
      slug: 'understanding-docker-as-a-beginner',
      title: 'Understanding Docker as a Beginner',
      titleId: 'Memahami Konsep Dasar Docker bagi Pemula',
      date: 'December 2025',
      dateId: 'Desember 2025',
      readingTime: '5 min read',
      readingTimeId: '5 menit baca',
      category: 'Cloud & Infrastructure',
      categoryId: 'Cloud & Infrastruktur',
      technologies: ['Docker', 'Linux', 'Containers', 'DevOps'],
      summary:
         'Demystifying images, containers, and ports from the perspective of an engineering student transitioning to backend infrastructure.',
      summaryId:
         'Mengurai konsep containerization, images, isolasi dependensi, dan manajemen port untuk memastikan reproduktibilitas runtime aplikasi.',
      content: [
         'For a long time, the phrase "it works on my machine" was an accepted nuisance in academic and group projects. Moving between macOS, Linux, and Windows frequently created subtle discrepancies in Node versions, database configurations, and environment variables.',
         'Docker solves this by packaging the code, runtime, system tools, and libraries into a portable image. Running a container is essentially instantiating an isolated process running within that configured environment.',
         'Understanding Dockerfiles, image layers, port binding (`-p 3000:3000`), and volume mounting provided the foundation for reproducible local development and cloud deployments.',
      ],
   },
   {
      slug: 'building-my-first-backend-api',
      title: 'Building My First Backend API',
      titleId: 'Membangun Arsitektur RESTful Backend API Pertama',
      date: 'November 2025',
      dateId: 'November 2025',
      readingTime: '6 min read',
      readingTimeId: '6 menit baca',
      category: 'Backend Engineering',
      categoryId: 'Rekayasa Backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'REST'],
      summary:
         'Core principles of RESTful architecture, HTTP status code semantics, request validation, and clean database querying.',
      summaryId:
         'Prinsip perancangan arsitektur RESTful yang disiplin, semantik kode HTTP, validasi skema request, serta efisiensi query basis data.',
      content: [
         'Building a robust API requires much more than simply returning JSON from an HTTP endpoint. It requires disciplined request validation, idempotent operations, and consistent error schemas.',
         'Key practices learned during initial backend development:',
         '- Use appropriate HTTP status codes: 200 for OK, 201 for created resources, 400 for bad requests, 401 for unauthenticated, 403 for unauthorized, 404 for not found, and 500 for unhandled exceptions.',
         '- Sanitize and validate inputs at the gateway before passing parameters to business logic or database queries.',
         '- Keep routing, controllers, and data access decoupled for testability and maintainability.',
      ],
   },
   {
      slug: 'lessons-from-ai-assisted-development',
      title: 'Lessons From Using AI-Assisted Development',
      titleId: 'Refleksi Praktis Pengembangan Berbantuan AI (AI-Assisted Development)',
      date: 'October 2025',
      dateId: 'Oktober 2025',
      readingTime: '5 min read',
      readingTimeId: '5 menit baca',
      category: 'Software Engineering',
      categoryId: 'Rekayasa Perangkat Lunak',
      technologies: ['AI Tools', 'Code Review', 'Productivity', 'Engineering Judgment'],
      summary:
         'How AI coding tools accelerate implementation while shifting the primary engineering responsibility toward review, testing, and system design.',
      summaryId:
         'Bagaimana teknologi asisten AI mempercepat implementasi kode sekaligus menegaskan tanggung jawab engineer pada telaah kode, validasi arsitektur, dan keamanan.',
      content: [
         'Modern AI coding assistants and agents have substantially accelerated boilerplate implementation, pattern exploration, and test generation.',
         'However, AI is a lever, not an autonomous engineer. Using AI effectively requires strong engineering fundamentals:',
         '1. Code verification: Never commit code generated by an AI assistant without line-by-line review, architectural validation, and automated test execution.',
         '2. Problem formulation: The quality of AI assistance directly reflects the precision of the engineering constraints provided.',
         '3. Accountability: The developer remains 100% accountable for security, reliability, performance, and correctness of every line shipped.',
      ],
   },
];

