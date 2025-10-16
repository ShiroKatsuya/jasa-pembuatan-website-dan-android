# Calista Service - Website Perusahaan Layanan Digital

Website profesional untuk perusahaan layanan yang membangun aplikasi kustom (website & aplikasi Android) dan menawarkan layanan terkait (DevOps, hosting, perbaikan hardware, dan solusi AI).

## 🚀 Fitur Utama

- **Responsive Design**: Mobile-first approach dengan desain yang optimal di semua perangkat
- **SEO-Friendly**: Meta tags lengkap, JSON-LD structured data, dan optimasi SEO
- **Modern UI**: Desain bersih dan modern menggunakan Tailwind CSS v4
- **Interactive**: Alpine.js untuk interaktivitas tanpa framework berat
- **Fast Loading**: Optimasi performa dengan lazy loading dan component loading
- **Accessibility**: Struktur semantik dan ARIA labels untuk aksesibilitas

## 📁 Struktur Proyek

```
calista_service_v2/
├── index.html              # Halaman beranda
├── services.html           # Halaman layanan
├── packages.html           # Halaman paket & harga
├── portfolio.html          # Halaman portofolio & studi kasus
├── evidence.html           # Halaman bukti & kredensial
├── workflow.html           # Halaman proses kerja
├── faq.html               # Halaman FAQ
├── contact.html           # Halaman kontak
├── components/
│   ├── header.html        # Komponen header dengan navigasi
│   ├── footer.html        # Komponen footer
│   └── navigation.html    # Komponen navigasi
├── data/
│   └── content.js         # Data konten dalam bahasa Indonesia
├── assets/
│   ├── css/
│   │   └── custom.css     # Custom CSS styles
│   └── js/
│       └── main.js        # JavaScript utilities
└── images/                # Direktori untuk gambar
    └── .gitkeep
```

## 🛠️ Teknologi yang Digunakan

- **Tailwind CSS v4**: Framework CSS utility-first terbaru via CDN
- **Alpine.js 3.x**: Framework JavaScript ringan untuk interaktivitas
- **Vanilla JavaScript**: Utilities dan component loading
- **Google Fonts**: Inter font family untuk tipografi modern
- **JSON-LD**: Structured data untuk SEO
- **Unsplash**: Placeholder images (dapat diganti dengan gambar asli)

## 📄 Halaman Website

### 1. **Home (index.html)**
- Hero section dengan CTA utama
- Value propositions (Kecepatan, Keamanan, Komunikasi, Dukungan)
- Ringkasan layanan
- Trusted-by logos
- Testimonial carousel
- Multiple CTAs

### 2. **Services (services.html)**
- Detail 4 layanan utama dengan sub-layanan
- Teknologi yang digunakan per layanan
- Estimasi waktu pengerjaan
- Jaminan dan garansi

### 3. **Packages (packages.html)**
- 3 paket layanan (Harian, Mingguan, Bulanan)
- Perbandingan fitur dengan toggle view
- Use-case per paket
- FAQ paket

### 4. **Portfolio (portfolio.html)**
- Grid portofolio dengan filter
- Lightbox untuk screenshot
- Studi kasus detail dengan tantangan & solusi
- Hasil kuantitatif

### 5. **Evidence (evidence.html)**
- Proyek unggulan
- Repositori GitHub dengan badges
- Testimoni LinkedIn
- Demo video YouTube
- JSON-LD structured data

### 6. **Workflow (workflow.html)**
- Timeline proses kerja 6 tahap
- Detail aktivitas per tahap
- Jaminan kualitas
- Komunikasi & update

### 7. **FAQ (faq.html)**
- Search functionality
- Filter per kategori
- Accordion dengan smooth transitions
- 8+ pertanyaan umum

### 8. **Contact (contact.html)**
- Form kontak dengan validasi
- Quick contact (WhatsApp, Email, Phone)
- Jam operasional
- Social media links
- Map placeholder

## 🎨 Desain & UX

