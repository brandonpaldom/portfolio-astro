# System Patterns

## Architecture
- Astro static site generator with component-based architecture
- Data-driven approach using JSON files in src/data/
- Component hierarchy centered around Layout.astro
- Progressive enhancement with client-side interactivity

## Technical Decisions
- Tailwind CSS for utility-first styling
- GitHub API integration for project data (via src/data/projects.json)
- Responsive design using mobile-first approach
- Astro's built-in image optimization for public assets

## Design Patterns
- Reusable UI components (Navbar, Footer, ProjectCard, SkillCarousel)
- Data binding through Astro props and context
- Dynamic routing for project detail pages ([slug].astro)
- Conditional rendering for section visibility

## Component Relationships
- Layout.astro as root component wrapping all pages
- Navbar and Footer as persistent layout components
- ProjectCard used in both index.astro and [slug].astro
- Data flow from JSON files to components via Astro's fetchContent

## Critical Implementation Paths
- Project detail page generation from GitHub data
- Responsive image handling with srcset attributes
- Form validation and submission handling in contact section
- Skill carousel implementation with touch/swipe support
