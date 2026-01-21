# Portfolio Website

## Overview

A modern portfolio website built as a full-stack TypeScript application. The project showcases creative work with a polished UI featuring smooth animations, a contact form with server-side validation, and a responsive design. Built with React frontend and Express backend, using a monorepo structure with shared types between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **UI Components**: Shadcn/ui component library (Radix UI primitives with custom styling)
- **State Management**: TanStack React Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Framework**: Express 5 with TypeScript
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Validation**: Zod schemas shared between client and server via drizzle-zod
- **Storage**: Abstracted storage interface (currently in-memory, designed for easy database integration)

### Project Structure
```
├── client/           # React frontend application
│   └── src/
│       ├── components/ui/  # Shadcn UI components
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utilities and query client
│       └── pages/          # Route components
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data persistence layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema + Zod validation
└── script/           # Build scripts
```

### Build System
- Development: Vite dev server with HMR proxied through Express
- Production: esbuild bundles server code, Vite builds client to `dist/public`
- Database migrations: Drizzle Kit for schema management

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

## External Dependencies

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Connection**: Requires `DATABASE_URL` environment variable
- **Session Store**: connect-pg-simple for production sessions

### UI Framework
- **Component System**: Shadcn/ui (New York style variant)
- **Primitives**: Full Radix UI component suite
- **Icons**: Lucide React + React Icons (social icons)

### Development Tools
- **Replit Integration**: Custom Vite plugins for error overlay, cartographer, and dev banner
- **Type Checking**: TypeScript with strict mode, bundler module resolution