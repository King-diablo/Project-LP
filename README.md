# Mon E'clat Consult Landing Page

A modern, responsive landing page for **Mon E'clat Consult**, an international education consultancy helping students navigate studying abroad with ease.

## About Mon E'clat Consult

Mon E'clat Consult is a comprehensive education and relocation consultancy offering:

- **Academic Pathways**: Bachelor's, Master's, and PhD program placements across top universities
- **Application & Admission Support**: End-to-end guidance for university applications and admissions
- **Visa & Relocation**: Expert documentation, visa processing, and settlement assistance
- **Work Permits & Opportunities**: Post-study work pathways and international career guidance
- **Budget-Tailored Solutions**: Affordable options and scholarship guidance for all financial backgrounds

## Project Overview

This is a **desktop-first, fully responsive landing page** built with modern web technologies to showcase Mon E'clat Consult's services and success stories.

### Key Features

- ✨ **Desktop-first responsive design** — optimized for desktop viewing with mobile/tablet fallbacks
- 🎨 **Modern, clean UI** — professional design with gradient backgrounds and smooth interactions
- 📱 **Fully responsive** — works seamlessly on desktop (1440px+), tablet (768px–1024px), and mobile (<768px)
- ⚡ **Fast & optimized** — built with Vite for rapid development and production builds
- 🎯 **Accessible** — semantic HTML and keyboard-friendly navigation

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast build tooling
- **CSS3** with custom properties and responsive design
- **Bun** package manager

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed

### Installation

```bash
bun install
```

### Development

Start the dev server:

```bash
bun run dev
```

The site will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
bun run build
```

Output is generated in the `dist/` folder.

### Preview

Preview the production build locally:

```bash
bun run preview
```

## Project Structure

```
src/
├── App.tsx              # Main app component
├── Home.tsx             # Landing page (main content)
├── index.css            # Global styles
├── App.css              # App-level styles
├── Home.css             # Desktop-first responsive styles
├── main.tsx             # React entry point
└── assets/              # Static assets

public/SVG/             # SVG icons and images
```

## Styling & Responsive Design

The site uses a **desktop-first approach**:

- **Desktop (1440px+)**: Full multi-column layouts with optimal spacing
- **Tablet (768px–1024px)**: 2-column grids with adjusted typography
- **Mobile (<768px)**: Single-column stacked layout with touch-friendly sizing

All styles are defined in `src/Home.css` using CSS custom properties for maintainability.

## Available Scripts

- `bun run dev` — Start development server
- `bun run build` — Build for production
- `bun run preview` — Preview production build
- `bun run lint` — Run ESLint
  import reactX from 'eslint-plugin-react-x'
  import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
