# Ihza Mahendra - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Framer Motion.

## Features

- Responsive design with smooth animations
- Optimized images (WebP format)
- SEO-friendly with Open Graph tags
- Contact form with EmailJS integration
- Accessibility compliant (WCAG)
- Error boundary for graceful error handling
- PropTypes validation
- Code formatted with Prettier

## Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 4.4.5
- **Animation**: Framer Motion
- **Styling**: SCSS
- **Form Service**: EmailJS
- **Code Quality**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ihza-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your EmailJS credentials to `.env`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Code Quality

Lint your code:
```bash
npm run lint
```

Format your code:
```bash
npm run format
```

Check formatting:
```bash
npm run format:check
```

### Image Optimization

Optimize portfolio images for web:
```bash
# Quick optimization
./optimize-image.sh path/to/image.png

# Custom quality (90%)
./optimize-image.sh path/to/image.png 90
```

📘 See [IMAGE_OPTIMIZATION.md](./IMAGE_OPTIMIZATION.md) for complete guide

## Project Structure

```
src/
├── components/        # React components
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Portfolio/
│   ├── Contact/
│   └── ...
├── constants/        # Animation variants and constants
├── data/            # Portfolio data and config
├── common/          # Shared/reusable components
└── assets/          # Static assets
```

## Improvements Made

### Phase 1 - Critical
✅ Moved API keys to environment variables  
✅ Updated .gitignore for security  
✅ Optimized images (converted to WebP)  
✅ Fixed accessibility issues (alt tags, ARIA labels)  

### Phase 2 - High Impact
✅ Added comprehensive SEO meta tags  
✅ Cleaned up commented code  
✅ Added Error Boundary component  
✅ Improved form validation and feedback  

### Phase 3 - Quality
✅ Added PropTypes validation  
✅ Set up Prettier configuration  
✅ Added lazy loading for images  
✅ Extracted data to config files  
✅ Extracted animation variants  
✅ Fixed folder naming conventions  

## License

This project is private and proprietary.

## Contact

- Email: ihzahmahendra6661@gmail.com
- GitHub: [@ihza6661](https://github.com/ihza6661)
- Instagram: [@ihza.ms](https://instagram.com/ihza.ms)

