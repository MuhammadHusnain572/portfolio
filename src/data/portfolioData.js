export const HACKATHON_FACT = 'Top 10 of 173 PROJECTS from 200+ universities — HEC GenAI Hackathon Pakistan'

export const profile = {
  name: 'Muhammad Husnain',
  title: 'Flutter Developer | AI Application Developer',
  tagline: 'I turn ideas into apps Pakistan actually needs.',
  education: {
    degree: 'BS Software Engineering',
    school: 'NUML Islamabad',
    status: 'Graduating March 2027',
  },
  resumeUrl: '/resume.pdf',
  profileImage: '/profile.jpg',
  links: {
    portfolio: 'https://muhammad-husnain572.web.app',
    github: 'https://github.com/MuhammadHusnain572',
    linkedin: 'https://www.linkedin.com/in/muhammad-husnain572/',
    email: 'm.husnain12313@gmail.com',
  },
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const aboutText = {
  summary:
    "I'm a Flutter and AI application developer focused on building practical, real-world software for Pakistan. My work spans cross-platform mobile apps, generative AI systems, and full-stack products that solve everyday problems for real users rather than chasing novelty.",
  details:
    "I care about shipping things that work end to end: clean Flutter interfaces backed by real data, and AI features built on solid retrieval and evaluation, not just a demo prompt. Currently completing my BS in Software Engineering at NUML Islamabad while building production-grade apps and AI products alongside internships in mobile development and data center operations.",
}

export const projects = [
  {
    id: 'qabiliyatnama',
    name: 'QabiliyatNama',
    featured: true,
    tagline: 'Pakistan-focused skill verification platform',
    description:
      'A Flutter skill assessment app with timed, level-based tests, instant scoring, local result saving, and a 5-tier badge system that lets users prove their skills with verifiable results.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    liveUrl: 'https://qabiliyat-nama.vercel.app',
    codeUrl: 'https://github.com/MuhammadHusnain572/qabiliyat_nama',
  },
  {
    id: 'apni-sehat',
    name: 'Apni Sehat',
    featured: false,
    tagline: 'Bilingual AI diabetes companion',
    description: `An AI-powered bilingual companion app for diabetes management, built with RAG and LLaMA 3.3. ${HACKATHON_FACT}.`,
    tags: ['RAG', 'LLaMA 3.3', 'Generative AI', 'Python'],
    liveUrl: 'https://apni-sehat-jylam9hhimsvsstqtxoutx.streamlit.app',
    codeUrl: 'https://github.com/umer1556/Apni-Sehat',
  },
  {
    id: 'metabolic-care-assistant',
    name: 'Metabolic Care Assistant',
    featured: false,
    tagline: 'AI dietary support with clinical triage',
    description:
      'An AI assistant that provides dietary support and clinical triage guidance for metabolic health conditions, combining structured medical logic with generative AI.',
    tags: ['Generative AI', 'Python', 'Healthcare AI'],
    liveUrl: null,
    codeUrl: 'https://github.com/umer1556/metabolic-care-assistant',
  },
]

export const experience = [
  {
    id: 'techrax',
    role: 'Mobile App Developer Intern (Flutter)',
    org: 'Techrax Solutions',
    period: 'Jul 2025 – Dec 2025',
    points: [
      'Built and maintained cross-platform Flutter applications in a production team environment.',
      'Worked across the full app lifecycle from feature development to release-ready builds.',
    ],
  },
  {
    id: 'ntc',
    role: 'Data Center Intern',
    org: 'NTC HQ Islamabad',
    period: 'Dec 2025 – Mar 2026',
    points: [
      'Gained hands-on exposure to data center operations and infrastructure at a national telecom headquarters.',
      'Completed the internship with an A+ grade.',
    ],
  },
]

export const achievements = [
  {
    id: 'hec-top10',
    category: 'recognition',
    title: 'HEC GenAI Hackathon — Top 10 Finish',
    org: 'HEC GenAI Hackathon Pakistan',
    description: HACKATHON_FACT,
  },
  {
    id: 'ntc-grade',
    category: 'recognition',
    title: 'A+ Grade — Internship',
    org: 'NTC HQ Islamabad',
    description: 'Completed the Data Center internship with an A+ grade.',
  },
  {
    id: 'ulef-top-performer',
    category: 'certification',
    title: 'Top Performer Award',
    org: 'GenAI Certification — HEC / ULEF USA',
    description: 'Recognized as a top performer in the Generative AI certification program.',
  },
  {
    id: 'ibm-devops',
    category: 'certification',
    title: 'IBM DevOps & Software Engineering Professional Certificate',
    org: 'IBM',
    description: 'Completed a professional certification covering DevOps practices and software engineering fundamentals.',
    credentialUrl: 'https://www.credly.com/badges/b5cc32ae-ff75-4e80-9dbb-3993f6d91b92/public_url',
  },
]

export const skillGroups = [
  {
    id: 'mobile',
    label: 'Mobile Development',
    skills: ['Flutter', 'Dart'],
  },
  {
    id: 'ai',
    label: 'AI & Generative AI',
    skills: ['Generative AI', 'RAG / LLM', 'Python', 'Streamlit'],
  },
  {
    id: 'data',
    label: 'Backend & Database',
    skills: ['Firebase', 'PostgreSQL'],
  },
  {
    id: 'tools',
    label: 'Tools & Platform',
    skills: ['Git', 'GitHub', 'Linux', 'DevOps'],
  },
]
