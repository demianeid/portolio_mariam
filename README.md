# 🎨 Mariam Gamal — Fine Art Portfolio

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/demianeid/portolio_mariam?style=for-the-badge&color=b85d34)
![GitHub stars](https://img.shields.io/github/stars/demianeid/portolio_mariam?style=for-the-badge&color=c8963e)
![GitHub forks](https://img.shields.io/github/forks/demianeid/portolio_mariam?style=for-the-badge&color=24584e)
![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<br />

**An interactive fine art portfolio showcasing original oil, acrylic, portrait, and canvas artworks with rich aesthetic design and modern web performance.**

[🌐 Live Demo](https://portolio-mariam.vercel.app) • [✨ Key Features](#-key-features) • [🚀 Getting Started](#-getting-started) • [📂 Project Structure](#-project-structure)

</div>

---

## 📖 Overview

This project is a bespoke, high-performance portfolio website created for visual artist **Mariam Gamal**. The design bridges the warmth and texture of a classical painting studio with modern web interaction: tactile canvas textures, organic watercolor bloom animations, refined typography, and full Right-to-Left (RTL) Arabic support.

The codebase is cleanly decoupled into modular, maintainable files (**HTML5**, **CSS3**, **JavaScript**, **Tailwind CSS**) engineered for high speed, smooth 60fps animations, and optimal Core Web Vitals.

---

## ✨ Key Features

- 🎨 **Interactive Easel Hero Slider:**
  - Dynamic crossfade transitions between spotlighted artworks with auto-play and manual controls.
  - Interactive artwork metadata (title, medium, dimensions, and curator badges).

- 🖼️ **Dynamic Gallery Filtering:**
  - Instant client-side filtering across collections: *All, Oil Paintings, Acrylic, Portraits & Expressionism, Abstract*.
  - Smooth fade-in transitions between category switches.

- 🔍 **High-Resolution Artwork Lightbox Modal:**
  - Expanded view with artwork specifications (medium, canvas size, availability status).
  - Custom color pigment palette indicators extracted from each featured painting.

- 📜 **Artistic Design & Micro-Interactions:**
  - Subtle woven canvas cotton texture overlay.
  - Fluid, morphing organic watercolor blobs.
  - Painterly brush-stroke highlights under active navigation items and section headings.

- ⚡ **Performance & Core Web Vitals Optimization:**
  - Resource preloading for critical assets (`preconnect`, `preload`, `fetchpriority="high"` for LCP images).
  - Optimized Google Fonts loading with `display=swap` to eliminate FOIT (Flash of Invisible Text).
  - ScrollSpy navigation throttled via `requestAnimationFrame` for buttery-smooth scrolling.

- 📱 **Fully Responsive & RTL First:**
  - Seamless layout adaptation across mobile, tablet, laptop, and ultra-wide screens.
  - Responsive mobile drawer menu with smooth toggle interaction.

- 💌 **Custom Art Commission Form:**
  - Dedicated interactive form allowing art collectors and clients to request custom commissions.

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic structure, accessibility, and RTL orientation |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Canvas texture filters, fluid keyframe animations, and custom CSS variables |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first responsive grid layouts and rapid component styling |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Easel slider, modal lightboxes, filtering logic, and scroll-spy observer |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | Continuous deployment, CDN edge hosting, and automatic HTTPS |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | Version control and workflow management |

---

## 📂 Project Structure

```plaintext
portolio_mariam/
├── index.html          # Semantic HTML markup and layout
├── styles.css          # Custom styles, canvas texture, and watercolor animations
├── script.js           # Client-side JavaScript (Slider, Modal, Filters, ScrollSpy)
├── tailwind.config.js  # Custom theme extensions and color palette configuration
├── .gitignore          # Files excluded from version control
└── README.md           # Project documentation and guide
```

---

## 🚀 Getting Started

No package manager or build pipeline is required to run this project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/demianeid/portolio_mariam.git
cd portolio_mariam
```

### 2. Run Locally
- **Option A:** Open `index.html` directly in your favorite web browser.
- **Option B:** Use VS Code / Antigravity **Live Server** extension.
- **Option C:** Spin up a lightweight local server:
  ```bash
  # Using Python 3
  python -m http.server 8000
  ```
  Then visit [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🎨 Studio Color Palette

```css
:root {
  --art-primary:   #b85d34; /* Warm Terracotta & Clay */
  --art-secondary: #24584e; /* Andalusian Deep Olive Green */
  --art-gold:      #c8963e; /* Varnish & Antique Gold */
  --art-canvas:    #faf7f2; /* Natural Linen & Canvas White */
  --art-paper:     #fffefb; /* Crisp Cotton Paper */
  --art-ink:       #221d1a; /* Deep Charcoal & Raw Umber */
}
```

---

## 🌐 Deployment

The repository is linked directly to **Vercel** with continuous deployment enabled. Any push to the `main` branch automatically triggers an optimized production build:

```bash
git add .
git commit -m "feat: your update message"
git push origin main
```

- **Production URL:** [https://portolio-mariam.vercel.app](https://portolio-mariam.vercel.app)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) — feel free to use and customize it with attribution.

---

<div align="center">
  Crafted with passion for <b>Mariam Gamal Studio</b> 🖌️✨
</div>
