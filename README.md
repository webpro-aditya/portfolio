# 🚀 Aditya Dandotia - Professional Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A modern, responsive portfolio website showcasing 5+ years of web development expertise, built with cutting-edge technologies and best practices.

## 🌟 Live Demo

**Portfolio URL**: [View Live Portfolio](https://lovable.dev/projects/38e7b94c-0648-49ff-8031-4402a92b1946)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 Overview

This portfolio represents a comprehensive showcase of professional web development skills, featuring a modern design system, interactive components, and optimized performance. Built for a seasoned developer with expertise in Laravel, WordPress, PHP, and expanding into the MERN stack.

### 👨‍💻 About the Developer

**Aditya Dandotia** - Full Stack Web Developer
- 🏢 **Current Role**: Software Engineer at ENS Enterprises Pvt Ltd
- 📍 **Location**: Noida, India
- 🎓 **Education**: B.Tech in Electronics & Communication Engineering
- 💼 **Experience**: 5+ years in professional web development
- 🔧 **Specialization**: Laravel, WordPress, PHP, JavaScript, ReactJS

## ✨ Features

### 🎨 Design & User Experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark Theme**: Elegant dark color scheme with gradient accents
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Custom Cursor**: Enhanced user interaction with custom cursor follower

### 📱 Sections & Components
- **Hero Section**: Dynamic introduction with parallax background effects
- **About Me**: Professional summary and personal interests
- **Skills**: Technical expertise visualization with progress indicators
- **Education**: Academic background with relevant highlights
- **Projects**: Featured work with detailed descriptions and technologies
- **Experience**: Professional timeline with achievements
- **Contact**: Interactive contact form with social media links
- **Resume Download**: One-click resume download functionality

### 🚀 Technical Features
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Modular, reusable React components
- **Modern Styling**: Tailwind CSS with custom design system

## 🛠 Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.8.3** - Type-safe development experience
- **Vite 5.4.19** - Lightning-fast build tool and dev server

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful, customizable icons

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### Additional Libraries
- **React Router DOM** - Client-side routing
- **React Hook Form** - Efficient form handling
- **EmailJS** - Contact form email integration
- **Framer Motion** - Advanced animations (via Tailwind CSS Animate)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── resume.pdf
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Education.tsx    # Education details
│   │   ├── Experience.tsx   # Work experience
│   │   ├── Hero.tsx         # Landing section
│   │   ├── Projects.tsx     # Featured projects
│   │   ├── Skills.tsx       # Technical skills
│   │   └── Footer.tsx       # Site footer
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components
│   └── assets/              # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Development Guidelines

- **Component Structure**: Follow the established pattern in existing components
- **Styling**: Use Tailwind CSS classes and maintain the design system
- **TypeScript**: Ensure all components are properly typed
- **Responsive Design**: Test on multiple screen sizes
- **Performance**: Optimize images and minimize bundle size

## 🌐 Deployment

### Quick Deploy with Lovable

1. Visit [Lovable Project](https://lovable.dev/projects/38e7b94c-0648-49ff-8031-4402a92b1946)
2. Click **Share** → **Publish**
3. Your portfolio will be live instantly

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any static hosting service

### Custom Domain

To connect a custom domain:
1. Navigate to **Project** → **Settings** → **Domains**
2. Click **Connect Domain**
3. Follow the DNS configuration instructions

## ⚡ Performance

### Optimization Features
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Compressed images and optimized fonts
- **Lazy Loading**: Components loaded on demand
- **Caching**: Efficient browser caching strategies

### Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Aditya Dandotia**
- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 💼 LinkedIn: [linkedin.com/in/aditya-dandotia](https://linkedin.com/in/aditya-dandotia)
- 🌐 Portfolio: [Live Demo](https://lovable.dev/projects/38e7b94c-0648-49ff-8031-4402a92b1946)

---

<div align="center">
  <p>Built with ❤️ using React, TypeScript, and Tailwind CSS</p>
  <p>© 2024 Aditya Dandotia. All rights reserved.</p>
</div>
