# Agent Guidelines for ihza-landing-page

## Build & Development Commands
- **Dev server**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (Production build)
- **Lint**: `npm run lint` (ESLint check)
- **Preview**: `npm run preview` (Preview production build)
- **No test suite**: This project has no test commands configured

## Code Style Guidelines
- **Framework**: React 18.2 with Vite, ES modules only
- **Imports**: Relative imports for components/styles, named imports for libraries (e.g., `import { motion } from "framer-motion"`)
- **Styling**: SCSS modules (`.module.scss`) or plain `.scss` files imported directly
- **Components**: Functional components with arrow functions, default export at bottom
- **Naming**: PascalCase for components/files, camelCase for variables/functions
- **Props**: PropTypes validation disabled (`react/prop-types: off`), no TypeScript enforcement despite @types packages
- **File Structure**: Components in `src/components/[ComponentName]/`, shared utilities in `src/common/`
- **Animations**: Use `framer-motion` for animations with variants pattern
- **Assets**: Public assets referenced with `/` prefix (e.g., `/ihza.png`), imported SVGs for components
- **ESLint**: Warns on unused vars, allows constant exports, uses React 18.2 JSX runtime (no React import needed)
- **Error Handling**: No specific patterns observed in codebase