### Color Palette
- **Primary**: Blue (#3B82F6) to Purple (#9333EA) gradient
- **Secondary**: Gray tones untuk teks dan backgrounds
- **Accent**: Green untuk success states

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, 600-900 weight
- **Body**: Regular, 400-500 weight

### Components
- Cards dengan hover effects
- Buttons dengan gradient dan shadows
- Forms dengan validasi real-time
- Modals dan lightboxes
- Carousels dengan auto-advance

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1536px

## 🔧 Setup & Installation

### 1. Clone atau Download Repository

```bash
git clone <repository-url>
cd calista_service_v2
```

### 2. Jalankan Local Server

Karena menggunakan component loading, Anda memerlukan local server:

**Option 1: Python**
```bash
python -m http.server 8000
```

**Option 2: Node.js (http-server)**
```bash
npx http-server -p 8000
```

**Option 3: VS Code Live Server**
- Install extension "Live Server"
- Right-click pada `index.html`
- Pilih "Open with Live Server"

### 3. Buka di Browser

```
http://localhost:8000
```

## 📝 Customization Guide

### 1. Update Content

Edit file `data/content.js`:
```javascript
const content = {
  company: {
    name: "Nama Perusahaan Anda",
    phone: "+62-xxx-xxx-xxxx",
    email: "email@anda.com",
    // ... update semua data
  }
};
```

### 2. Replace Images

- Tempatkan gambar di folder `images/`
- Update path di `content.js`:
```javascript
screenshot: "/images/your-project.png"
```

### 3. Update Colors

Edit `custom.css` atau gunakan Tailwind classes:
```css
/* Custom gradient */
.hero-gradient {
    background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```

### 4. Modify Navigation

Edit `data/content.js`:
```javascript
navigation: [
  { name: "Menu Baru", href: "new-page.html" }
]
```

## 🎯 SEO Optimization

### Meta Tags
Setiap halaman sudah dilengkapi dengan:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### JSON-LD Structured Data
- Organization schema (Home)
- CreativeWork schema (Portfolio)
- SoftwareSourceCode schema (GitHub)
- VideoObject schema (YouTube)

### SEO Keywords
10 target keywords utama:
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

## 🚀 Deployment

### Option 1: GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
```
Enable GitHub Pages di repository settings.

### Option 2: Netlify
1. Drag & drop folder ke Netlify
2. Atau connect repository
3. Deploy otomatis

### Option 3: Vercel
```bash
vercel --prod
```

### Option 4: Traditional Hosting
Upload semua file ke public_html via FTP/cPanel.

## ✅ Testing Checklist

- [x] Responsiveness di mobile, tablet, desktop
- [x] Navigation berfungsi di semua halaman
- [x] Form validation bekerja
- [x] Component loading (header/footer)
- [x] Alpine.js interactivity
- [x] Lightbox modal
- [x] Testimonial carousel
- [x] Portfolio filter
- [x] FAQ accordion
- [x] Video modal
- [x] Smooth scrolling
- [x] Back to top button
- [x] All links functional
- [x] Meta tags present
- [x] JSON-LD structured data

## 📊 Performance Tips

1. **Optimize Images**: Compress dan resize gambar
2. **Enable Caching**: Setup cache headers di server
3. **CDN**: Gunakan CDN untuk static assets
4. **Minify**: Minify CSS dan JS untuk production
5. **Lazy Loading**: Sudah implemented untuk images

## 🔐 Security

- Form validation client-side dan server-side
- HTTPS recommended untuk production
- No sensitive data di JavaScript
- Sanitize user input
- CSP headers recommended

## 📞 Support & Contact

Untuk pertanyaan atau dukungan:
- **Email**: info@calistaservice.com
- **WhatsApp**: +62-xxx-xxx-xxxx
- **Website**: https://calistaservice.com

## 📄 License

Proprietary - All rights reserved © 2025 Calista Service

## 🎉 Credits

- **Design & Development**: Calista Service Team
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Inter)
- **Images**: Unsplash (placeholder)
- **Framework**: Tailwind CSS, Alpine.js

## 📈 Future Enhancements

- [ ] Blog section
- [ ] Client dashboard
- [ ] Multi-language support (English)
- [ ] PWA capabilities
- [ ] Dark mode toggle
- [ ] Live chat integration
- [ ] Analytics dashboard
- [ ] CMS integration

---

**Dibuat dengan ❤️ di Indonesia**
