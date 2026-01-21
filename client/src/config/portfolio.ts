// ============================================
// PORTFOLIO CONFIGURATION FILE
// Edit this file to customize your portfolio
// ============================================

// ----- PERSONAL INFO -----
export const personalInfo = {
  name: "Mansour Alhaddad",
  title: "Flutter Developer",
  subtitle: "& AI Engineer",
  description: "Mobile & Web Developer specializing in Flutter with 3+ years of experience building fintech, SaaS, and enterprise applications. Currently pursuing a Master's in Artificial Intelligence.",
  location: "Erlangen, Germany",
  email: "mansourzaki2000@gmail.com",
  availableForWork: true,
};

// ----- SOCIAL LINKS -----
export const socialLinks = {
  github: "https://github.com/mansouralhaddad",
  linkedin: "https://linkedin.com/in/mansourza",
  x: "https://x.com",
  dribbble: "https://dribbble.com",
};

// ----- ABOUT SECTION -----
export const aboutInfo = {
  bio: [
    "I'm a Flutter Developer with 3+ years of experience building high-performance mobile and web applications. I've worked on fintech platforms handling billions in transactions, SaaS products, and enterprise solutions that improved operational efficiency by up to 75%.",
    "Currently pursuing my Master's in Artificial Intelligence at FAU Erlangen, Germany. I'm passionate about clean architecture, open-source contributions, and applying AI to solve real-world problems. I actively contribute to Flutter, Riverpod, and other open-source projects.",
  ],
  stats: [
    { label: "Experience", value: "3+ Years" },
    { label: "Projects", value: "10+ Shipped" },
    { label: "Open Source", value: "Active Contributor" },
  ],
};

// ----- SKILLS -----
// Level is 0-100 for the progress bar
export const skills = [
  { name: "Flutter / Dart", level: 95 },
  { name: "React / Next.js", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "Firebase / Cloud Functions", level: 90 },
  { name: "RESTful APIs / GraphQL", level: 88 },
  { name: "Python / Flask", level: 75 },
  { name: "Riverpod / Provider", level: 92 },
  { name: "Clean Architecture", level: 90 },
];

// ----- EXPERIENCE -----
export const experiences = [
  {
    role: "Flutter Developer",
    company: "Sukuk Capital, Saudi Arabia",
    period: "Nov 2022 - Oct 2025",
    description: "Developed a fintech crowdfunding app facilitating 2+ billion SAR in investments. Built complex data-driven UIs, integrated Kotlin/Swift native features, established CI/CD pipelines, and collaborated with 40+ team members.",
  },
  {
    role: "Flutter Developer (Web & Mobile)",
    company: "SyncMe Startup",
    period: "May 2023 - Mar 2024",
    description: "Built Flutter web apps for admin/vendor management, developed a SaaS e-commerce product, and utilized Google Cloud Functions, AWS Amplify, and GraphQL for scalable backend services.",
  },
  {
    role: "Flutter Developer Intern",
    company: "Ministry of Interiors",
    period: "Jun 2021 - Sep 2021",
    description: "Created a progress tracking app with Firebase backend, role-based access control, real-time updates, and push notifications. Reduced paperwork by 75% across 10 departments.",
  },
  {
    role: "Master's Student - AI",
    company: "FAU Erlangen, Germany",
    period: "Oct 2024 - Present",
    description: "Pursuing Master of Artificial Intelligence with focus on machine learning, evolutionary algorithms, and applied AI solutions.",
  },
];

// ----- PROJECTS -----
export const projects = [
  {
    id: 1,
    title: "Sukuk Capital",
    category: "Mobile Development",
    description: "High-performance fintech crowdfunding app facilitating investments exceeding 2 billion SAR with complex data visualizations and interactive charts.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["Flutter", "Kotlin", "Swift", "CI/CD", "Fintech"],
    link: "#",
  },
  {
    id: 2,
    title: "SyncMe SaaS Platform",
    category: "Web Development",
    description: "E-commerce SaaS product with admin/vendor management, built using Flutter Web, Google Cloud Functions, AWS Amplify, and GraphQL.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Flutter Web", "GCP", "AWS", "GraphQL"],
    link: "#",
  },
  {
    id: 3,
    title: "Evolutionary Timetable Scheduler",
    category: "AI/ML",
    description: "Flutter web/desktop app using evolutionary algorithms to auto-generate university schedules, reducing manual scheduling from months to 30 minutes.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    tags: ["Flutter", "Python", "Flask", "ML", "Firebase"],
    link: "#",
  },
  {
    id: 4,
    title: "Progress Tracking App",
    category: "Mobile Development",
    description: "Enterprise app for task management with Firebase backend, real-time updates, role-based access, and push notifications for 10+ departments.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Flutter", "Firebase", "Real-time", "Push Notifications"],
    link: "#",
  },
  {
    id: 5,
    title: "Abushagra.de",
    category: "Web Development",
    description: "Responsive web application built with Next.js, TypeScript, and React featuring SSR, modular components, and secure form handling.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "React", "SSR"],
    link: "https://abushagra.de/",
  },
  {
    id: 6,
    title: "Open Source Contributions",
    category: "Open Source",
    description: "Active contributor to Flutter, Riverpod, and OpenFoodFacts. Written unit tests, fixed issues, and enhanced documentation for major packages.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
    tags: ["Flutter", "Riverpod", "Open Source", "Testing"],
    link: "https://github.com/mansouralhaddad",
  },
];

// ----- PROJECT CATEGORIES -----
export const projectCategories = [
  "All",
  "Mobile Development",
  "Web Development",
  "AI/ML",
  "Open Source",
];

// ----- EDUCATION -----
export const education = [
  {
    degree: "Master of Artificial Intelligence",
    institution: "FAU Erlangen, Germany",
    period: "Oct 2024 - Present",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "IUG, Palestine",
    period: "Graduated June 2022",
  },
];

// ----- VOLUNTEERING -----
export const volunteering = [
  {
    role: "Volunteer",
    event: "Fluttercon Berlin 2025",
  },
];
