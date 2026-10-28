const PORTFOLIO_DATA = {
	profile: {
		name: 'Devina',
		fullName: 'Devina Dewi Faustina Basam',
		location: 'Kota Harapan Indah',
		cvFile: 'CV_DevinaDewi.pdf',
		photo: 'assets/img/devina.png',
		aboutLead: {
			en: "I'm an Informatics Engineering graduate who enjoys working at the intersection of business and technology. I don't just build systems — I start by understanding the real problem: gathering requirements, mapping processes, and structuring data before designing a solution.",
			id: 'Saya lulusan Teknik Informatika yang senang bekerja di persimpangan antara bisnis dan teknologi. Saya tidak sekadar membangun sistem — saya mulai dengan memahami masalah sebenarnya: menggali kebutuhan, memetakan proses, dan menata data sebelum merancang solusi.',
		},
		aboutText: {
			en: 'During my internship, I took a manual, fragmented process and turned it into a working digital system — owning everything from requirement analysis and database design to development and user validation. I hold a BNSP Data Analyst certification and work comfortably across data analysis, system design, and full-stack development.',
			id: 'Selama magang, saya mengubah proses manual yang tersebar menjadi sistem digital yang berfungsi — menangani semuanya dari analisis kebutuhan dan desain database hingga pengembangan dan validasi pengguna. Saya memegang sertifikasi BNSP Data Analyst dan terbiasa bekerja lintas bidang: analisis data, desain sistem, dan pengembangan full-stack.',
		},
		aboutClosing: {
			en: "I'm detail-oriented, a fast learner, and I care about solutions that actually fit what people need.",
			id: 'Saya teliti, cepat belajar, dan peduli dengan solusi yang benar-benar sesuai kebutuhan pengguna.',
		},
		roles: {
			en: [
				'System Analyst',
				'Data Analyst',
				'Full-Stack Developer',
				'Business Analyst',
			],
			id: [
				'Analis Sistem',
				'Analis Data',
				'Pengembang Full-Stack',
				'Analis Bisnis',
			],
		},
		tags: {
			en: [
				'System Analyst',
				'Data Analyst',
				'Full-Stack Developer',
				'Business Analyst',
				'UI/UX',
			],
			id: [
				'Analis Sistem',
				'Analis Data',
				'Pengembang Full-Stack',
				'Analis Bisnis',
				'UI/UX',
			],
		},
	},

	contact: {
		email: 'vinafaustina1011@gmail.com',
		linkedin: {
			label: 'devina dewi',
			href: 'https://www.linkedin.com/in/devina-dewi-faustina-basam-092237341',
		},
		github: {
			label: 'github.com/pinpinpinaaaaaa',
			href: 'https://github.com/pinpinpinaaaaaa',
		},
		instagram: {
			label: '@vinafstn10',
			href: 'https://www.instagram.com/vinafstn10/',
		},
	},

	education: [
		{
			year: 'Jun 2022 - Aug 2026',
			title: 'S1 Teknik Informatika',
			org: 'Universitas Esa Unggul',
			desc: {
				en: 'Graduated with a degree in Informatics Engineering. Completed a Data Analysis Bootcamp and Dicoding Machine Learning training, and actively participated in technology and data seminars.',
				id: 'Lulus dari program studi Teknik Informatika. Menyelesaikan Bootcamp Data Analysis dan pelatihan Dicoding Machine Learning, serta aktif mengikuti seminar di bidang teknologi dan data.',
			},
		},
	],

	experience: [
		{
			year: 'Sep 2025 - Sep 2026',
			type: { en: 'Internship', id: 'Magang' },
			title: 'IT Intern',
			org: 'Lembaga Management FEB UI',
			desc: {
				en: 'Developed an Asset Management system to digitize asset & inventory management, and built a multi-agent AI Proposal Generator to automate project proposal creation.',
				id: 'Mengembangkan sistem Asset Management untuk digitalisasi pengelolaan aset & inventaris, serta membangun AI Proposal Generator berbasis multi-agent AI untuk mengotomatisasi pembuatan proposal proyek.',
			},
		},
		{
			year: 'Mar - Aug 2025',
			type: { en: 'Internship', id: 'Magang' },
			title: 'Web Developer',
			org: 'PT. Malaka Teknologi Indonesia',
			desc: {
				en: 'Developed & maintained client websites using WordPress, implemented Figma designs into web pages (Elementor, HTML, CSS), supported UI/UX redesigns, and handled server management & website maintenance.',
				id: 'Mengembangkan & memelihara website klien menggunakan WordPress, mengimplementasikan desain Figma ke web (Elementor, HTML, CSS), mendukung redesign UI/UX, serta mengelola server & maintenance website.',
			},
		},
	],

	projects: [
		{
			title: 'Web Manajemen Kos',
			category: 'web',
			tag: { en: 'Full-Stack', id: 'Full-Stack' },
			desc: {
				en: 'A boarding house (kos) management website with reservation, transaction, and add-on service features. Includes an admin dashboard and role-based access (Admin, Staff, Owner).',
				id: 'Web manajemen kos dengan fitur reservasi, transaksi, dan layanan tambahan. Dilengkapi dashboard admin serta role-based access (Admin, Karyawan, Owner).',
			},
			detail: {
				en: 'A web-based boarding house (kos) management application built to help owners run day-to-day operations digitally - from room reservations and payment transaction records to add-on services such as laundry or cleaning. The system includes an admin dashboard summarizing occupancy and revenue, plus role-based access so Admin, Staff, and Owner accounts each get permissions suited to their responsibilities.',
				id: 'Aplikasi manajemen kos berbasis web yang dibangun untuk membantu pemilik kos mengelola operasional sehari-hari secara digital - mulai dari reservasi kamar, pencatatan transaksi pembayaran, hingga layanan tambahan seperti laundry atau kebersihan. Sistem ini dilengkapi dashboard admin yang menampilkan ringkasan okupansi dan pendapatan, serta role-based access sehingga Admin, Karyawan, dan Owner masing-masing memiliki hak akses sesuai tanggung jawabnya.',
			},
			highlights: {
				en: [
					'Room reservations with real-time availability checks',
					'Transaction records & tenant payment history',
					'Add-on service management (laundry, cleaning, etc.)',
					'Role-based access for Admin, Staff, and Owner',
					'Admin dashboard with occupancy & revenue overview',
				],
				id: [
					'Reservasi kamar dengan pengecekan ketersediaan secara real-time',
					'Pencatatan transaksi & riwayat pembayaran penyewa',
					'Manajemen layanan tambahan (laundry, kebersihan, dll.)',
					'Role-based access untuk Admin, Karyawan, dan Owner',
					'Dashboard admin dengan ringkasan okupansi & pendapatan',
				],
			},
			stack: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
			images: [
				'assets/img/kos-1.jpg',
				'assets/img/kos-2.jpg',
				'assets/img/kos-3.jpg',
			],
			year: '2024',
			github: '',
		},
		{
			title: 'Web Alat Ukur Psikologi',
			category: 'web',
			tag: { en: 'Assessment', id: 'Asesmen' },
			desc: {
				en: 'A psychological assessment website with automatic score calculation and result categorization. Responsive layout for different devices.',
				id: 'Web assessment psikologi dengan perhitungan skor otomatis dan kategorisasi hasil tes. Tampilan responsif untuk berbagai perangkat.',
			},
			detail: {
				en: 'A web-based psychological assessment platform that lets users take tests online, with automatic score calculation and result categorization based on the measurement standard used. Built with a responsive layout for a comfortable experience on both desktop and mobile devices.',
				id: 'Platform assessment psikologi berbasis web yang memungkinkan pengguna mengerjakan tes secara online, dengan sistem perhitungan skor otomatis dan kategorisasi hasil sesuai standar alat ukur yang digunakan. Dibangun dengan tampilan responsif agar nyaman diakses baik dari desktop maupun perangkat mobile.',
			},
			highlights: {
				en: [
					'Online psychological test administration',
					'Automatic score calculation based on the measurement formula',
					'Automatic categorization of test results',
					'Responsive layout across devices',
				],
				id: [
					'Pengerjaan tes psikologi secara online',
					'Perhitungan skor otomatis berbasis rumus alat ukur',
					'Kategorisasi hasil tes secara otomatis',
					'Tampilan responsif di berbagai perangkat',
				],
			},
			stack: ['Flask', 'SQL', 'HTML', 'CSS'],
			images: ['assets/img/psikologi-1.jpg', 'assets/img/psikologi-2.jpg'],
			year: '2024',
			github: '',
		},
		{
			title: 'Website Redesign & WordPress Migration',
			category: 'web',
			tag: { en: 'Redesign & Migration', id: 'Redesign & Migrasi' },
			desc: {
				en: 'Redesigned and rebuilt a client website, migrating it from hand-coded pages to a maintainable WordPress site.',
				id: 'Meredesain dan membangun ulang website klien, memigrasikan dari halaman hand-code ke WordPress yang mudah dirawat.',
			},
			detail: {
				en: 'Audited an existing hand-coded client website, then redesigned the UI/UX in Figma to modernize the layout and improve usability. The site was rebuilt on WordPress using Elementor, with all content and page structure migrated over while keeping the new design responsive across devices. The result is a site the client\'s non-technical team can update on their own without touching code.',
				id: 'Melakukan audit terhadap website klien yang sebelumnya dibangun secara hand-code, kemudian meredesain UI/UX di Figma untuk memperbarui tampilan dan meningkatkan kenyamanan penggunaan. Website dibangun ulang di WordPress menggunakan Elementor, dengan seluruh konten dan struktur halaman dimigrasikan sambil memastikan desain baru tetap responsif di berbagai perangkat. Hasilnya adalah website yang bisa diperbarui sendiri oleh tim non-teknis klien tanpa perlu koding.',
			},
			highlights: {
				en: [
					'Migrated a custom-coded website to WordPress',
					'Rebuilt the UI from Figma designs with Elementor',
					'Improved responsiveness and page structure',
					'Enabled content updates without coding',
				],
				id: [
					'Migrasi website hand-code ke WordPress',
					'Bangun ulang UI dari desain Figma via Elementor',
					'Tingkatkan responsivitas & struktur halaman',
					'Update konten tanpa perlu koding',
				],
			},
			stack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'PHP'],
			images: ['assets/img/redesign-1.jpg', 'assets/img/redesign-2.jpg'],
			year: '2025',
			github: '',
		},
		{
			title: 'WebJadiin',
			category: 'web',
			tag: { en: 'Service Platform', id: 'Platform Jasa' },
			desc: {
				en: 'A service-ordering platform for a web development agency, letting clients order website packages online while admins manage orders and services through a dashboard.',
				id: 'Platform pemesanan jasa untuk agensi web development, memungkinkan klien memesan paket website secara online sementara admin mengelola pesanan dan jasa lewat dashboard.',
			},
			detail: {
				en: 'WebJadiin is a service-ordering platform built for a web development agency, letting clients browse available website packages (landing page, company profile, online store, blog), see an auto-calculated price, and submit an order along with their contact details and project brief. On the admin side, a login-protected dashboard tracks incoming orders by status (received, in progress, completed) and includes a service management screen for adding, editing, and removing the packages offered. The project also scoped a Python-based microservice backend (separate client, project, and payment services with JWT authentication) to extend the platform with client accounts and payment verification.',
				id: 'WebJadiin adalah platform pemesanan jasa untuk agensi web development, memungkinkan klien menelusuri paket website yang tersedia (landing page, company profile, toko online, blog), melihat estimasi harga otomatis, dan mengirim pesanan lengkap dengan data kontak serta brief project. Di sisi admin, dashboard yang dilindungi login melacak pesanan masuk berdasarkan status (masuk, diproses, selesai) serta dilengkapi halaman kelola jasa untuk menambah, mengubah, dan menghapus paket yang ditawarkan. Project ini juga merancang backend microservice berbasis Python (client, project, dan payment service terpisah dengan autentikasi JWT) untuk mengembangkan platform ini lebih lanjut dengan akun klien dan verifikasi pembayaran.',
			},
			highlights: {
				en: [
					'Online order form with automatic price calculation per website package',
					'Admin dashboard to track orders by status (received, in progress, completed)',
					'Service management (CRUD) for the packages offered',
					'Session-based admin authentication with hashed passwords',
					'Planned microservice backend (Python, JWT, MySQL) for client accounts & payment verification',
				],
				id: [
					'Form pemesanan online dengan perhitungan harga otomatis per paket website',
					'Dashboard admin untuk melacak pesanan berdasarkan status (masuk, diproses, selesai)',
					'Manajemen jasa (CRUD) untuk paket yang ditawarkan',
					'Autentikasi admin berbasis session dengan password terenkripsi',
					'Rancangan backend microservice (Python, JWT, MySQL) untuk akun klien & verifikasi pembayaran',
				],
			},
			stack: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
			images: ['assets/img/webjadiin-1.jpg', 'assets/img/webjadiin-2.jpg'],
			year: '2025',
			github: '',
		},
		{
			title: 'Asset Management System',
			category: 'system',
			tag: { en: 'Information System', id: 'Sistem Informasi' },
			desc: {
				en: 'A digital asset & inventory management system that improves the efficiency of asset tracking and monitoring.',
				id: 'Sistem digitalisasi pengelolaan aset & inventaris untuk meningkatkan efisiensi pencatatan dan monitoring aset.',
			},
			detail: {
				en: "An information system for digitizing an organization's asset and inventory management, replacing manual records with centralized digital tracking. The system helps monitor asset condition, location, and status in real time, making audits and reporting more efficient.",
				id: 'Sistem informasi untuk digitalisasi pengelolaan aset dan inventaris organisasi, menggantikan pencatatan manual dengan pencatatan digital yang terpusat. Sistem ini membantu memonitor kondisi, lokasi, dan status aset secara real-time sehingga proses audit dan pelaporan menjadi lebih efisien.',
			},
			highlights: {
				en: [
					'Centralized asset & inventory records',
					'Real-time monitoring of asset condition and location',
					'Asset movement / status history log',
					'Supports audit & reporting workflows',
				],
				id: [
					'Pencatatan aset & inventaris terpusat',
					'Monitoring kondisi dan lokasi aset secara real-time',
					'Riwayat perpindahan/status aset',
					'Mendukung proses audit & pelaporan',
				],
			},
			stack: ['Web', 'Database'],
			images: [
				'assets/img/asset-1.jpg',
				'assets/img/asset-2.jpg',
				'assets/img/asset-3.jpg',
			],
			year: '2025',
			github: '',
		},
		{
			title: 'AI Proposal Generator',
			category: 'data',
			tag: { en: 'AI / Automation', id: 'AI / Otomasi' },
			desc: {
				en: 'A multi-agent AI project proposal generator - covering requirement analysis, cost estimation, and automatic document drafting.',
				id: 'Generator proposal proyek berbasis multi-agent AI - mencakup analisis kebutuhan, estimasi biaya, dan penyusunan dokumen secara otomatis.',
			},
			detail: {
				en: 'A project proposal generator that uses a multi-agent AI architecture to automate the proposal-writing process - from requirement analysis and cost estimation to drafting the final document. Each agent handles one stage of the pipeline, making proposal creation faster and more consistent.',
				id: 'Sistem generator proposal proyek yang memanfaatkan arsitektur multi-agent AI untuk mengotomatisasi proses penyusunan proposal - mulai dari analisis kebutuhan proyek, estimasi biaya, hingga penyusunan dokumen akhir. Setiap agent bertanggung jawab atas satu tahapan, sehingga proses penyusunan proposal menjadi lebih cepat dan konsisten.',
			},
			highlights: {
				en: [
					'Automated project requirement analysis',
					'Cost estimation based on historical data',
					'Automatic proposal document generation',
					'Multi-agent AI architecture for each pipeline stage',
				],
				id: [
					'Analisis kebutuhan proyek secara otomatis',
					'Estimasi biaya berbasis data historis',
					'Penyusunan dokumen proposal otomatis',
					'Arsitektur multi-agent AI untuk tiap tahapan proses',
				],
			},
			stack: ['Python', 'Multi-Agent AI'],
			images: ['assets/img/ai-proposal-1.jpg', 'assets/img/ai-proposal-2.jpg'],
			year: '2026',
			github: '',
		},
	],

	certifications: [
		{
			title: 'Sertifikasi BNSP - Data Analyst',
			issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
			year: '2026',
			url: '',
		},
		{
			title: 'Machine Learning (Fresh Graduate Academy)',
			issuer: 'Digital Talent Scholarship',
			year: '2025',
			url: '',
		},
		{
			title: 'Dicoding Machine Learning',
			issuer: 'Dicoding',
			year: '2025',
			url: '',
		},
	],

	skills: {
		webTitle: { en: 'Web Development', id: 'Web Development' },
		webNote: { en: 'Core strength', id: 'Keahlian utama' },
		web: [
			{ name: 'HTML & CSS', level: 90 },
			{ name: 'WordPress', level: 85 },
			{ name: 'PHP', level: 78 },
			{ name: 'MySQL', level: 80 },
			{ name: 'JavaScript', level: 75 },
			{ name: 'Flask', level: 70 },
		],
		dataTitle: { en: 'Data & Analytics', id: 'Data & Analytics' },
		dataNote: { en: 'Proficient', id: 'Mahir' },
		data: [
			{ name: 'Microsoft Excel', level: 85 },
			{ name: 'SQL', level: 80 },
			{ name: 'Data Visualization', level: 78 },
			{ name: 'Power BI', level: 75 },
			{ name: 'Python', level: 70 },
			{ name: 'Machine Learning', level: 60 },
		],
		systemTitle: { en: 'System Analysis & Design', id: 'Analisis & Desain Sistem' },
		systemNote: { en: 'Proficient', id: 'Mahir' },
		system: [
			{ name: 'Requirement Gathering', level: 85 },
			{ name: 'Business Process Mapping', level: 80 },
			{ name: 'Database Design (ERD)', level: 85 },
			{ name: 'System Documentation', level: 80 },
			{ name: 'Flowcharting (Draw.io)', level: 85 },
			{ name: 'SDLC / Agile', level: 75 },
		],
	},
};

