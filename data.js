const PORTFOLIO_DATA = {
	profile: {
		name: 'Devina',
		fullName: 'Devina Dewi Faustina Basam',
		location: 'Kota Harapan Indah',
		cvFile: 'CV_DevinaDewi.pdf',
		aboutLead: {
			en: "I'm an Informatics Engineering student and Web Developer who loves building digital products from the ground up - from concept and system design to interfaces that feel effortless to use.",
			id: 'Saya seorang mahasiswa Teknik Informatika sekaligus Web Developer yang menyukai proses membangun produk digital dari nol - mulai dari konsep, sistem, hingga tampilan yang nyaman digunakan.',
		},
		aboutText: {
			en: "Beyond web development, I'm actively sharpening my Data Analytics skills - from SQL, Excel, and Power BI to the fundamentals of Machine Learning. This combination helps me understand products not just technically, but also through data and real user needs.",
			id: 'Selain web development, saya aktif mendalami Data Analytics - mulai dari SQL, Excel, Power BI, hingga dasar Machine Learning. Kombinasi ini membantu saya memahami produk tidak hanya dari sisi teknis, tetapi juga dari sisi data dan kebutuhan pengguna.',
		},
		roles: {
			en: [
				'Web Developer',
				'Full-Stack Developer',
				'Data Analyst',
				'Machine Learning Enthusiast',
			],
			id: [
				'Pengembang Web',
				'Pengembang Full-Stack',
				'Analis Data',
				'Peminat Machine Learning',
			],
		},
		tags: {
			en: [
				'Web Development',
				'Full-Stack',
				'Data Analytics',
				'Machine Learning',
				'UI/UX',
			],
			id: [
				'Pengembangan Web',
				'Full-Stack',
				'Analitik Data',
				'Machine Learning',
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
			year: 'Jun 2022 - Sekarang',
			title: 'S1 Teknik Informatika',
			org: 'Universitas Esa Unggul',
			desc: {
				en: 'Completed a Data Analysis Bootcamp and Dicoding Machine Learning training. Actively participates in technology and data seminars.',
				id: 'Menyelesaikan Bootcamp Data Analysis dan pelatihan Dicoding Machine Learning. Aktif mengikuti seminar di bidang teknologi dan data.',
			},
		},
	],

	experience: [
		{
			year: 'Sep 2025 - Sekarang',
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
			year: '2025',
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
			category: 'web',
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
		webNote: { en: 'Primary focus', id: 'Fokus utama' },
		web: [
			{ name: 'HTML & CSS', level: 90 },
			{ name: 'WordPress', level: 85 },
			{ name: 'PHP', level: 78 },
			{ name: 'MySQL', level: 80 },
			{ name: 'JavaScript', level: 75 },
			{ name: 'Flask', level: 70 },
		],
		dataTitle: { en: 'Data & Analytics', id: 'Data & Analytics' },
		dataNote: { en: 'Currently learning', id: 'Sedang didalami' },
		data: [
			{ name: 'Microsoft Excel', level: 85 },
			{ name: 'SQL', level: 80 },
			{ name: 'Data Visualization', level: 78 },
			{ name: 'Power BI', level: 75 },
			{ name: 'Python', level: 70 },
			{ name: 'Machine Learning', level: 60 },
		],
	},
};

const I18N = {
	en: {
		loader: 'Loading Portfolio',
		meta: {
			title: 'Portfolio - Web Developer & Data Enthusiast',
			description:
				'Personal portfolio - Web Developer & Full-Stack Engineer with an interest in data analytics. Showcasing web development projects, data work, and professional certifications.',
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
				"I'm a Web Developer focused on building digital products - websites, dashboards, and information systems that are clean, fast, and functional. I'm currently deepening my skills in data analytics & visualization to build smarter products.",
			ctaProjects: 'View Projects',
			ctaCv: 'Download CV',
			metaProject: 'Projects',
			metaExperience: 'Experience',
			metaCertificate: 'Certificates',
			badgeWeb: 'Web Developer',
			badgeData: 'Data Enthusiast',
			badgeFullstack: 'Full Stack',
			currently: 'Currently',
			status: 'Open to Work',
			online: 'Online',
		},
		about: {
			eyebrow: '01 - About',
			titleHtml:
				'Focused on <em>web engineering</em>,<br />curious about <em>data</em>.',
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
			filterWeb: 'Web Dev',
			filterData: 'Data',
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
			lead: "Feel free to reach out by email or through the social channels below - I'm happy to talk about collaboration, freelance work, or full-time opportunities in web development & engineering.",
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
			title: 'Portofolio - Web Developer & Data Enthusiast',
			description:
				'Portofolio pribadi - Web Developer & Full-Stack Engineer dengan ketertarikan di data analytics. Menampilkan project web development, project data, dan sertifikasi profesional.',
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
				'Saya adalah seorang Web Developer yang fokus membangun produk digital - website, dashboard, dan sistem informasi yang clean, cepat, dan fungsional. Saat ini sedang aktif mempelajari data analytics & visualization sebagai skill pendukung untuk membuat produk yang lebih cerdas.',
			ctaProjects: 'Lihat Project',
			ctaCv: 'Unduh CV',
			metaProject: 'Project',
			metaExperience: 'Pengalaman',
			metaCertificate: 'Sertifikat',
			badgeWeb: 'Web Developer',
			badgeData: 'Data Enthusiast',
			badgeFullstack: 'Full Stack',
			currently: 'Saat ini',
			status: 'Terbuka untuk Kerja',
			online: 'Online',
		},
		about: {
			eyebrow: '01 - Tentang',
			titleHtml:
				'Fokus pada <em>rekayasa web</em>,<br />penasaran dengan <em>data</em>.',
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
			filterWeb: 'Web Dev',
			filterData: 'Data',
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
			lead: 'Jangan ragu menghubungi saya lewat email atau media sosial di bawah ini - saya senang membahas kolaborasi, freelance, atau full-time opportunity di bidang web development & engineering.',
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
