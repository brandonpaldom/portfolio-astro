# Technical Context

## Technologies Used
- **Astro** (4.0+) for static site generation
- **Tailwind CSS** (3.0+) for styling
- **GitHub API** for project data integration
- **TypeScript** for type safety
- **Prettier** for code formatting
- **Git** for version control

## Development Setup
- Node.js 18+ with npm
- Astro project structure with:
  - Component-based architecture
  - Data-driven pages via JSON files
  - Public assets directory
  - Tailwind CSS configuration

## Technical Constraints
- Static site generation only (no server-side rendering)
- GitHub API rate limits for project data
- Mobile-first responsive design requirements
- Accessibility standards compliance (WCAG 2.1 AA)

## Dependencies
- Astro core packages
- Tailwind CSS with PostCSS
- GitHub API client libraries
- Form validation libraries
- Image optimization utilities

## Tool Usage Patterns
- Component development in src/components/
- Data management in src/data/
- Styling through Tailwind utility classes
- Page routing via src/pages/
- API integrations through src/lib/
