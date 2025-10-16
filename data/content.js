// Content management for service company website
const content = {
  // Company Information
  company: {
    name: "Calista Service",
    tagline: "Solusi Digital Kustom untuk Bisnis Anda",
    description: "Kami mengembangkan aplikasi web dan Android yang disesuaikan dengan kebutuhan bisnis Anda, didukung oleh layanan DevOps, hosting, perbaikan hardware, dan solusi AI.",
    phone: "+62-xxx-xxx-xxxx",
    email: "info@calistaservice.com",
    whatsapp: "https://wa.me/62xxxxxxxxx",
    address: "Jakarta, Indonesia"
  },

  // SEO Keywords
  seoKeywords: [
    "Pengembangan Aplikasi Web Kustom",
    "Pengembangan Aplikasi Android Kustom", 
    "Layanan DevOps Profesional",
    "Hosting Aman dan Andal",
    "Perbaikan Hardware Komputer",
    "Solusi AI untuk Bisnis",
    "Integrasi API Bisnis",
    "Pengembangan E-commerce",
    "Optimasi Kinerja Aplikasi",
    "Dukungan Teknis Berkelanjutan"
  ],

  // Navigation
  navigation: [
    { name: "Beranda", href: "index.html" },
    { name: "Layanan", href: "services.html" },
    { name: "Paket", href: "packages.html" },
    { name: "Portofolio", href: "portfolio.html" },
    { name: "Bukti", href: "evidence.html" },
    { name: "Proses", href: "workflow.html" },
    { name: "FAQ", href: "faq.html" },
    { name: "Kontak", href: "contact.html" }
  ],

  // Home Page Content
  home: {
    hero: {
      title: "Solusi Digital Kustom untuk Bisnis Anda",
      subtitle: "Kami mengembangkan aplikasi web dan Android yang disesuaikan dengan kebutuhan bisnis Anda, didukung oleh layanan DevOps, hosting, perbaikan hardware, dan solusi AI.",
      primaryCta: "Dapatkan Penawaran Sekarang",
      secondaryCta: "Jadwalkan Konsultasi Gratis"
    },
    
    valueProps: [
      {
        title: "Kecepatan",
        description: "Pengembangan cepat dengan waktu penyelesaian yang jelas",
        icon: "⚡"
      },
      {
        title: "Keamanan", 
        description: "Menggunakan perangkat lunak berlisensi asli untuk memastikan keamanan",
        icon: "🔒"
      },
      {
        title: "Komunikasi Jelas",
        description: "Transparansi dalam setiap tahap proyek",
        icon: "💬"
      },
      {
        title: "Dukungan Purna Jual",
        description: "Garansi 30 hari dan dukungan sesuai kebutuhan",
        icon: "🛠️"
      }
    ],

    services: [
      {
        title: "Pengembangan Aplikasi Web & Android",
        description: "Membangun aplikasi yang responsif dan user-friendly sesuai kebutuhan bisnis Anda",
        icon: "📱",
        features: ["UI/UX Design", "Front-end & Back-end", "Integrasi API"]
      },
      {
        title: "DevOps & Hosting",
        description: "Menyediakan infrastruktur yang andal dan skalabel untuk aplikasi Anda",
        icon: "☁️",
        features: ["CI/CD Deployment", "Monitoring & Logging", "Manajemen Server"]
      },
      {
        title: "Perbaikan & Perakitan Hardware",
        description: "Layanan perbaikan dan perakitan hardware untuk memastikan perangkat Anda berfungsi optimal",
        icon: "🔧",
        features: ["Perbaikan PC & Laptop", "Perakitan PC Kustom", "Upgrade Hardware"]
      },
      {
        title: "Solusi AI",
        description: "Pengembangan dan penyesuaian model AI untuk berbagai kebutuhan bisnis Anda",
        icon: "🤖",
        features: ["TTS & Speech-to-Text", "Deteksi & Klasifikasi Objek", "Penerjemahan & Routing"]
      }
    ],

    testimonials: [
      {
        name: "PT Maju Jaya",
        role: "CEO",
        quote: "Kami sangat puas dengan layanan yang diberikan. Situs web kami kini lebih cepat dan menarik.",
        rating: 5
      },
      {
        name: "CV Teknologi Mandiri", 
        role: "Direktur",
        quote: "Tim yang profesional dan responsif. Aplikasi Android kami berjalan dengan sempurna.",
        rating: 5
      },
      {
        name: "UD Berkah Jaya",
        role: "Owner",
        quote: "Layanan DevOps mereka sangat membantu. Server kami sekarang lebih stabil dan cepat.",
        rating: 5
      }
    ]
  },

  // Services Page Content
  services: {
    mainServices: [
      {
        id: "web-android",
        title: "Pengembangan Aplikasi Web & Android",
        description: "Kami membangun aplikasi web dan Android yang disesuaikan dengan kebutuhan bisnis Anda, memastikan responsivitas dan pengalaman pengguna yang optimal.",
        subServices: [
          {
            title: "Desain UI/UX",
            description: "Menciptakan antarmuka yang intuitif dan menarik dengan fokus pada user experience",
            timeEstimate: "1-3 hari"
          },
          {
            title: "Pengembangan Front-end & Back-end",
            description: "Menggunakan teknologi terbaru untuk performa maksimal",
            timeEstimate: "3-7 hari"
          },
          {
            title: "Integrasi API",
            description: "Menghubungkan sistem Anda dengan layanan pihak ketiga",
            timeEstimate: "1-2 hari"
          }
        ],
        techStack: ["React", "Vue.js", "Node.js", "Laravel", "Flutter", "React Native"],
        guarantee: "Unlimited revisions hingga puas"
      },
      {
        id: "devops-hosting",
        title: "DevOps & Hosting",
        description: "Menyediakan layanan DevOps dan hosting yang andal untuk memastikan aplikasi Anda berjalan lancar dan aman.",
        subServices: [
          {
            title: "CI/CD Deployment",
            description: "Otomatisasi proses pengembangan dan deployment",
            timeEstimate: "1-3 jam"
          },
          {
            title: "Monitoring & Logging",
            description: "Pemantauan performa aplikasi secara real-time",
            timeEstimate: "2-4 jam"
          },
          {
            title: "Manajemen Server",
            description: "Konfigurasi dan pemeliharaan server yang optimal",
            timeEstimate: "1-2 jam"
          }
        ],
        techStack: ["Docker", "Kubernetes", "AWS", "DigitalOcean", "GitHub Actions"],
        guarantee: "99.9% uptime guarantee"
      },
      {
        id: "hardware",
        title: "Perbaikan & Perakitan Hardware",
        description: "Layanan perbaikan dan perakitan hardware untuk memastikan perangkat Anda berfungsi dengan baik.",
        subServices: [
          {
            title: "Perbaikan Komputer & Laptop",
            description: "Diagnosa dan perbaikan masalah hardware dan software",
            timeEstimate: "1-3 hari"
          },
          {
            title: "Perakitan PC Kustom",
            description: "Membangun PC sesuai spesifikasi yang Anda inginkan",
            timeEstimate: "2-5 hari"
          },
          {
            title: "Upgrade Hardware",
            description: "Meningkatkan performa perangkat dengan komponen terbaru",
            timeEstimate: "1-2 hari"
          }
        ],
        techStack: ["Intel", "AMD", "NVIDIA", "ASUS", "MSI", "Corsair"],
        guarantee: "Garansi 1 tahun untuk komponen baru"
      },
      {
        id: "ai-solutions",
        title: "Solusi AI",
        description: "Pengembangan dan penyesuaian model AI untuk berbagai kebutuhan bisnis Anda.",
        subServices: [
          {
            title: "Text-to-Speech & Speech-to-Text",
            description: "Konversi teks ke suara dan sebaliknya dengan akurasi tinggi",
            timeEstimate: "10-30 hari"
          },
          {
            title: "Deteksi & Klasifikasi Objek",
            description: "Mengidentifikasi dan mengklasifikasikan objek dalam gambar atau video",
            timeEstimate: "15-45 hari"
          },
          {
            title: "Penerjemahan & Algoritma Routing",
            description: "Solusi AI untuk penerjemahan bahasa dan optimasi rute",
            timeEstimate: "20-60 hari"
          }
        ],
        techStack: ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLO", "Transformers"],
        guarantee: "Fine-tuning hingga mencapai akurasi yang diinginkan"
      }
    ]
  },

  // Packages & Pricing
  packages: {
    daily: {
      name: "Paket Harian",
      description: "Cocok untuk perbaikan cepat atau konsultasi singkat",
      features: [
        "Sesi konsultasi 2 jam",
        "Perbaikan minor atau pembaruan kecil",
        "Laporan pekerjaan harian",
        "Dukungan via WhatsApp",
        "Revisi hingga 2 kali"
      ],
      useCase: "Perbaikan bug, konsultasi teknis, update kecil",
      cta: "Pilih Paket Harian"
    },
    weekly: {
      name: "Paket Mingguan", 
      description: "Ideal untuk pengembangan fitur baru atau peningkatan signifikan",
      features: [
        "Pengembangan fitur baru",
        "Pengujian dan debugging menyeluruh",
        "Dukungan teknis selama 7 hari",
        "Dokumentasi lengkap",
        "Revisi unlimited",
        "Demo dan training"
      ],
      useCase: "Pengembangan fitur kompleks, integrasi API, peningkatan signifikan",
      cta: "Pilih Paket Mingguan"
    },
    monthly: {
      name: "Paket Bulanan",
      description: "Untuk proyek besar atau dukungan berkelanjutan",
      features: [
        "Pengembangan aplikasi lengkap",
        "Pemeliharaan dan pembaruan rutin",
        "Dukungan teknis prioritas 24/7",
        "Monitoring dan backup otomatis",
        "Revisi unlimited",
        "Training dan dokumentasi lengkap",
        "Garansi 30 hari pasca-deploy"
      ],
      useCase: "Proyek besar, aplikasi enterprise, dukungan berkelanjutan",
      cta: "Pilih Paket Bulanan"
    }
  },

  // Portfolio Data
  portfolio: [
    {
      id: "abc-store",
      title: "Toko Online ABC",
      url: "https://example-shop.com",
      screenshot: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      role: "Pengembangan Front-end & Back-end",
      tech: ["React", "Node.js", "Postgres"],
      result: "Konversi meningkat 25% dalam 2 bulan, waktu muat berkurang 60%",
      industry: "E-commerce",
      service: "web-development",
      description: "Pengembangan toko online lengkap dengan sistem pembayaran, manajemen inventory, dan dashboard admin yang user-friendly.",
      challenges: "Integrasi payment gateway yang kompleks dan optimasi performa untuk traffic tinggi",
      solutions: "Implementasi Redis untuk caching, optimasi database queries, dan CDN untuk static assets"
    },
    {
      id: "mobile-banking",
      title: "Aplikasi Mobile Banking",
      url: "https://play.google.com/store/apps/details?id=com.example.banking",
      screenshot: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      role: "Pengembangan Aplikasi Android",
      tech: ["Flutter", "Firebase", "REST API"],
      result: "50,000+ downloads, rating 4.8/5, zero security incidents",
      industry: "Fintech",
      service: "android-development",
      description: "Aplikasi mobile banking dengan fitur transfer, pembayaran, dan investasi yang aman dan mudah digunakan.",
      challenges: "Implementasi keamanan tingkat enterprise dan compliance dengan regulasi perbankan",
      solutions: "End-to-end encryption, biometric authentication, dan audit trail lengkap"
    },
    {
      id: "ai-chatbot",
      title: "AI Customer Service Chatbot",
      url: "https://example-chatbot.com",
      screenshot: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      role: "Pengembangan Solusi AI",
      tech: ["Python", "TensorFlow", "NLP", "WebSocket"],
      result: "90% customer queries resolved automatically, response time < 2 detik",
      industry: "Customer Service",
      service: "ai-solutions",
      description: "Chatbot AI yang dapat menangani pertanyaan customer secara otomatis dengan natural language processing.",
      challenges: "Training model untuk memahami konteks bahasa Indonesia dan berbagai dialek",
      solutions: "Fine-tuning BERT model dengan dataset Indonesia, implementasi context-aware responses"
    }
  ],

  // GitHub Repositories
  github: [
    {
      name: "app-ecommerce",
      url: "https://github.com/username/app-ecommerce",
      description: "Kit awal e-commerce dengan integrasi pembayaran dan dashboard admin",
      badges: {
        stars: 120,
        forks: 45,
        lastCommit: "2025-09-08"
      },
      readmeSummary: "Starter kit lengkap untuk pengembangan toko online dengan React, Node.js, dan PostgreSQL. Termasuk sistem pembayaran, manajemen produk, dan dashboard admin.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      language: "JavaScript"
    },
    {
      name: "mobile-app-starter",
      url: "https://github.com/username/mobile-app-starter", 
      description: "Template Flutter untuk aplikasi mobile dengan arsitektur clean code",
      badges: {
        stars: 89,
        forks: 23,
        lastCommit: "2025-09-05"
      },
      readmeSummary: "Template Flutter dengan implementasi clean architecture, state management, dan integrasi Firebase. Ready untuk development aplikasi mobile skala enterprise.",
      tech: ["Flutter", "Dart", "Firebase", "Provider"],
      language: "Dart"
    },
    {
      name: "ai-models-collection",
      url: "https://github.com/username/ai-models-collection",
      description: "Koleksi model AI untuk berbagai use case bisnis",
      badges: {
        stars: 156,
        forks: 67,
        lastCommit: "2025-09-10"
      },
      readmeSummary: "Koleksi model AI yang sudah di-train untuk text classification, object detection, dan sentiment analysis. Termasuk dataset dan dokumentasi lengkap.",
      tech: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
      language: "Python"
    }
  ],

  // LinkedIn & Social Proof
  linkedin: {
    profileUrl: "https://linkedin.com/company/calista-service",
    recommendations: [
      {
        author: "Budi Santoso",
        position: "CTO, PT Tech Innovation",
        quote: "Tim yang sangat profesional dan memiliki keahlian mendalam dalam pengembangan aplikasi. Proyek kami selesai tepat waktu dengan kualitas yang sangat baik.",
        rating: 5
      },
      {
        author: "Sari Dewi",
        position: "Founder, StartupXYZ",
        quote: "Layanan DevOps mereka sangat membantu startup kami. Server kami sekarang lebih stabil dan performanya meningkat drastis.",
        rating: 5
      }
    ]
  },

  // YouTube Videos
  youtube: [
    {
      title: "Toko Online ABC — Demo Fitur Lengkap",
      url: "https://youtu.be/xxxxxxx",
      thumbnail: "https://img.youtube.com/vi/xxxxxxx/hqdefault.jpg",
      duration: "4:32",
      published: "2025-08-12",
      description: "Demo lengkap fitur-fitur toko online ABC yang telah dikembangkan, termasuk sistem pembayaran, manajemen inventory, dan dashboard admin."
    },
    {
      title: "Mobile Banking App — Security Features",
      url: "https://youtu.be/yyyyyyy", 
      thumbnail: "https://img.youtube.com/vi/yyyyyyy/hqdefault.jpg",
      duration: "6:15",
      published: "2025-08-08",
      description: "Penjelasan detail fitur keamanan dalam aplikasi mobile banking, termasuk enkripsi end-to-end dan biometric authentication."
    },
    {
      title: "AI Chatbot — Natural Language Processing",
      url: "https://youtu.be/zzzzzzz",
      thumbnail: "https://img.youtube.com/vi/zzzzzzz/hqdefault.jpg", 
      duration: "8:45",
      published: "2025-08-05",
      description: "Demo AI chatbot yang dapat memahami dan merespons pertanyaan dalam bahasa Indonesia dengan akurasi tinggi."
    }
  ],

  // Workflow/Process
  workflow: {
    title: "Proses Kerja Kami",
    subtitle: "Kami mengikuti proses yang terstruktur untuk memastikan hasil terbaik",
    steps: [
      {
        id: "briefing",
        title: "Briefing",
        description: "Diskusi awal untuk memahami kebutuhan dan tujuan proyek",
        duration: "1-2 hari",
        icon: "📋"
      },
      {
        id: "design",
        title: "Desain",
        description: "Pembuatan wireframe dan desain UI/UX yang menarik",
        duration: "2-5 hari",
        icon: "🎨"
      },
      {
        id: "development",
        title: "Pengembangan",
        description: "Implementasi desain ke dalam kode fungsional",
        duration: "5-20 hari",
        icon: "💻"
      },
      {
        id: "testing",
        title: "Pengujian",
        description: "Memastikan semua fitur berfungsi dengan baik",
        duration: "2-3 hari",
        icon: "🧪"
      },
      {
        id: "deploy",
        title: "Deploy",
        description: "Peluncuran proyek ke lingkungan produksi",
        duration: "1 hari",
        icon: "🚀"
      },
      {
        id: "revision",
        title: "Revisi",
        description: "Penyesuaian berdasarkan umpan balik pengguna",
        duration: "Ongoing",
        icon: "🔄"
      }
    ]
  },

  // FAQ
  faq: [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk mengembangkan situs web sederhana?",
      answer: "Untuk situs web sederhana, biasanya membutuhkan waktu 1-3 hari. Waktu ini dapat bervariasi tergantung pada kompleksitas fitur dan desain yang diinginkan."
    },
    {
      question: "Apakah Anda menawarkan dukungan setelah peluncuran?",
      answer: "Ya, kami menawarkan garansi 30 hari setelah peluncuran dan dukungan tambahan sesuai kebutuhan. Kami juga menyediakan layanan maintenance bulanan untuk aplikasi yang membutuhkan pembaruan rutin."
    },
    {
      question: "Teknologi apa saja yang Anda gunakan?",
      answer: "Kami menggunakan teknologi terdepan seperti React, Vue.js, Node.js, Laravel, Flutter, Python, dan berbagai framework modern lainnya. Kami juga dapat menggunakan teknologi sesuai permintaan klien."
    },
    {
      question: "Bagaimana proses pembayaran?",
      answer: "Kami menerima pembayaran dengan sistem down payment 50% di awal proyek dan 50% sisanya setelah proyek selesai. Kami juga menawarkan opsi pembayaran cicilan untuk proyek besar."
    },
    {
      question: "Apakah Anda menyediakan training untuk tim kami?",
      answer: "Ya, kami menyediakan training dan dokumentasi lengkap untuk tim Anda agar dapat mengoperasikan sistem yang telah dibuat. Training dapat dilakukan secara online atau offline sesuai kebutuhan."
    },
    {
      question: "Bagaimana jika ada bug atau masalah setelah launch?",
      answer: "Kami memberikan garansi 30 hari untuk perbaikan bug yang ditemukan setelah peluncuran. Setelah periode garansi, kami tetap menyediakan layanan support dengan biaya yang terjangkau."
    },
    {
      question: "Apakah Anda dapat mengintegrasikan dengan sistem yang sudah ada?",
      answer: "Tentu saja. Kami memiliki pengalaman dalam mengintegrasikan aplikasi baru dengan sistem legacy atau sistem pihak ketiga melalui API atau metode integrasi lainnya."
    },
    {
      question: "Bagaimana dengan keamanan data?",
      answer: "Keamanan data adalah prioritas utama kami. Kami menggunakan enkripsi, backup otomatis, dan mengikuti best practices keamanan. Semua data klien akan tetap confidential dan tidak akan dibagikan kepada pihak ketiga."
    }
  ],

  // Contact Information
  contact: {
    form: {
      title: "Hubungi Kami",
      subtitle: "Siap membantu mewujudkan ide digital Anda",
      fields: {
        name: "Nama Lengkap",
        email: "Email",
        phone: "Nomor Telepon",
        service: "Layanan yang Diminati",
        message: "Pesan"
      },
      serviceOptions: [
        "Pengembangan Aplikasi Web",
        "Pengembangan Aplikasi Android", 
        "DevOps & Hosting",
        "Perbaikan Hardware",
        "Solusi AI",
        "Konsultasi Teknis"
      ]
    },
    info: {
      businessHours: "Senin - Jumat: 09:00 - 18:00 WIB",
      responseTime: "Response dalam 2 jam pada jam kerja"
    }
  },

  // CTAs
  cta: {
    primary: "Dapatkan Penawaran Sekarang",
    secondary: "Jadwalkan Konsultasi Gratis", 
    tertiary: "Lihat Demo Proyek Kami",
    contact: "Hubungi Kami",
    portfolio: "Lihat Portofolio",
    github: "Lihat di GitHub",
    linkedin: "Lihat di LinkedIn",
    youtube: "Tonton di YouTube"
  },

  // Footer
  footer: {
    company: {
      name: "Calista Service",
      description: "Solusi digital kustom untuk bisnis Anda",
      year: "2025"
    },
    links: {
      services: [
        { name: "Web Development", href: "services.html#web-android" },
        { name: "Android Apps", href: "services.html#web-android" },
        { name: "DevOps & Hosting", href: "services.html#devops-hosting" },
        { name: "Hardware Repair", href: "services.html#hardware" },
        { name: "AI Solutions", href: "services.html#ai-solutions" }
      ],
      company: [
        { name: "Tentang Kami", href: "index.html#about" },
        { name: "Portofolio", href: "portfolio.html" },
        { name: "Proses Kerja", href: "workflow.html" },
        { name: "FAQ", href: "faq.html" },
        { name: "Kontak", href: "contact.html" }
      ],
      legal: [
        { name: "Kebijakan Privasi", href: "#" },
        { name: "Syarat & Ketentuan", href: "#" },
        { name: "Disclaimer", href: "#" }
      ]
    },
    social: {
      github: "https://github.com/calista-service",
      linkedin: "https://linkedin.com/company/calista-service", 
      youtube: "https://youtube.com/@calista-service",
      whatsapp: "https://wa.me/62xxxxxxxxx"
    }
  }
};

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = content;
} else if (typeof window !== 'undefined') {
  window.content = content;
}
