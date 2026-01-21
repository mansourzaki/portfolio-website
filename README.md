# Portfolio Website Template

A modern, responsive portfolio website template built with React, TypeScript, and Tailwind CSS. Perfect for developers, designers, and creatives who want to showcase their work.

## Features

- Beautiful hero section with animated background
- About section with skills and experience
- Project gallery with category filtering
- Working contact form
- Fully responsive design
- Smooth animations with Framer Motion
- Dark/light mode ready

## Quick Start

1. Clone or fork this project
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open your browser to see the portfolio

## How to Customize

**All customization happens in ONE file:** `client/src/config/portfolio.ts`

### Personal Information

```typescript
export const personalInfo = {
  name: "Your Name",                    // Shown in footer
  title: "Creative Developer",          // Main headline
  subtitle: "& Designer",               // Headline second line
  description: "Your bio/tagline...",   // Hero description
  location: "Your City, Country",       // Shown in About & Contact
  email: "your@email.com",              // Contact email
  availableForWork: true,               // Show/hide "Available" badge
};
```

### Social Links

```typescript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  x: "https://x.com/yourusername",
  dribbble: "https://dribbble.com/yourusername",
};
```

### About Section

```typescript
export const aboutInfo = {
  bio: [
    "First paragraph of your bio...",
    "Second paragraph of your bio...",
  ],
  stats: [
    { label: "Development", value: "6+ Years" },
    { label: "Design", value: "50+ Projects" },
    { label: "Products", value: "20+ Launched" },
  ],
};
```

### Skills

```typescript
export const skills = [
  { name: "React / Next.js", level: 95 },  // level: 0-100 for progress bar
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  // Add more skills...
];
```

### Experience

```typescript
export const experiences = [
  {
    role: "Your Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: "What you did in this role.",
  },
  // Add more experiences...
];
```

### Projects

```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    category: "Web Development",  // Must match a category below
    description: "Brief description...",
    image: "https://your-image-url.com/image.jpg",
    tags: ["React", "Node.js"],
    link: "https://live-project-url.com",
  },
  // Add more projects...
];

// Available categories for filtering
export const projectCategories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Mobile Development",
  // Add custom categories here
];
```

## Customizing Colors

Edit `client/src/index.css` to change the color scheme:

```css
/* Light mode colors (line ~51) */
--primary: 217 91% 53%;      /* Blue - buttons, links, accents */
--accent: 38 92% 50%;        /* Amber - highlights, gradients */

/* Dark mode colors (line ~129) */
--primary: 217 91% 60%;
--accent: 38 92% 55%;
```

Colors use HSL format: `Hue Saturation% Lightness%`

## Customizing Fonts

Edit `client/src/index.css` (line ~48):

```css
--font-sans: 'Inter', sans-serif;              /* Body text */
--font-serif: 'Playfair Display', serif;       /* Headings */
```

## Project Structure

```
client/src/
  config/
    portfolio.ts    <-- EDIT THIS FILE for all content
  pages/
    home.tsx        <-- Layout and components (don't edit unless customizing layout)
  index.css         <-- Colors and fonts

server/
  routes.ts         <-- Contact form API
```

## Contact Form

The contact form saves messages to the server. Messages are stored in memory by default. For production, you may want to:

- Connect to a database
- Send email notifications
- Integrate with a service like Formspree

## Deployment

Click the "Publish" button in Replit to make your portfolio live with a public URL.

## License

Feel free to use this template for personal or commercial projects.
