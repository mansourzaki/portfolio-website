// ============================================
// PORTFOLIO CONFIGURATION FILE
// Edit this file to customize your portfolio
// ============================================

// ----- PERSONAL INFO -----
export const personalInfo = {
  name: "Portfolio",
  title: "Creative Developer",
  subtitle: "& Designer",
  description: "I craft exceptional digital experiences that blend aesthetics with functionality. Specializing in modern web development and intuitive user interfaces.",
  location: "San Francisco, CA",
  email: "hello@portfolio.com",
  availableForWork: true,
};

// ----- SOCIAL LINKS -----
export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  x: "https://x.com",
  dribbble: "https://dribbble.com",
};

// ----- ABOUT SECTION -----
export const aboutInfo = {
  bio: [
    "I'm a passionate full-stack developer and designer with over 6 years of experience creating digital products that make a difference. My approach combines clean code with thoughtful design to build experiences that users love.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.",
  ],
  stats: [
    { label: "Development", value: "6+ Years" },
    { label: "Design", value: "50+ Projects" },
    { label: "Products", value: "20+ Launched" },
  ],
};

// ----- SKILLS -----
// Level is 0-100 for the progress bar
export const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "UI/UX Design", level: 85 },
  { name: "Python", level: 80 },
  { name: "AWS / Cloud", level: 78 },
];

// ----- EXPERIENCE -----
export const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Innovation Labs",
    period: "2022 - Present",
    description: "Leading development of enterprise-scale applications and mentoring junior developers.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Inc",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects using modern web technologies.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description: "Developed responsive web applications with focus on user experience.",
  },
];

// ----- PROJECTS -----
// Categories: "Web Development", "UI/UX Design", "Mobile Development"
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce solution with seamless checkout experience and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    category: "UI/UX Design",
    description: "Comprehensive financial analytics dashboard with interactive charts and real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Figma", "React", "D3.js"],
    link: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Intuitive mobile banking experience with biometric authentication and instant transfers.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["React Native", "TypeScript", "Firebase"],
    link: "#",
  },
  {
    id: 4,
    title: "AI Content Platform",
    category: "Web Development",
    description: "AI-powered content generation platform with smart templates and collaboration features.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Next.js", "OpenAI", "PostgreSQL"],
    link: "#",
  },
  {
    id: 5,
    title: "Healthcare Portal",
    category: "UI/UX Design",
    description: "Patient-centric healthcare portal with appointment scheduling and telemedicine integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["Figma", "Vue.js", "Node.js"],
    link: "#",
  },
  {
    id: 6,
    title: "Real Estate Marketplace",
    category: "Web Development",
    description: "Property listing platform with virtual tours, smart filtering, and mortgage calculator.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["React", "GraphQL", "AWS"],
    link: "#",
  },
];

// ----- PROJECT CATEGORIES -----
// Add or remove categories here
export const projectCategories = ["All", "Web Development", "UI/UX Design", "Mobile Development"];
