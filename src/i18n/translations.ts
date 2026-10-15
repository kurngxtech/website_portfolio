/**
 * Centralized Internationalization Dictionary (i18n)
 * Web Portfolio - Bagus Kurniawan (kurngxtech)
 *
 * Supports English ('en') and formal, professional Bahasa Indonesia ('id').
 * Modify translations directly in this file to update vocabulary across the entire site.
 */

export type Language = 'en' | 'id';

export interface TranslationItem {
   en: string;
   id: string;
}

export const translations = {
   // ==========================================
   // NAVIGATION & GLOBAL CONTROLS
   // ==========================================
   'nav.brand': {
      en: 'kurngxtech',
      id: 'kurngxtech',
   },
   'nav.about': {
      en: 'About',
      id: 'Tentang Saya',
   },
   'nav.work': {
      en: 'Work',
      id: 'Proyek',
   },
   'nav.experience': {
      en: 'Experience',
      id: 'Pengalaman',
   },
   'nav.skills': {
      en: 'Skills',
      id: 'Keahlian',
   },
   'nav.contact': {
      en: 'Contact',
      id: 'Kontak',
   },
   'nav.cv': {
      en: 'CV',
      id: 'CV',
   },
   'nav.download_cv': {
      en: 'Download CV / Resume →',
      id: 'Unduh CV / Resume →',
   },
   'nav.menu_toggle': {
      en: 'Toggle navigation menu',
      id: 'Buka atau tutup menu navigasi',
   },

   // ==========================================
   // HERO SECTION
   // ==========================================
   'hero.badge': {
      en: 'Open to full-time opportunities',
      id: 'Terbuka untuk peluang kerja purnawaktu',
   },
   'hero.name': {
      en: "Hi!, I'm Bagus Kurniawan",
      id: 'Halo!, Saya Bagus Kurniawan',
   },
   'hero.desc': {
      en: "I am a Software Engineer focused on building reliable web applications and production-ready systems, with a growing focus on backend engineering, cloud infrastructure, and application security.",
      id: 'Saya seorang Software Engineer yang berfokus pada pengembangan aplikasi web yang andal dan sistem siap produksi, dengan minat pada backend engineering, infrastruktur cloud, serta keamanan aplikasi.',
   },
   'hero.location': {
      en: 'Based in Indonesia · Open to remote international opportunities',
      id: 'Berbasis di Indonesia · Terbuka untuk peluang kerja remote internasional',
   },
   'hero.cta_projects': {
      en: 'View Projects',
      id: 'Lihat Proyek',
   },
   'hero.cta_cv': {
      en: 'Download CV',
      id: 'Unduh CV',
   },

   // ==========================================
   // 01 / WHO I AM & WORK ETHIC (ABOUT)
   // ==========================================
   'about.eyebrow': {
      en: 'WHO I AM & WORK ETHIC',
      id: 'PROFIL & ETOS KERJA',
   },
   'about.title': {
      en: 'Who I Am & Work Ethic',
      id: 'Profil & Etos Kerja',
   },
   'about.desc': {
      en: 'Background, engineering focus, and foundational principles guiding my software development.',
      id: 'Latar belakang, fokus pengembangan, serta prinsip yang menjadi dasar dalam cara saya membangun perangkat lunak.',
   },
   'about.me_title': {
      en: 'About Me',
      id: 'Tentang Saya',
   },
   'about.me_text': {
      en: 'I’m Bagus Kurniawan, an Information Systems student and aspiring Software Engineer focused on backend development, cloud engineering, and application security. I enjoy building software that is not only functional, but also reliable, maintainable, and trustworthy in real-world use.',
      id: 'Saya Bagus Kurniawan, mahasiswa Sistem Informasi dan calon Software Engineer yang berfokus pada pengembangan backend, cloud engineering, dan keamanan aplikasi. Saya tertarik membangun perangkat lunak yang tidak hanya berfungsi dengan baik, tetapi juga andal, mudah dikembangkan, dan dapat dipercaya dalam penggunaan nyata.',
   },
   'about.work_ethic_title': {
      en: 'Work Ethic',
      id: 'Etos Kerja',
   },
   'about.work_ethic_text': {
      en: 'I believe good engineering comes from understanding the problem, building with purpose, and continuously validating the result. I work through iteration, testing, debugging, and careful review, while using AI-assisted tools to accelerate development without compromising my responsibility for the final implementation.',
      id: 'Saya percaya bahwa pengembangan yang baik dimulai dari memahami masalah, membangun solusi dengan tujuan yang jelas, dan terus memastikan hasilnya bekerja dengan baik. Saya terbiasa bekerja melalui proses iterasi, pengujian, debugging, dan review yang cermat, serta memanfaatkan tools berbasis AI untuk mempercepat pengembangan tanpa mengabaikan tanggung jawab saya terhadap hasil akhir.',
   },
   'about.details_title': {
      en: 'Personal Details',
      id: 'Informasi Pribadi',
   },
   'about.label_name': {
      en: 'Name',
      id: 'Nama',
   },
   'about.value_name': {
      en: 'Bagus Kurniawan',
      id: 'Bagus Kurniawan',
   },
   'about.label_pob': {
      en: 'Primary Focus',
      id: 'Fokus Utama',
   },
   'about.value_pob': {
      en: 'Backend & Cloud Systems',
      id: 'Sistem Backend & Cloud',
   },
   'about.label_gpa': {
      en: 'GPA',
      id: 'IPK',
   },
   'about.value_gpa': {
      en: '3.7 / 4.00',
      id: '3.7 / 4.00',
   },
   'about.label_email': {
      en: 'Email',
      id: 'Email',
   },
   'about.value_email': {
      en: 'gedebaguskurn@gmail.com',
      id: 'gedebaguskurn@gmail.com',
   },

   // ==========================================
   // 02 / SELECTED WORK / PROJECTS SECTION
   // ==========================================
   'projects.eyebrow': {
      en: 'SELECTED WORK',
      id: 'PROYEK TERPILIH',
   },
   'projects.title': {
      en: 'Featured Projects',
      id: 'Proyek Pilihan',
   },
   'projects.desc': {
      en: 'Curated engineering projects demonstrating architectural thinking, full-stack integration, and security practices.',
      id: 'Kumpulan proyek yang menunjukkan cara saya merancang sistem, mengintegrasikan berbagai teknologi, dan menerapkan praktik keamanan dalam pengembangan.',
   },
   'projects.view_all': {
      en: 'View all project documentation & archives →',
      id: 'Lihat seluruh dokumentasi & arsip proyek →',
   },
   'projects.scroll_hint': {
      en: 'Continuous showcase · Hover cards to pause and inspect →',
      id: 'Tampilan otomatis berkelanjutan · Arahkan kursor untuk menjeda dan melihat detail →',
   },
   'projects.card.role': {
      en: 'Role:',
      id: 'Peran:',
   },
   'projects.card.view_case_study': {
      en: 'View Case Study',
      id: 'Lihat Studi Kasus',
   },
   'projects.card.view_project': {
      en: 'View Project',
      id: 'Lihat Proyek',
   },
   'projects.card.open_repo': {
      en: 'Repository ↗',
      id: 'Repositori ↗',
   },
   'projects.card.live_demo': {
      en: 'Live Demo ↗',
      id: 'Demo Langsung ↗',
   },

   // ==========================================
   // 03 / EXPERIENCE SECTION
   // ==========================================
   'experience.eyebrow': {
      en: 'EXPERIENCE',
      id: 'PENGALAMAN',
   },
   'experience.title': {
      en: 'Work Experience',
      id: 'Pengalaman Kerja',
   },
   'experience.desc': {
      en: 'Hands-on software development in production team environments.',
      id: 'Pengalaman langsung dalam pengembangan perangkat lunak di lingkungan kerja dan tim pengembangan.',
   },
   'experience.badge_internship': {
      en: 'Internship',
      id: 'Magang',
   },
   'experience.badge_production': {
      en: 'Production',
      id: 'Produksi',
   },
   'experience.badge_academic': {
      en: 'Academic',
      id: 'Akademik',
   },
   'experience.badge_current': {
      en: 'Current',
      id: 'Sedang Ditempuh',
   },
   'experience.intern_title': {
      en: 'Software Development Intern',
      id: 'Software Development Intern',
   },
   'experience.intern_role': {
      en: 'Backend Developer · Saint Ink Tattoo Project',
      id: 'Backend Developer · Proyek Saint Ink Tattoo',
   },
   'experience.intern_desc': {
      en: 'Developed backend workflows, custom CMS controls, Supabase PostgreSQL Row Level Security (RLS) policies, authentication sessions, and Playwright automated testing in GitHub Actions CI for a client-facing web application.',
      id: 'Mengembangkan alur backend, fitur CMS, kebijakan Row Level Security (RLS) pada PostgreSQL di Supabase, autentikasi pengguna, serta automated testing menggunakan Playwright dalam GitHub Actions CI untuk aplikasi web yang digunakan oleh klien.',
   },
   'experience.intern_case_study': {
      en: 'Case Study →',
      id: 'Studi Kasus →',
   },
   'experience.academic_title': {
      en: 'Information Systems Degree Student',
      id: 'Mahasiswa Sistem Informasi',
   },
   'experience.academic_desc': {
      en: 'Focusing on software engineering, distributed database management, and application security.',
      id: 'Mempelajari rekayasa perangkat lunak, pengelolaan basis data, dan keamanan aplikasi.',
   },

   // ==========================================
   // 03b / ONGOING STUDY SECTION
    // ==========================================
    'study.eyebrow': {
      en: 'EDUCATION',
      id: 'PENDIDIKAN',
    },
    'study.title': {
      en: 'Ongoing Study',
      id: 'Studi Berjalan',
    },
    'study.deco': {
      en: 'EDUCATION',
      id: 'PENDIDIKAN',
    },
    'study.badge': {
      en: 'International Dual Degree',
      id: 'Dual Degree Internasional',
    },
    'study.gpa': {
      en: 'GPA 3.75 / 4.00',
      id: 'IPK 3,75 / 4,00',
    },
    'study.degree': {
      en: 'Bachelor of Information Systems',
      id: 'Sarjana Sistem Informasi',
    },
    'study.since': {
      en: '(2023 – Present)',
      id: '(2023 – Sekarang)',
    },
    'study.institutions': {
      en: 'ITB STIKOM Bali & HELP University Malaysia',
      id: 'ITB STIKOM Bali & HELP University Malaysia',
    },
    'study.desc_text': {
      en: 'Currently pursuing a Bachelor\'s degree in Information Systems through an international dual-degree partnership between ITB STIKOM Bali and HELP University Malaysia. This academic program combines internationally aligned computing education with practical software engineering knowledge and skills.',
      id: 'Saat ini menempuh pendidikan Sarjana Sistem Informasi melalui kemitraan dual degree internasional antara ITB STIKOM Bali dan HELP University Malaysia. Program ini memadukan pendidikan komputasi berstandar internasional dengan pengetahuan dan keterampilan rekayasa perangkat lunak yang praktis.',
    },
    'study.feat1_title': {
      en: 'International Standard Curriculum',
      id: 'Kurikulum Standar Internasional',
    },
    'study.feat1_desc': {
      en: 'An internationally oriented computing curriculum designed to build relevant technical competencies and prepare students for careers in the global technology industry.',
      id: 'Kurikulum komputasi berorientasi internasional yang dirancang untuk membangun kompetensi teknis yang relevan dan mempersiapkan mahasiswa berkarier di industri teknologi global.',
    },
    'study.feat2_title': {
      en: 'Applied Software Engineering',
      id: 'Rekayasa Perangkat Lunak Terapan',
    },
    'study.feat2_desc': {
      en: 'Emphasizes modern software development practices, scalable system architecture, and the practical implementation of digital solutions.',
      id: 'Menekankan praktik pengembangan perangkat lunak modern, arsitektur sistem yang skalabel, dan implementasi praktis solusi digital.',
    },
    'study.stikom_name': {
      en: 'ITB STIKOM Bali',
      id: 'ITB STIKOM Bali',
    },
    'study.stikom_location': {
      en: 'Renon, Denpasar',
      id: 'Renon, Denpasar',
    },
    'study.stikom_tag': {
      en: 'Home Campus',
      id: 'Kampus Asal',
    },
    'study.help_name': {
      en: 'HELP University',
      id: 'HELP University',
    },
    'study.help_location': {
      en: 'Subang 2, Malaysia',
      id: 'Subang 2, Malaysia',
    },
    'study.help_tag': {
      en: 'Partner Campus',
      id: 'Kampus Mitra',
    },

    // ==========================================
    // 04 / TECHNICAL SKILLS SECTION
   // ==========================================
   'skills.eyebrow': {
      en: 'TECHNICAL SKILLS',
      id: 'KEAHLIAN TEKNIS',
   },
   'skills.title': {
      en: 'Technologies & Tools',
      id: 'Teknologi & Tools',
   },
   'skills.desc': {
      en: 'Concrete tools applied across production, internship, and coursework projects.',
      id: 'Teknologi dan tools yang digunakan dalam proyek produksi, magang, dan proyek perkuliahan.',
   },
   'skills.languages': {
      en: 'Languages',
      id: 'Bahasa Pemrograman',
   },
   'skills.frontend': {
      en: 'Frontend',
      id: 'Frontend',
   },
   'skills.backend': {
      en: 'Backend',
      id: 'Backend',
   },
   'skills.databases': {
      en: 'Databases',
      id: 'Database',
   },
   'skills.testing': {
      en: 'Testing & QA',
      id: 'Testing & QA',
   },
   'skills.devops': {
      en: 'DevOps & Tools',
      id: 'DevOps & Tools',
   },

   // ==========================================
   // 05 / CONTACT & INQUIRY SECTION
   // ==========================================
   'contact.eyebrow': {
      en: 'Get in Touch',
      id: 'Hubungi Saya',
   },
   'contact.title': {
      en: 'Contact Me',
      id: 'Kontak Saya',
   },
   'contact.desc': {
      en: '',
      id: '',
   },
   'contact.direct_heading': {
      en: 'Direct Communication',
      id: 'Kontak Langsung',
   },
   'contact.email_label': {
      en: 'Email Address',
      id: 'Alamat Email',
   },
   'contact.cv_label': {
      en: 'Curriculum Vitae',
      id: 'Curriculum Vitae',
   },
   'contact.view_cv': {
      en: 'View / Download CV →',
      id: 'Lihat / Unduh CV →',
   },
   'contact.form_heading': {
      en: 'Send a Direct Message',
      id: 'Kirim Pesan Langsung',
   },
   'contact.response_time': {
      en: 'Response: 24-48h',
      id: 'Respons: 24–48 jam',
   },
   'contact.field_name': {
      en: 'Your Name',
      id: 'Nama Anda',
   },
   'contact.placeholder_name': {
      en: 'Alex Smith',
      id: 'Nama lengkap Anda',
   },
   'contact.error_name': {
      en: 'Please enter your name.',
      id: 'Silakan masukkan nama Anda.',
   },
   'contact.field_email': {
      en: 'Your Email',
      id: 'Email Anda',
   },
   'contact.placeholder_email': {
      en: 'alex@company.com',
      id: 'nama@perusahaan.com',
   },
   'contact.error_email': {
      en: 'Please enter a valid email.',
      id: 'Silakan masukkan alamat email yang valid.',
   },
   'contact.field_message': {
      en: 'Message',
      id: 'Pesan',
   },
   'contact.placeholder_message': {
      en: 'Tell me about your team, system requirements, or open engineering role...',
      id: 'Ceritakan tentang tim, kebutuhan sistem, atau posisi engineering yang tersedia...',
   },
   'contact.error_message': {
      en: 'Please include a message with at least 10 characters.',
      id: 'Silakan isi pesan dengan minimal 10 karakter.',
   },
   'contact.form_success': {
      en: 'Thank you for reaching out! Your message was validated.',
      id: 'Terima kasih telah menghubungi saya. Pesan Anda berhasil dikirim.',
   },
   'contact.submit_button': {
      en: 'Send Message',
      id: 'Kirim Pesan',
   },

   // ==========================================
   // FOOTER & COPYRIGHT
   // ==========================================
   'footer.tagline': {
      en: 'Software Engineer · Building reliable systems',
      id: 'Software Engineer · Membangun sistem yang andal',
   },
   'footer.built_with': {
      en: 'Built with Astro · TypeScript · Tailwind CSS',
      id: 'Dibangun dengan Astro · TypeScript · Tailwind CSS',
   },
   'footer.resume': {
      en: 'Resume / CV',
      id: 'Resume / CV',
   },
   'footer.copyright': {
      en: '© 2026 Bagus Kurniawan. All rights reserved.',
      id: '© 2026 Bagus Kurniawan. Seluruh hak cipta dilindungi.',
   },

   // ==========================================
   // COMMON & SHARED ACTIONS
   // ==========================================
   'common.skip_to_content': {
      en: 'Skip to content',
      id: 'Lewati ke konten utama',
   },
   'common.back': {
      en: '← Back',
      id: '← Kembali',
   },
} as const;

export type TranslationKey = keyof typeof translations;

/**
 * Server-side / SSG translation helper for Astro templates.
 * Defaults to 'en' during initial page generation.
 */
export function t(key: TranslationKey, lang: Language = 'en'): string {
   const item = translations[key];
   if (!item) return key;
   return item[lang] || item['en'] || key;
}

/**
 * Dynamic lookup helper for client-side scripts.
 * Supports string keys safely.
 */
export function getTranslation(key: string, lang: Language): string | null {
   const item = (translations as Record<string, TranslationItem | undefined>)[key];
   if (!item) return null;
   return item[lang] || item['en'] || null;
}