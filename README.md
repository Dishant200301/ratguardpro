# 🛡️ RatGuard Pro – Advanced Ultrasonic Rat Repellent

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20with-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

**High-Frequency 24/7 Ultrasonic Pest & Rodent Defense System for Vehicles, Homes, Garages & Industrial Warehouses.**

[Live Demo](#) • [Features](#-core-features) • [Installation Guide](#-installation--deployment) • [Tech Stack](#-tech-stack)

</div>

---

## 📖 Overview

**RatGuard Pro** is an innovative ultrasonic pest deterrence system engineered by Shyam Innovations. Utilizing complex, multi-frequency acoustic pressure waves (20kHz – 65kHz), RatGuard Pro disorients and permanently repels rodents without hazardous poisons, lethal traps, or toxic chemicals.

This repository houses the official high-conversion e-commerce web application, featuring interactive product demos, video shopping reels, before/after interactive sliders, detailed specification comparisons, and streamlined checkout drawers.

---

## ✨ Core Features

- ⚡ **Dynamic Hero Showcase**: 8-slide auto-rotating hero banner with category focus (Car/Truck, Garage, Home, Hotel, Warehouse, Hospital, Factory, Retail).
- 🏬 **Interactive Bento Grid**: Visual use-case layout mapping 8 application environments with high-resolution imagery.
- 🛍️ **Direct Cart & Quick Checkout Drawer**: Real-time quantity adjustment, discount calculations, and WhatsApp direct checkout.
- 🎬 **Shop Through Video**: Video shopping reel carousel featuring real-world customer deployments with hover-to-play mechanics.
- ⚖️ **Interactive Pest Control Comparison Matrix**: 7-point feature breakdown comparing RatGuard Pro against traditional snap traps and chemical poisons.
- 🎚️ **Interactive Before & After Pest Slider**: Split-screen comparison demonstrating kitchen protection before and after RatGuard deployment.
- ❓ **Collapsible FAQ Accordion**: Clean, single-item expanding accordion with responsive mobile/desktop layout.
- 🏆 **Brand Trust & Proof Bar**: Infinite scrolling marquee featuring notable enterprises and corporate clients.
- 🇮🇳 **Made in India Certified**: High-efficiency circuitry consuming only 3-5W of electricity.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Modern UI framework with high-performance hooks and concurrent rendering |
| **TypeScript** | Type-safe component architecture and interface contracts |
| **Vite 6** | Ultra-fast build tool, bundling, and instant HMR |
| **Tailwind CSS v4** | Utility-first, responsive design system with custom animations |
| **Lucide Icons** | Crisp, scalable icon system for modern UI |
| **Motion** | Fluid micro-interactions and smooth page transitions |

---

## 📂 Project Architecture

```plaintext
ratguardpro---ultrasonic-rat-repellent/
├── public/
│   ├── bento/                # Use-case category photography
│   ├── hero/                 # High-resolution hero slide backgrounds
│   ├── icons/                # Vector SVG icons & badges
│   ├── logos/                # Corporate enterprise client logos
│   ├── trust-badges/         # Custom white SVG trust badge assets
│   ├── sitemap.xml           # Production SEO sitemap
│   ├── robots.txt            # Search engine crawler policies
│   └── _redirects            # SPA fallback for static deployments
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky navbar with announcement ticker
│   │   ├── HeroSection.tsx        # 8-slide hero with auto-play
│   │   ├── MarqueeSection.tsx     # Infinite moving brand logo track
│   │   ├── ProductSection.tsx     # Pricing, specs & cart controls
│   │   ├── BentoGridSection.tsx   # 9-area category bento grid
│   │   ├── ProductInfoSection.tsx # How it works & technical specs
│   │   ├── AboutSection.tsx       # Founder story & company vision
│   │   ├── CategoryCarousel.tsx   # Responsive horizontal carousel
│   │   ├── FeaturesTechSection.tsx# 12-point technology breakdown
│   │   ├── BeforeAfterSlider.tsx  # Interactive split-screen comparison
│   │   ├── ShopThroughVideo.tsx   # Video reel shopping feed
│   │   ├── ComparisonsChart.tsx   # Matrix vs traps and chemical poisons
│   │   ├── FaqSection.tsx         # Responsive single-item FAQ accordion
│   │   ├── Footer.tsx             # Trust badges, links & contact info
│   │   └── CartDrawer.tsx         # Slide-out quick order drawer
│   ├── data/
│   │   └── mockData.ts       # Central data store for slides, products, FAQs
│   ├── types/
│   │   └── index.ts          # TypeScript domain type definitions
│   ├── App.tsx               # Root application layout assembler
│   └── main.tsx              # Application entry point
├── vercel.json               # Vercel deployment & rewrite configuration
├── package.json              # Dependencies and build scripts
└── vite.config.ts            # Vite bundler & plugin configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18.0 or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ratguardpro.git
   cd ratguardpro
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:8080](http://localhost:8080) (or the port specified in terminal) in your browser.

---

## 📦 Build & Production

To create an optimized production build:

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

---

## ☁️ Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `ratguardpro` repository.
4. Framework Preset will automatically detect **Vite**.
5. Build and Output Settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Vercel will automatically read [`vercel.json`](vercel.json) to handle Single Page Application (SPA) URL rewrites and asset caching headers.

### Deploying to Netlify / Cloudflare Pages

The repository includes [`public/_redirects`](public/_redirects) which guarantees seamless client-side routing on Netlify and Cloudflare Pages out-of-the-box.

---

## 📄 License & Intellectual Property

© 2026 RatGuard Pro / Shyam Innovations. All rights reserved.
Designed and Developed in India.
