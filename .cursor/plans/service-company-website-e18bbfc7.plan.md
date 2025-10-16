<!-- e18bbfc7-132d-476c-898e-81e71532f3a0 85ce5709-ee2c-49ca-8171-982d4a830726 -->
# Service Company Website Build Plan

## Project Structure

Create a modular component-based architecture with:

- Multiple HTML pages (index.html, services.html, packages.html, portfolio.html, evidence.html, workflow.html, faq.html, contact.html)
- Separate reusable component files (header.html, footer.html, navigation.html)
- Content management via `data/content.js` for easy updates
- Image placeholders using Unsplash API
- CSS organized in `assets/css/custom.css` for additional styling
- JavaScript in `assets/js/main.js` for Alpine.js components

## Core Technologies

- **Tailwind CSS v4** via CDN: `https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4`
- **Alpine.js 3.x** via CDN: `https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js`
- Vanilla JavaScript for component loading and form validation

## Page Implementation Details

### 1. Home Page (index.html)

- Hero section with headline "Solusi Digital Kustom untuk Bisnis Anda" + CTA buttons
- Value propositions grid (Kecepatan, Keamanan, Komunikasi Jelas, Dukungan Purna Jual)
- Service summary cards with icons
- Trusted-by logos section (evidence preview)
- Client testimonials carousel (Alpine.js)
- Multiple CTAs throughout
- Meta tags with Indonesian content, Open Graph, Twitter Cards

### 2. Services Page (services.html)

- Detailed service sections with sub-services:
  - **Pengembangan Aplikasi Web & Android** (UI/UX Design, Front-end/Back-end, API Integration)
  - **DevOps & Hosting** (CI/CD, Monitoring, Server Management)
  - **Perbaikan & Perakitan Hardware** (PC repair, custom assembly, upgrades)
  - **Solusi AI** (TTS, Speech-to-Text, Object Detection, Classification, Translation, Routing algorithms)
- Each service includes description, estimated turnaround time, tech stack options
- CTA per service section

### 3. Packages & Pricing Page (packages.html)

- Three-tier package cards (Harian, Mingguan, Bulanan)
- Feature lists per package
- Use-case descriptions (not prices)
- Comparison table with Alpine.js toggle
- "Unlimited revisions" guarantee highlighted
- CTA: "Dapatkan Penawaran Sekarang"

### 4. Portfolio / Case Studies Page (portfolio.html)

- Filterable grid (Alpine.js) by service/technology/industry
- Project cards with:
  - Screenshot thumbnail
  - Title, URL, tech stack
  - Role and short description
  - Quantitative results (conversion ↑, load time ↓)
  - Lightbox modal for full screenshots (Alpine.js)
- Detailed case study sections with timeline, challenges, solutions
- JSON-LD structured data (CreativeWork) per project
- CTA: "Request Demo / Get a Quote"

### 5. Evidence & Social Proof Page (evidence.html)

- **Portfolio Section** with featured projects
- **GitHub Section**:
  - Repo cards with name, URL, badges (stars, forks, last commit)
  - README summary
  - "View Code" button
  - JSON-LD SoftwareSourceCode markup
- **LinkedIn Section**:
  - Company profile link
  - Testimonial quotes
  - "View on LinkedIn" button
- **YouTube Section**:
  - Embedded demo videos
  - Duration, publish date
  - "Watch Demo" button
  - JSON-LD VideoObject markup
- Privacy note for sensitive projects with "Request Access" button

### 6. Workflow / Process Page (workflow.html)

- Visual step-by-step process: Briefing → Desain → Pengembangan → Pengujian → Deploy → Revisi
- Timeline visualization (CSS + Alpine.js)
- Description per phase
- Estimated duration per phase
- CTA: "Mulai Proyek Anda"

### 7. FAQ Page (faq.html)

- Alpine.js accordion component
- Common questions about development time, pricing, support, technology stack, guarantees
- Search/filter functionality (Alpine.js)
- CTA: "Masih Ada Pertanyaan? Hubungi Kami"

### 8. Contact Page (contact.html)

- Contact form with validation (Alpine.js + action="#" for future backend)
- WhatsApp direct link button
- Email display
- GitHub / LinkedIn / YouTube social links
- Google Maps embed placeholder
- Business hours
- Form fields: Name, Email, Phone, Service Interest, Message

### 9. Reusable Components

- **Header** (`components/header.html`): Logo, navigation menu, mobile hamburger (Alpine.js)
- **Footer** (`components/footer.html`): Legal links (Privacy Policy, Terms), social media icons, copyright, sitemap links
- **Navigation** (`components/navigation.html`): Responsive nav with active state handling

## Content & Data Structure

### Content File (`data/content.js`)

JavaScript object containing:

- All Indonesian copy (headlines, descriptions, testimonials)
- Service details and features
- Package features
- Portfolio items (example data as shown in prompt)
- GitHub repos (example data)
- YouTube videos (example data)
- FAQ items
- Contact information

### Example Portfolio Item:

