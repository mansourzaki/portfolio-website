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

All the content you need to change is in one file: `client/src/pages/home.tsx`

### 1. Personal Information

Find the **HeroSection** and update the headline text:

```tsx
// Around line 220-240
<h1>
  Creative Developer  // Change this to your title
  <span className="text-gradient">& Designer</span>
</h1>
```

### 2. Projects

Find the `projects` array near the top of the file (around line 17):

```tsx
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    category: "Web Development",  // Options: "Web Development", "UI/UX Design", "Mobile Development"
    description: "A brief description of your project.",
    image: "https://your-image-url.com/image.jpg",  // Use Unsplash or your own images
    tags: ["React", "Node.js", "MongoDB"],  // Technologies used
    link: "https://your-project-link.com",  // Live project URL
  },
  // Add more projects...
];
```

### 3. Skills

Find the `skills` array (around line 83):

```tsx
const skills = [
  { name: "React / Next.js", level: 95 },  // level is 0-100 for the progress bar
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  // Add or modify your skills...
];
```

### 4. Experience

Find the `experiences` array (around line 92):

```tsx
const experiences = [
  {
    role: "Your Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: "What you did in this role.",
  },
  // Add more experiences...
];
```

### 5. Contact Information

In the **ContactSection** (around line 580-600), update:

```tsx
// Email
<a href="mailto:your@email.com">your@email.com</a>

// Location
<div>Your City, Country</div>
```

### 6. Social Links

Find the social media arrays in multiple sections and update the URLs:

```tsx
{ Icon: SiGithub, href: "https://github.com/yourusername", label: "GitHub" },
{ Icon: SiLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
{ Icon: SiX, href: "https://x.com/yourusername", label: "X" },
{ Icon: SiDribbble, href: "https://dribbble.com/yourusername", label: "Dribbble" },
```

### 7. About Section Text

In the **AboutSection** (around line 310-330), update the bio paragraphs:

```tsx
<p>
  I'm a passionate... // Your personal bio
</p>
```

## Customizing Colors

The color scheme is defined in `client/src/index.css`. The main colors to change:

```css
/* Light mode - around line 51 */
--primary: 217 91% 53%;      /* Blue accent color */
--accent: 38 92% 50%;        /* Amber highlight color */

/* Dark mode - around line 129 */
--primary: 217 91% 60%;
--accent: 38 92% 55%;
```

Colors use HSL format: `Hue Saturation% Lightness%`

## Customizing Fonts

Fonts are set in `client/src/index.css` (around line 48):

```css
--font-sans: 'Inter', sans-serif;      /* Body text */
--font-serif: 'Playfair Display', Georgia, serif;  /* Headings */
```

## Project Structure

```
client/src/
  pages/
    home.tsx        <-- Main file to edit for content
  index.css         <-- Colors and fonts
  
server/
  routes.ts         <-- Contact form API
  storage.ts        <-- Data storage
```

## Adding New Project Categories

1. Add your new category to the `categories` array in **ProjectsSection**:

```tsx
const categories = ["All", "Web Development", "UI/UX Design", "Mobile Development", "Your New Category"];
```

2. Use the same category name in your project's `category` field.

## Contact Form

The contact form saves messages to the server. Messages are stored in memory by default. For production, you may want to:

- Connect to a database
- Send email notifications
- Integrate with a service like Formspree

## Deployment

Click the "Publish" button in Replit to make your portfolio live with a public URL.

## License

Feel free to use this template for personal or commercial projects.
