import { XmbCategory } from '../types';

// Crisp, authentic PS3-styled monochrome SVG icons
export const SVG_ICONS = {
  settings: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>`,
  
  profile: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
  
  skills: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/></svg>`,
  
  education: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,
  
  experience: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`,
  
  projects: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
  
  contact: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>`,

  disc: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>`,
  
  folder: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`,
  
  trophy: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>`,
  
  code: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
  
  external: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
  
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
  
  email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
};

export const XMB_CATEGORIES: XmbCategory[] = [
  // 1. SETTINGS
  {
    id: 'settings',
    label: 'Settings',
    iconSvg: SVG_ICONS.settings,
    items: [
      {
        id: 'setting-theme',
        title: 'Background Color & Theme',
        subtitle: 'Theme Settings',
        description: 'Adjust the real-time wave dynamic colors. Select from Ruby Red, Midnight Obsidian, PlayStation Cobalt, Emerald, Amber, or Violet.',
        iconSvg: SVG_ICONS.settings,
        badge: 'Customizable',
        action: { type: 'setting', payload: 'theme-picker' }
      },
      {
        id: 'setting-font',
        title: 'Display Font & Legibility',
        subtitle: 'Typography Settings',
        description: 'Cycle between high-visibility XMB font styles: PS3 Rodin Clean (Plus Jakarta Sans), High-Contrast Crisp (Inter), Console Geometric (Exo 2), and Classic Tech (Rajdhani).',
        iconSvg: SVG_ICONS.settings,
        badge: 'Live Preview',
        action: { type: 'setting', payload: 'font-picker' }
      },
      {
        id: 'setting-wave-speed',
        title: 'Wave Motion Speed',
        subtitle: 'Visual Effects',
        description: 'Modify the WebGL trigonometric simulation speed for the background silk waves (Slow, Normal, Fast).',
        iconSvg: SVG_ICONS.settings,
        action: { type: 'setting', payload: 'wave-speed-toggle' }
      },
      {
        id: 'setting-particles',
        title: 'Particle Effects',
        subtitle: 'Display Settings',
        description: 'Toggle the floating ambient PS3 dust particles and glowing motes drifting across the viewport.',
        iconSvg: SVG_ICONS.settings,
        action: { type: 'setting', payload: 'particle-toggle' }
      },
      {
        id: 'setting-sound',
        title: 'Sound Effects Volume',
        subtitle: 'Audio Settings',
        description: 'Toggle and adjust Web Audio procedural navigation clicks, confirmation chirps, and boot harmonics.',
        iconSvg: SVG_ICONS.settings,
        action: { type: 'setting', payload: 'sound-toggle' }
      },
      {
        id: 'setting-clock',
        title: 'Time & Date Format',
        subtitle: 'System Date Utility',
        description: 'Switch between 12-Hour (AM/PM) and 24-Hour digital clock display in the top-right HUD.',
        iconSvg: SVG_ICONS.settings,
        action: { type: 'setting', payload: 'clock-toggle' }
      },
      {
        id: 'setting-reboot',
        title: 'Restart System',
        subtitle: 'System Power Utility',
        description: 'Replay the boot-up sequence and return to the startup screen.',
        iconSvg: SVG_ICONS.settings,
        badge: 'Reboot',
        action: { type: 'reboot' }
      }
    ]
  },

  // 2. PROFILE
  {
    id: 'profile',
    label: 'Profile',
    iconSvg: SVG_ICONS.profile,
    items: [
      {
        id: 'profile-main',
        title: 'Ashvin Kethiswaran',
        subtitle: 'Computer Engineering • University of Ottawa',
        description: 'Fourth-year Computer Engineering student at the University of Ottawa with a strong foundation in software development, data analytics, and system automation.',
        iconSvg: SVG_ICONS.profile,
        badge: 'uOttawa',
        date: 'Class of 2026',
        tags: ['Python', 'R', 'Java', 'SQL', 'TypeScript', 'Automation'],
        action: { type: 'modal' },
        details: {
          role: 'Computer Engineering Student (BASc)',
          organization: 'University of Ottawa • Ajax / Ottawa, ON',
          gradeOrMetric: '4th Year (2022 – 2026)',
          overview: 'I’m a fourth-year Computer Engineering student at the University of Ottawa with a strong foundation in software development, data analytics, and system automation. I’ve worked with Python, R, Java, and SQL to build tools, streamline processes, and work with large datasets — whether it’s backend development, data pipelines, automation scripts, or full-stack apps, I enjoy building clean, efficient solutions that make life easier for users and teams.',
          highlights: [
            'Architected Python/pandas ETL pipelines at Curtiss-Wright, cutting manual report generation time by 80%.',
            'Built automated Power Automate workflows and custom Power Apps for the President’s Office at the Public Service Commission of Canada.',
            'Modernized national economic reporting pipelines with R, Python, Oracle, and SQL Server during a 1-year term at Statistics Canada.',
            'Languages: English (Native/Bilingual), Tamil (Native/Bilingual), French (Limited Working).'
          ],
          extraInfo: {
            'Location': 'Ajax / Ottawa, Ontario, Canada',
            'University': 'University of Ottawa (BASc, Computer Engineering)',
            'Focus': 'Software Dev, Data Pipelines & System Automation',
            'Languages': 'English, Tamil, French (Limited Working)'
          }
        }
      },
      {
        id: 'profile-about-site',
        title: 'About This Site',
        subtitle: 'PS3 XMB Homage & Architecture',
        description: 'An interactive developer portfolio built as a homage to the iconic PlayStation 3 XrossMediaBar (XMB), complete with real-time WebGL silk waves and procedural audio.',
        iconSvg: SVG_ICONS.disc,
        badge: 'Homage',
        date: '2026',
        tags: ['TypeScript', 'WebGL', 'GLSL', 'Web Audio API', 'Vite'],
        action: { type: 'modal' },
        details: {
          role: 'Interactive Console Portfolio',
          organization: 'Homage to PlayStation 3 XMB',
          overview: 'This portfolio is a tribute to the timeless PlayStation 3 XrossMediaBar (XMB) — one of the cleanest, most recognizable console interfaces ever designed. Built from scratch using modern web technologies, it reimagines the dual-axis horizontal and vertical navigation into a living, interactive resume.',
          highlights: [
            'Real-Time WebGL Wave Background: Custom GLSL fragment shaders simulate the flowing PS3 silk ribbons at 60 FPS with switchable color themes.',
            'Ambient Particle Field: Subtle drifting dust motes layered over the wave shader for authentic depth.',
            'Synthesized UI Audio: Web Audio API procedural navigation ticks, confirm chirps, and cancel tones with zero external audio bloat.',
            'Customizable Experience: Head to Settings to switch background themes, wave speed, ambient particles, clock format, and display fonts.'
          ],
          skillsUsed: ['TypeScript', 'WebGL', 'GLSL Shaders', 'Canvas API', 'Web Audio API', 'Vite', 'CSS3']
        }
      },
      {
        id: 'profile-resume',
        title: 'Save Data Utility (Resume / CV)',
        subtitle: 'System Storage • PDF',
        description: 'Download the official curriculum vitae and verified professional credentials of Ashvin Kethiswaran.',
        iconSvg: SVG_ICONS.folder,
        badge: 'PDF',
        action: { type: 'download', payload: '/resume.pdf' }
      },
      {
        id: 'profile-trophies',
        title: 'Trophy Collection',
        subtitle: '5 Trophies Unlocked (100%)',
        description: 'Career milestones, co-op impact, certifications, and hackathon achievements.',
        iconSvg: SVG_ICONS.trophy,
        badge: 'Platinum',
        action: { type: 'modal' },
        details: {
          role: 'Engineering & Co-op Trophies',
          organization: 'Portfolio Network',
          overview: 'Verified milestones unlocked across co-op placements, hackathons, and university projects:',
          highlights: [
            '🏆 Platinum — ETL Efficiency: Reduced manual quality-control report generation time by 80% at Curtiss-Wright.',
            '🥇 Gold — Public Sector Modernizer: Replaced paper workflows with Power Apps & Power Automate at PSC Canada.',
            '🥇 Gold — National Data Steward: Modernized Foreign Direct Investment reporting in R, Python & SQL at Statistics Canada.',
            '🥈 Silver — Hackathon Builder: Built MedX AI health assistant at uOttaHack 2025 with Gadget, Remix & OpenAI.',
            '🥉 Bronze — Certified Analyst: Completed Python & R data-analytics certifications.'
          ]
        }
      }
    ]
  },

  // 3. SKILLS
  {
    id: 'skills',
    label: 'Skills',
    iconSvg: SVG_ICONS.skills,
    items: [
      {
        id: 'skill-languages',
        title: 'Programming Languages',
        subtitle: 'Core Development & Analytics',
        description: 'Python, R, Java, SQL, TypeScript, JavaScript, HTML5, CSS3.',
        iconSvg: SVG_ICONS.code,
        tags: ['Python', 'R', 'Java', 'SQL', 'TypeScript', 'JavaScript'],
        action: { type: 'modal' },
        details: {
          overview: 'Hands-on production experience across backend automation, statistical computing, mobile apps, and full-stack web development.',
          highlights: [
            'Python: Automated ETL pipelines (pandas), Flask web apps, Selenium web scraping, and PyMuPDF document parsing.',
            'R: Modernized legacy economic reporting workflows and statistical data pipelines at Statistics Canada.',
            'SQL: Complex analytical queries across Oracle, SQL Server, and PostgreSQL (Neon) for large datasets.',
            'Java & TypeScript: Native Android development (Android Studio) and full-stack Next.js / Remix / Node.js apps.'
          ]
        }
      },
      {
        id: 'skill-automation',
        title: 'Data Pipelines & Process Automation',
        subtitle: 'Top Skills & Enterprise Workflows',
        description: 'Microsoft Power Automate, Microsoft Power Apps, Microsoft Excel, SharePoint, pandas, ETL Pipelines, Oracle & SQL Server.',
        iconSvg: SVG_ICONS.skills,
        badge: 'Top Skill',
        tags: ['Power Automate', 'Power Apps', 'Excel', 'pandas', 'ETL', 'SharePoint'],
        action: { type: 'modal' },
        details: {
          overview: 'Specializing in eliminating manual bottlenecks by connecting enterprise data sources into reliable automated workflows.',
          highlights: [
            'Microsoft Power Platform: Built end-to-end Power Automate flows and custom internal Power Apps replacing paper-based processes.',
            'Data Integrity & Reporting: Structured SharePoint & Excel data models with automated validation rules.',
            'Manufacturing & ERP Integration: Extracted and aggregated complex datasets across Agile PLM, FactoryLogix MES, and SAP ERP.',
            'Data Science & NLP: Local TF-IDF cosine similarity ranking, stock data collection automation, and large-scale SQL querying.'
          ]
        }
      },
      {
        id: 'skill-fullstack',
        title: 'Full-Stack & Mobile Engineering',
        subtitle: 'Web, APIs & Android',
        description: 'React, Next.js, Remix, Node.js, Express, Flask, Prisma, PostgreSQL, Android Studio, Firebase, Tailwind CSS.',
        iconSvg: SVG_ICONS.experience,
        tags: ['React', 'Next.js', 'Node.js', 'Flask', 'Prisma', 'Firebase'],
        action: { type: 'modal' },
        details: {
          overview: 'Building interactive, user-focused full-stack web applications and native mobile apps from database schema to UI.',
          highlights: [
            'Real-Time Web Apps: Monorepo architecture with Node.js/Express WebSockets, Prisma ORM, Neon PostgreSQL, and Next.js.',
            'AI & Third-Party APIs: Integrated OpenAI API, Google Maps Places API, and Gadget serverless backends (MedX).',
            'Mobile Development: Built native Java Android apps backed by Firebase in Android Studio.',
            'UI/UX Craft: Clean responsive interfaces with Tailwind CSS, Radix UI, Vite, and WebGL.'
          ]
        }
      },
      {
        id: 'skill-enterprise',
        title: 'Enterprise Systems & Dev Tools',
        subtitle: 'ERP, MES & Workflow Tooling',
        description: 'Agile PLM, FactoryLogix MES, SAP ERP, Oracle, SQL Server, Git, GitHub, Vercel, Netlify, Agile/Scrum.',
        iconSvg: SVG_ICONS.settings,
        tags: ['Agile PLM', 'FactoryLogix MES', 'SAP ERP', 'Oracle', 'Git', 'Agile'],
        action: { type: 'modal' },
        details: {
          overview: 'Experienced working inside cross-functional enterprise, aerospace/manufacturing, and federal government engineering teams.',
          highlights: [
            'Manufacturing & Enterprise Systems: Agile PLM, FactoryLogix MES, and SAP ERP data extraction and aggregation.',
            'Databases: Oracle Database, Microsoft SQL Server, PostgreSQL (Neon), and Firebase Realtime/Firestore.',
            'Developer Workflow: Git/GitHub version control, Vercel & Netlify deployments, and Agile team collaboration.'
          ]
        }
      }
    ]
  },

  // 4. EDUCATION
  {
    id: 'education',
    label: 'Education',
    iconSvg: SVG_ICONS.education,
    items: [
      {
        id: 'edu-uottawa',
        title: 'University of Ottawa',
        subtitle: 'BASc, Computer Engineering • Sept 2022 – Dec 2026',
        description: 'Bachelor of Applied Science in Computer Engineering — software development, data analytics, system automation, and UI/UX engineering.',
        iconSvg: SVG_ICONS.education,
        badge: 'BASc',
        date: 'Sept 2022 – Dec 2026',
        tags: ['Computer Engineering', 'Co-op', 'uOttawa'],
        action: { type: 'modal' },
        details: {
          role: 'Bachelor of Applied Science (BASc), Computer Engineering',
          organization: 'University of Ottawa • Ottawa, Ontario',
          gradeOrMetric: '4th Year (Expected Graduation: Dec 2026)',
          overview: 'Pursuing a Bachelor of Applied Science in Computer Engineering at the University of Ottawa, combining hardware/software fundamentals with multiple co-op work terms in aerospace manufacturing and federal government technology.',
          courses: [
            'SEG 3125: Analysis & Design of User Interfaces',
            'Data Structures & Algorithms',
            'Software Engineering & Mobile App Development',
            'Database Management Systems & SQL',
            'Computer Systems & Architecture',
            'Data Analytics & Automation'
          ],
          highlights: [
            'Completed multiple co-op placements at Curtiss-Wright, Public Service Commission of Canada, and Statistics Canada.',
            'Participated in uOttaHack 2025, building MedX — an AI health assistant powered by Gadget, Remix, and OpenAI.',
            'Built hands-on engineering projects spanning full-stack web, Android/Firebase mobile apps, and Python data tools.'
          ]
        }
      },
      {
        id: 'edu-pickering',
        title: 'Pickering High School',
        subtitle: 'High School Diploma • 2018 – 2022',
        description: 'Ontario Secondary School Diploma.',
        iconSvg: SVG_ICONS.education,
        date: '2018 – 2022',
        tags: ['High School Diploma'],
        action: { type: 'modal' },
        details: {
          role: 'High School Diploma',
          organization: 'Pickering High School • Ajax / Pickering, Ontario',
          gradeOrMetric: 'Ontario Secondary School Diploma',
          overview: 'Completed secondary education, developing early foundations in programming, interactive media, and analytical problem-solving.',
          highlights: [
            'Participated in Durham College Computer Programmer & Interactive Media Developer program (June 2021).'
          ]
        }
      },
      {
        id: 'edu-certifications',
        title: 'Certifications & Accreditations',
        subtitle: 'Python & R Data Analytics',
        description: 'Intermediate R, Introduction to Importing Data in R, Introduction to R, and Introduction to Python.',
        iconSvg: SVG_ICONS.folder,
        badge: '4 Verified',
        tags: ['Python', 'R', 'Data Importing'],
        action: { type: 'modal' },
        details: {
          role: 'Verified Certifications',
          organization: 'Data Analytics Credentials',
          overview: 'Completed certifications strengthening statistical programming, data ingestion, and software fundamentals:',
          highlights: [
            'Intermediate R',
            'Introduction to Importing Data in R',
            'Introduction to R',
            'Introduction to Python'
          ]
        }
      }
    ]
  },

  // 5. EXPERIENCE
  {
    id: 'experience',
    label: 'Experience',
    iconSvg: SVG_ICONS.experience,
    items: [
      {
        id: 'exp-curtiss-wright',
        title: 'Curtiss-Wright Corporation',
        subtitle: 'Process Automation & Quality Engineering Co-op • May 2026 – Aug 2026',
        description: 'Architected automated Python/pandas ETL pipelines across Agile PLM, FactoryLogix MES, and SAP ERP, cutting manual report generation time by 80%.',
        iconSvg: SVG_ICONS.experience,
        badge: 'Latest',
        date: 'May 2026 – Aug 2026',
        tags: ['Python', 'pandas', 'ETL', 'Agile PLM', 'FactoryLogix MES', 'SAP ERP'],
        action: { type: 'modal' },
        details: {
          role: 'Process Automation and Quality Engineering Co-op',
          organization: 'Curtiss-Wright Corporation • Ottawa, Ontario',
          overview: 'Engineered automated data pipelines and quality-control analytics tooling for manufacturing operations.',
          highlights: [
            'Architected automated ETL pipelines using Python and pandas, reducing manual report generation time by 80% and accelerating critical quality control analytics.',
            'Engineered Python scripts to extract, transform, and aggregate complex manufacturing datasets across Agile PLM, FactoryLogix MES, and SAP ERP.'
          ],
          skillsUsed: ['Python', 'pandas', 'ETL Pipelines', 'Agile PLM', 'FactoryLogix MES', 'SAP ERP']
        }
      },
      {
        id: 'exp-psc',
        title: 'Public Service Commission of Canada',
        subtitle: 'Administrative Technology Advisor • Sept 2025 – Dec 2025',
        description: 'Built Power Automate workflows and a custom internal Power App for the President’s Office, replacing paper-based infrastructure.',
        iconSvg: SVG_ICONS.experience,
        date: 'Sept 2025 – Dec 2025',
        tags: ['Power Automate', 'Power Apps', 'SharePoint', 'Excel'],
        action: { type: 'modal' },
        details: {
          role: 'Administrative Technology Advisor',
          organization: 'Public Service Commission of Canada • Gatineau, Quebec',
          overview: 'Partnered with business units in the President’s Office to modernize operations through Microsoft Power Platform automation and structured data governance.',
          highlights: [
            'Collaborated cross-functionally with business units to understand operations and define automation opportunities within the President’s Office.',
            'Developed and deployed automated workflows using Power Automate, integrating various data endpoints to reduce manual processing time.',
            'Built a custom internal Power App to replace paper-based infrastructure, eliminating duplicate data entry and improving case resolution speed.',
            'Managed data integrity across SharePoint and Excel using structured data models and automated validations.'
          ],
          skillsUsed: ['Microsoft Power Automate', 'Microsoft Power Apps', 'SharePoint', 'Microsoft Excel', 'Process Automation']
        }
      },
      {
        id: 'exp-statcan',
        title: 'Statistics Canada | Statistique Canada',
        subtitle: 'Junior Programmer • May 2024 – Apr 2025 (1 yr)',
        description: 'Supported national Foreign Direct Investment economic reporting by modernizing legacy workflows in R, automating Python scripts, and querying Oracle & SQL Server.',
        iconSvg: SVG_ICONS.experience,
        badge: '1 Year',
        date: 'May 2024 – Apr 2025',
        tags: ['R', 'Python', 'SQL', 'Oracle', 'SQL Server', 'Agile'],
        action: { type: 'modal' },
        details: {
          role: 'Junior Programmer',
          organization: 'Statistics Canada (International Accounts & Trade Division) • Ottawa, Ontario',
          overview: 'Worked with the Foreign Direct Investment Team to support national economic reporting through automation, open-source modernization, and large-scale SQL data querying.',
          highlights: [
            'Worked with the International Accounts and Trade Division (Foreign Direct Investment Team) to support national economic reporting through automation and improved data workflows.',
            'Helped modernize legacy processes by replacing outdated tools with open-source solutions like R.',
            'Improved data reliability and transparency by translating critical scripts and workflows.',
            'Automated stock data collection using Python, reducing manual work and saving time.',
            'Queried large economic datasets from Oracle and SQL Server for internal reporting utilizing SQL.',
            'Collaborated closely with economists and analysts in an agile team environment.'
          ],
          skillsUsed: ['R', 'Python', 'SQL', 'Oracle', 'SQL Server', 'Data Workflows', 'Agile']
        }
      },
      {
        id: 'exp-durham',
        title: 'Durham College',
        subtitle: 'Computer Programmer & Interactive Media Developer • June 2021',
        description: 'Collaborated on programming and interactive media design, proposing and implementing website UI/UX improvements.',
        iconSvg: SVG_ICONS.experience,
        date: 'June 2021',
        tags: ['UI/UX', 'Web Design', 'Reporting'],
        action: { type: 'modal' },
        details: {
          role: 'Computer Programmer and Interactive Media Developer',
          organization: 'Durham College',
          overview: 'Explored software development and interactive media design in a team setting with a focus on practical UI/UX enhancements.',
          highlights: [
            'Explored programming and design topics with a team.',
            'Suggested and implemented new changes to the UI/UX experience of a website to better it for users.',
            'Created multiple reports based on findings in a professionally organized manner.'
          ],
          skillsUsed: ['UI/UX Design', 'Web Development', 'Technical Reporting', 'Team Collaboration']
        }
      }
    ]
  },

  // 6. PROJECTS (Pinned Repositories from github.com/ashketh21)
  {
    id: 'projects',
    label: 'Projects',
    iconSvg: SVG_ICONS.projects,
    items: [
      {
        id: 'proj-songsnap',
        title: 'SongSnap',
        subtitle: 'Solo & Multiplayer Spotify Guessing Game',
        description: 'Competitive solo & multiplayer music guessing game powered by your own public Spotify playlists with progressive 0.1s–10s audio clips and synchronized lobbies.',
        iconSvg: SVG_ICONS.disc,
        badge: 'Live Demo',
        date: '2026',
        tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Node.js'],
        demoUrl: 'https://songsnap.up.railway.app',
        githubUrl: 'https://github.com/ashketh21/SongSnap',
        action: { type: 'modal' },
        details: {
          role: 'Full-Stack Developer',
          organization: 'Pinned GitHub Project',
          overview: 'A competitive solo and multiplayer music guessing game powered by public Spotify playlists — no Spotify API keys or user allowlists required. Players guess tracks as early as possible across progressive audio clips (0.1s → 0.5s → 1s → 2s → 5s → 10s).',
          highlights: [
            'Sample-Accurate Progressive Audio: Decodes previews client-side via Web Audio API, automatically trims leading silence (-40 dB), and applies smooth fade-outs so 0.1s clips always contain music.',
            'Public Spotify Playlist Import: Paste any public Spotify playlist URL (25+ playable songs) or pick from built-in curated presets (2010s Hits, 2000s Throwbacks, Classic Anthems).',
            'Synchronized Multiplayer Lobbies (up to 12 players): 5-character room codes, shareable invite links, lock-in countdowns, live progress sidebar, and final podium.',
            'Smart Answer Matching: Deduplicated global autocomplete and server-side verification handling Remastered/Deluxe editions, diacritics, and multi-artist credits.'
          ],
          skillsUsed: ['TypeScript', 'React 19', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Node.js', 'Railway']
        }
      },
      {
        id: 'proj-adaptive-trivia',
        title: 'Volatility Engine — Adaptive Trivia Game',
        subtitle: 'Real-Time Multiplayer Trivia & Wagering',
        description: 'Adaptive trivia game where players act as investors wagering on questions with dynamic volatility score multipliers, featuring a shared Host screen and phone Controllers.',
        iconSvg: SVG_ICONS.disc,
        badge: 'Live Demo',
        date: '2026',
        tags: ['TypeScript', 'Next.js', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
        demoUrl: 'https://adaptive-trivia-game-host.vercel.app',
        githubUrl: 'https://github.com/ashketh21/Adaptive-Trivia-Game',
        action: { type: 'modal' },
        details: {
          role: 'Full-Stack Developer',
          organization: 'Pinned GitHub Project',
          overview: 'An adaptive multiplayer trivia game styled as a Global Trivia Exchange. Players wager on trivia questions with dynamic score multipliers driven by global question difficulty ("volatility"), played across a shared Host TV/desktop screen and individual phone Controllers.',
          highlights: [
            'Monorepo architecture with a Node.js/Express WebSocket backend, Prisma ORM, and Neon PostgreSQL database.',
            'Separate Next.js web applications for the main Host display (apps/host) and mobile player Controllers (apps/controller).',
            'Seeded with OpenTDB trivia questions and real-time volatility-based wagering mechanics.',
            'Deployed live on Vercel for instant browser play.'
          ],
          skillsUsed: ['TypeScript', 'Next.js', 'Node.js', 'Express', 'WebSockets', 'Prisma', 'PostgreSQL']
        }
      },
      {
        id: 'proj-job-recommender',
        title: 'Smart Job Recommender',
        subtitle: 'Resume Matcher & Live Job Scraper',
        description: 'Local-first Flask app that parses PDF resumes, scrapes live Canadian tech listings from Indeed, and ranks matches via hybrid TF-IDF cosine similarity + skill gap analysis.',
        iconSvg: SVG_ICONS.disc,
        badge: 'Python / NLP',
        date: '2026',
        tags: ['Python', 'Flask', 'Selenium', 'PyMuPDF', 'TF-IDF', 'HTML'],
        githubUrl: 'https://github.com/ashketh21/job-recommender',
        action: { type: 'modal' },
        details: {
          role: 'Creator & Backend Developer',
          organization: 'Pinned GitHub Project',
          overview: 'A privacy-first, local Flask web application that extracts text from your PDF resume, scrapes live tech job listings, and ranks the best-fitting roles using hybrid TF-IDF cosine similarity and tech skill-gap analysis — with zero external LLM APIs required.',
          highlights: [
            'PDF Resume Parsing: Extracts text using PyMuPDF (fitz) and auto-deletes uploaded files immediately after processing.',
            'Live Indeed Scraping with Offline Fallback: Scrapes ca.indeed.com via headless Chrome (Selenium) with 15-minute in-memory caching and graceful offline fallback.',
            'Granular Filters: Filter by keywords, Canadian city or remote-only, date posted (24h–14d), and seniority level (Intern/Co-op through Senior).',
            'Matched & Missing Skill Badges: Detects 100+ tech skills locally and highlights skill gaps and detected years of experience on every job card.'
          ],
          skillsUsed: ['Python', 'Flask', 'Selenium', 'PyMuPDF', 'TF-IDF', 'Web Scraping', 'HTML/CSS']
        }
      },
      {
        id: 'proj-medx',
        title: 'MedX — AI Health Assistant',
        subtitle: 'uOttaHack 2025 Submission',
        description: 'AI-powered health assistant built for uOttaHack 2025 using Gadget, Remix, React, OpenAI, and Google Maps Places API.',
        iconSvg: SVG_ICONS.disc,
        badge: 'uOttaHack',
        date: '2025',
        tags: ['TypeScript', 'React', 'Remix', 'Gadget', 'OpenAI API', 'Tailwind CSS'],
        githubUrl: 'https://github.com/ashketh21/MedX',
        action: { type: 'modal' },
        details: {
          role: 'Full-Stack Hackathon Developer',
          organization: 'uOttaHack 2025 • Pinned GitHub Project',
          overview: 'Built during uOttaHack 2025, MedX is an interactive AI health assistant combining conversational triage with location-aware healthcare lookup.',
          highlights: [
            'Powered by Gadget full-stack platform with Remix, React 18, TypeScript, and Vite.',
            'Integrated OpenAI API for intelligent health guidance and symptom Q&A.',
            'Connected Google Maps API and Places Autocomplete to help users locate nearby care.',
            'Styled with Tailwind CSS and accessible Radix UI components.'
          ],
          skillsUsed: ['TypeScript', 'React', 'Remix', 'Gadget', 'OpenAI API', 'Google Maps API', 'Tailwind CSS']
        }
      },
      {
        id: 'proj-cycling-club',
        title: 'Cycling Club Android App',
        subtitle: 'Native Android Mobile Application',
        description: 'Native Android cycling club management app built in Java with Android Studio and backed by Firebase.',
        iconSvg: SVG_ICONS.disc,
        badge: 'Android',
        date: '2024',
        tags: ['Java', 'Android Studio', 'Firebase', 'Mobile UI'],
        githubUrl: 'https://github.com/ashketh21/Cycling-Club-Android-App',
        action: { type: 'modal' },
        details: {
          role: 'Android Developer',
          organization: 'Pinned GitHub Project',
          overview: 'A native Android mobile application engineered in Java using Android Studio and Firebase for managing cycling club events, profiles, and participant registration.',
          highlights: [
            'Built native Android activities and intuitive mobile navigation flows in Java.',
            'Integrated Firebase backend for real-time authentication, club event data persistence, and synchronization.',
            'Designed role-based flows for administrators, cycling clubs, and participants.'
          ],
          skillsUsed: ['Java', 'Android Studio', 'Firebase', 'XML Layouts', 'Mobile Development']
        }
      },
      {
        id: 'proj-seg3125',
        title: 'SEG 3125 UI/UX Portfolio',
        subtitle: 'UI/UX Design Study • Live on Netlify',
        description: 'Interactive portfolio design project created for SEG 3125 to explore user-centered UI/UX design principles and responsive web layout.',
        iconSvg: SVG_ICONS.disc,
        badge: 'Live Demo',
        date: '2025',
        tags: ['HTML', 'CSS', 'UI/UX Design', 'Netlify'],
        demoUrl: 'https://ashvinkuiuxportfolio.netlify.app',
        githubUrl: 'https://github.com/ashketh21/SEG-3125-Portfolio-Project',
        action: { type: 'modal' },
        details: {
          role: 'UI/UX Designer & Developer',
          organization: 'University of Ottawa (SEG 3125) • Pinned GitHub Project',
          overview: 'A UI/UX design learning project built for uOttawa’s Analysis and Design of User Interfaces course (SEG 3125), focused on visual hierarchy, usability, and clean responsive design.',
          highlights: [
            'Applied core HCI and UI/UX design heuristics to structure project case studies and navigation.',
            'Crafted clean, lightweight semantic HTML/CSS layouts.',
            'Deployed and hosted live on Netlify.'
          ],
          skillsUsed: ['HTML5', 'CSS3', 'UI/UX Design', 'HCI Principles', 'Netlify']
        }
      }
    ]
  },

  // 7. CONTACT
  {
    id: 'contact',
    label: 'Contact',
    iconSvg: SVG_ICONS.contact,
    items: [
      {
        id: 'contact-email',
        title: 'Email: ashvinkethiswaran@gmail.com',
        subtitle: 'Send Electronic Mail',
        description: 'Direct email communication. Press Enter to copy address to clipboard.',
        iconSvg: SVG_ICONS.email,
        badge: 'Direct',
        linkUrl: 'mailto:ashvinkethiswaran@gmail.com',
        action: { type: 'copy', payload: 'ashvinkethiswaran@gmail.com' }
      },
      {
        id: 'contact-github',
        title: 'GitHub Profile',
        subtitle: 'github.com/ashketh21',
        description: 'Explore my pinned repositories, hackathon builds, and software engineering projects.',
        iconSvg: SVG_ICONS.github,
        linkUrl: 'https://github.com/ashketh21',
        action: { type: 'link', payload: 'https://github.com/ashketh21' }
      },
      {
        id: 'contact-linkedin',
        title: 'LinkedIn Network',
        subtitle: 'linkedin.com/in/ashvinkethiswaran',
        description: 'Connect with Ashvin Kethiswaran professionally on LinkedIn for engineering opportunities and collaborations.',
        iconSvg: SVG_ICONS.linkedin,
        linkUrl: 'https://www.linkedin.com/in/ashvinkethiswaran',
        action: { type: 'link', payload: 'https://www.linkedin.com/in/ashvinkethiswaran' }
      },
      {
        id: 'contact-message',
        title: 'Send Message',
        subtitle: 'Interactive Message Form',
        description: 'Compose and dispatch a message directly to Ashvin through the console interface.',
        iconSvg: SVG_ICONS.contact,
        badge: 'Compose',
        action: { type: 'modal' },
        details: {
          role: 'Interactive Message Dispatcher',
          organization: 'Message Utility',
          overview: 'Ready to collaborate or discuss a software engineering, data, or automation role? Leave a direct message below:',
          highlights: [
            '📧 Email: ashvinkethiswaran@gmail.com',
            '🌐 Location: Ajax / Ottawa, Ontario, Canada',
            '💼 Opportunities: Software Engineering, Data Pipelines, System Automation & Full-Stack roles.'
          ]
        }
      }
    ]
  }
];