const I18N = {
	en: {
		loader: 'Loading Portfolio',
		meta: {
			title: 'Devina Dewi — Business & Technology | Systems, Data & Development',
			description:
				'Informatics Engineering graduate bridging business, data, and technology. Experienced in requirement analysis, system design, data structuring, and full-stack development.',
		},
		nav: {
			home: 'Home',
			about: 'About',
			skills: 'Skills',
			projects: 'Projects',
			certifications: 'Certifications',
			experience: 'Experience',
			contact: 'Contact',
			cta: "Let's talk",
		},
		hero: {
			eyebrow: 'Available for opportunities',
			greeting: "Hello, I'm",
			roleIntro: 'a',
			subtitle:
				'I bridge business needs and technology — analyzing requirements, designing systems, and building solutions end-to-end. From mapping business processes and structuring data to full-stack development, I turn problems into working products that people actually use.',
			ctaProjects: 'View Projects',
			ctaCv: 'Download CV',
			metaProject: 'Projects',
			metaExperience: 'Experience',
			metaCertificate: 'Certificates',
			badgeSystem: 'System Analyst',
			badgeData: 'Data Analyst',
			badgeFullstack: 'Full-Stack Developer',
			currently: 'Currently',
			status: 'Open to Work',
			online: 'Online',
		},
		about: {
			eyebrow: '01 - About',
			titleHtml:
				'Analyzing <em>business needs</em>,<br />designing <em>systems</em>, building <em>solutions</em>.',
			statSkill: 'Skills',
		},
		skills: {
			eyebrow: '02 - Skills',
			titleHtml: 'Tools I work with <em>daily</em>.',
		},
		projects: {
			eyebrow: '03 - Projects',
			titleHtml: 'Selected <em>work</em>.',
			filterAll: 'All',
			filterSystem: 'System Design',
			filterData: 'Data & Analytics',
			filterWeb: 'Web Development',
			viewDetails: 'View Details',
		},
		certifications: {
			eyebrow: '04 - Certifications',
			titleHtml: 'Credentials & <em>continuous learning</em>.',
			verify: 'Verify',
			prev: 'Previous certificate',
			next: 'Next certificate',
		},
		journey: {
			eyebrow: '05 - Journey',
			titleHtml: 'Experience & <em>milestones</em>.',
			educationType: 'Education',
		},
		contact: {
			eyebrow: '06 - Contact',
			titleHtml: "Let's build something <em>meaningful</em>.",
			lead: "Feel free to reach out by email or through the channels below — I'm happy to talk about internships, full-time opportunities, or collaboration in systems, data, and technology.",
		},
		footer: {
			tagline: 'Crafted with care.',
			backToTop: 'Back to top',
		},
		modal: {
			close: 'Close',
			gallery: 'Screenshots',
			highlights: 'Highlights',
			stack: 'Tech Stack',
			github: 'View on GitHub',
		},
	},
	id: {
		loader: 'Memuat Portofolio',
		meta: {
			title: 'Devina Dewi — Business & Technology | Systems, Data & Development',
			description:
				'Lulusan Teknik Informatika yang menjembatani bisnis, data, dan teknologi. Berpengalaman dalam analisis kebutuhan, desain sistem, penataan data, dan pengembangan full-stack.',
		},
		nav: {
			home: 'Beranda',
			about: 'Tentang',
			skills: 'Skill',
			projects: 'Project',
			certifications: 'Sertifikat',
			experience: 'Pengalaman',
			contact: 'Kontak',
			cta: 'Mari mengobrol',
		},
		hero: {
			eyebrow: 'Terbuka untuk peluang kerja',
			greeting: 'Halo, saya',
			roleIntro: 'seorang',
			subtitle:
				'Saya menjembatani kebutuhan bisnis dan teknologi — menganalisis kebutuhan, merancang sistem, dan membangun solusi secara menyeluruh. Mulai dari memetakan proses bisnis dan menata data hingga pengembangan full-stack, saya mengubah masalah menjadi produk yang benar-benar digunakan.',
			ctaProjects: 'Lihat Project',
			ctaCv: 'Unduh CV',
			metaProject: 'Project',
			metaExperience: 'Pengalaman',
			metaCertificate: 'Sertifikat',
			badgeSystem: 'System Analyst',
			badgeData: 'Data Analyst',
			badgeFullstack: 'Full-Stack Developer',
			currently: 'Saat ini',
			status: 'Terbuka untuk Kerja',
			online: 'Online',
		},
		about: {
			eyebrow: '01 - Tentang',
			titleHtml:
				'Menganalisis <em>kebutuhan bisnis</em>,<br />merancang <em>sistem</em>, membangun <em>solusi</em>.',
			statSkill: 'Skill',
		},
		skills: {
			eyebrow: '02 - Skill',
			titleHtml: 'Tools yang saya pakai <em>setiap hari</em>.',
		},
		projects: {
			eyebrow: '03 - Project',
			titleHtml: 'Karya <em>pilihan</em>.',
			filterAll: 'Semua',
			filterSystem: 'Desain Sistem',
			filterData: 'Data & Analitik',
			filterWeb: 'Pengembangan Web',
			viewDetails: 'Lihat Detail',
		},
		certifications: {
			eyebrow: '04 - Sertifikat',
			titleHtml: 'Kredensial & <em>pembelajaran berkelanjutan</em>.',
			verify: 'Verifikasi',
			prev: 'Sertifikat sebelumnya',
			next: 'Sertifikat berikutnya',
		},
		journey: {
			eyebrow: '05 - Perjalanan',
			titleHtml: 'Pengalaman & <em>pencapaian</em>.',
			educationType: 'Pendidikan',
		},
		contact: {
			eyebrow: '06 - Kontak',
			titleHtml: 'Mari membangun sesuatu yang <em>bermakna</em>.',
			lead: 'Jangan ragu menghubungi saya lewat email atau kanal di bawah — saya senang berdiskusi tentang magang, peluang kerja penuh waktu, atau kolaborasi di bidang sistem, data, dan teknologi.',
		},
		footer: {
			tagline: 'Dibuat dengan sepenuh hati.',
			backToTop: 'Kembali ke atas',
		},
		modal: {
			close: 'Tutup',
			gallery: 'Tangkapan Layar',
			highlights: 'Poin Utama',
			stack: 'Teknologi',
			github: 'Lihat di GitHub',
		},
	},
};

window.PORTFOLIO_LANG = {
	get: function () {
		const saved =
			typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
		return saved === 'id' ? 'id' : 'en';
	},
	set: function (lang) {
		const safe = lang === 'id' ? 'id' : 'en';
		if (typeof localStorage !== 'undefined') localStorage.setItem('lang', safe);
		return safe;
	},
};

function t(field) {
	if (field == null) return '';
	if (typeof field === 'object' && !Array.isArray(field)) {
		const lang = window.PORTFOLIO_LANG.get();
		return field[lang] != null ? field[lang] : field.en;
	}
	return field;
}
window.t = t;

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
window.I18N = I18N;
