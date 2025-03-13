export const dictionaries = {
  en: {
    profile: {
      name: "Mickaël WARIN",
      title: "Full-Stack Developer",
      about:
        "Passionate about development, I enjoy creating high-performance and well-designed applications. I place great importance on code quality, security, and user experience.",
      profileTitle: "Profile",
      aboutTitle: "About",
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          position: "Full-Stack Developer | Freelance",
          period: "Oct. 2024 - Now",
          description:
            "Freelance Full-Stack Developer specialized in NextJS, NestJS. I help companies design high-performance, secure web applications tailored to their needs.",
          achievements: [
            "Front & Back Development (NextJS, NestJS)",
            "Modern, fluid and fully responsive interfaces",
            "Solid and scalable architecture for optimal performance",
            "Database management and optimization (PostgreSQL, MySQL, MongoDB)",
            "Testing, code quality and security for reliable applications",
          ],
        },
        {
          position: "Software Engineer | Thales",
          period: "2017 - 2024",
          description:
            "During 9 years at Thales, I designed and developed critical software applications in demanding environments, using C, C++, Python, as well as internal frameworks.",
          achievements: [
            "Design and development of embedded systems",
            "Performance optimization for constrained systems",
            "Testing and validation to ensure solution reliability and security",
            "Working in constrained environments with high requirements",
            "Collaboration with multidisciplinary teams on large-scale projects",
          ],
          conclusion:
            "This experience has given me technical rigor, the ability to adapt to complex environments, and a performance and quality-oriented approach.",
        },
      ],
    },
    education: {
      title: "Education",
      degree: "Master's Degree - Software Development & Architecture",
      period: "2014 - 2017",
      description:
        "ETNA - Specialized training in software architecture and web/mobile application development",
    },
    languages: {
      title: "Languages",
      items: [
        { name: "French", level: 5 },
        { name: "English", level: 4 },
        { name: "Japanese", level: 2 },
      ],
    },
    softSkills: {
      title: "Soft Skills",
      items: [
        { name: "Teamwork", icon: "Users" },
        { name: "Communication", icon: "MessageSquare" },
        { name: "Problem Solving", icon: "Puzzle" },
        { name: "Adaptability", icon: "Lightbulb" },
        { name: "Autonomy", icon: "Zap" },
        { name: "Rigor", icon: "ClipboardCheck" },
      ],
    },
    buttons: {
      download: "Download",
    },
    skills: {
      title: "Skills",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        devops: "DevOps & Tools",
        other: "Other Skills",
      },
    },
  },
  fr: {
    profile: {
      name: "Mickaël WARIN",
      title: "Développeur Full-Stack",
      about:
        "Passionné par le développement, j'aime créer des applications performantes et bien pensées. J'accorde une grande importance à la qualité du code, à la sécurité et à l'expérience utilisateur.",
      profileTitle: "Profil",
      aboutTitle: "À propos",
    },
    experience: {
      title: "Expérience professionnelle",
      items: [
        {
          position: "Développeur Full-Stack | Freelance",
          period: "Oct. 2024 - Présent",
          description:
            "Développeur Full-Stack Freelance spécialisé en NextJS, NestJS. J'aide les entreprises à concevoir des applications web performantes, sécurisées et adaptées à leurs besoins.",
          achievements: [
            "Développement Front & Back (NextJS, NestJS)",
            "Interfaces modernes, fluides et entièrement responsives",
            "Architecture solide et évolutive pour des performances optimales",
            "Gestion et optimisation des bases de données (PostgreSQL, MySQL, MongoDB)",
            "Tests, qualité du code et sécurité pour une application fiable",
          ],
        },
        {
          position: "Ingénieur Logiciel | Thales",
          period: "2017 - 2024",
          description:
            "Pendant 9 ans chez Thales, j'ai conçu et développé des applications logicielles critiques dans des environnements exigeants, en utilisant C, C++, Python, ainsi que des frameworks internes.",
          achievements: [
            "Conception et développement de systèmes embarqués",
            "Optimisation des performances pour systèmes contraints",
            "Tests et validation pour garantir la fiabilité et la sécurité des solutions",
            "Travail en environnement contraint avec des exigences élevées",
            "Collaboration avec des équipes pluridisciplinaires sur des projets de grande envergure",
          ],
          conclusion:
            "Cette expérience m'a apporté une rigueur technique, une capacité d'adaptation à des environnements complexes et une approche orientée performance et qualité.",
        },
      ],
    },
    education: {
      title: "Formation",
      degree: "Master – Développement & Architecture Logicielle",
      period: "2014 - 2017",
      description:
        "ETNA – Formation spécialisée en architecture logiciel et développement d'applications web et mobiles",
    },
    languages: {
      title: "Langues",
      items: [
        { name: "Français", level: 5 },
        { name: "Anglais", level: 4 },
        { name: "Japonais", level: 2 },
      ],
    },
    softSkills: {
      title: "Soft Skills",
      items: [
        { name: "Travail d'équipe", icon: "Users" },
        { name: "Communication", icon: "MessageSquare" },
        { name: "Résolution", icon: "Puzzle" },
        { name: "Adaptabilité", icon: "Lightbulb" },
        { name: "Autonomie", icon: "Zap" },
        { name: "Rigueur", icon: "ClipboardCheck" },
      ],
    },
    buttons: {
      download: "Télécharger",
    },
    skills: {
      title: "Compétences",
      categories: {
        frontend: "Développement Front-end",
        backend: "Développement Back-end",
        devops: "DevOps & Outils",
        other: "Autres compétences",
      },
    },
  },
};

export type Locale = keyof typeof dictionaries;