```javascript
{
  title: "Toko Online ABC",
  url: "https://example-shop.com",
  screenshot: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
  role: "Pengembangan Front-end & Back-end",
  tech: ["React", "Node.js", "Postgres"],
  result: "Konversi meningkat 25% dalam 2 bulan, waktu muat berkurang 60%",
  industry: "E-commerce",
  service: "web-development"
}
```

## SEO Implementation

### Meta Tags (all pages)

- Title, description (Indonesian)
- Open Graph (og:title, og:description, og:image, og:url)
- Twitter Cards (twitter:card, twitter:title, twitter:description, twitter:image)
- Canonical URLs
- Language declaration (lang="id")

### JSON-LD Structured Data

- **Organization** schema (Home page)
- **SoftwareSourceCode** schema (GitHub repos)
- **VideoObject** schema (YouTube videos)
- **CreativeWork** schema (Portfolio projects)

### SEO Keywords

1. Pengembangan Aplikasi Web Kustom
2. Pengembangan Aplikasi Android Kustom
3. Layanan DevOps Profesional
4. Hosting Aman dan Andal
5. Perbaikan Hardware Komputer
6. Solusi AI untuk Bisnis
7. Integrasi API Bisnis
8. Pengembangan E-commerce
9. Optimasi Kinerja Aplikasi
10. Dukungan Teknis Berkelanjutan

### Home Page Meta

- **Title:** "Solusi Digital Kustom untuk Bisnis Anda | Nama Perusahaan"
- **Description:** "Kami mengembangkan aplikasi web dan Android yang disesuaikan dengan kebutuhan bisnis Anda, didukung oleh layanan DevOps, hosting, perbaikan hardware, dan solusi AI."

## High-Converting CTAs

1. "Dapatkan Penawaran Sekarang"
2. "Jadwalkan Konsultasi Gratis"
3. "Lihat Demo Proyek Kami"

## Visual Design & UX

- **Color Palette**: Modern blue/purple gradient for primary, neutral grays, accent green for success
- **Typography**: Inter or Poppins (Google Fonts fallback)
- **Icons**: Heroicons or similar icon set (inline SVG)
- **Layout**: Mobile-first responsive grid, max-width containers
- **Animations**: Subtle fade-ins and slides using Alpine.js + Tailwind transitions
- **Loading States**: Alpine.js loading indicators for form submission

## Technical Features

### Alpine.js Components

- Mobile navigation toggle
- Testimonial carousel
- Portfolio filter
- FAQ accordion
- Modal/lightbox for screenshots
- Form validation
- Smooth scroll navigation

### Performance Optimizations

- Lazy loading images (loading="lazy")
- Minimal external dependencies (only CDN links)
- Inline critical CSS for above-the-fold content
- Async/defer script loading

## File Structure

```
calista_service_v2/
├── index.html
├── services.html
├── packages.html
├── portfolio.html
├── evidence.html
├── workflow.html
├── faq.html
├── contact.html
├── components/
│   ├── header.html
│   ├── footer.html
│   └── navigation.html
├── data/
│   └── content.js
├── assets/
│   ├── css/
│   │   └── custom.css
│   └── js/
│       └── main.js
└── images/
    └── .gitkeep (placeholder directory)
```

## Implementation Order

1. Create project structure and directories
2. Build reusable components (header, footer, navigation)
3. Implement home page with all sections
4. Create services page with detailed descriptions
5. Build packages & pricing page
6. Develop portfolio page with filter and lightbox
7. Create evidence & social proof page
8. Implement workflow page
9. Build FAQ page with accordion
10. Create contact page with form validation
11. Set up content.js with all Indonesian copy
12. Add custom CSS for refinements
13. Implement main.js for component loading and utilities
14. Add JSON-LD structured data to relevant pages
15. Test responsiveness across breakpoints
16. Final SEO audit and meta tag verification

## Deliverables Summary

✅ Complete website with 8 HTML pages + components

✅ Indonesian content throughout

✅ Tailwind CSS v4 + Alpine.js 3.x integration

✅ SEO-optimized with meta tags and JSON-LD

✅ Responsive mobile-first design

✅ Portfolio, GitHub, LinkedIn, YouTube integration

✅ Contact form with validation (ready for backend)

✅ Image placeholders via Unsplash

✅ Content.js for easy content management

✅ Clear CTAs and conversion optimization

### To-dos

- [ ] Create project directory structure, folders, and placeholder files
- [ ] Build reusable components (header, footer, navigation) with Alpine.js
- [ ] Create content.js with all Indonesian copy, portfolio, GitHub, YouTube data
- [ ] Implement home page with hero, value props, services, testimonials, CTAs
- [ ] Build services page with detailed descriptions and sub-services
- [ ] Create packages & pricing page with three tiers
- [ ] Develop portfolio page with filterable grid and lightbox modals
- [ ] Build evidence page with GitHub, LinkedIn, YouTube sections and JSON-LD
- [ ] Create workflow, FAQ, and contact pages
- [ ] Add all meta tags, JSON-LD structured data, and SEO optimization
- [ ] Create custom.css and main.js for additional styling and utilities
- [ ] Test responsiveness, navigation, forms, and all interactive features