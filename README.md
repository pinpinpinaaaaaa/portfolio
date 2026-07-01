# Portofolio - Devina Dewi Faustina Basam

Website portofolio pribadi (Web Developer & Data Enthusiast) yang seluruh isinya digerakkan oleh satu file data (`data.js`) dan mendukung dua bahasa (Inggris/Indonesia).

## Fitur

- **Data-driven** - semua konten (profil, project, pengalaman, pendidikan, sertifikat, skill, kontak) diambil dari `data.js`, tanpa perlu menyentuh `index.html`.
- **Dua bahasa (EN/ID)** - tombol switch bahasa di navbar, default Inggris, pilihan tersimpan di `localStorage`.
- **Modal detail project** - klik kartu project untuk melihat deskripsi lengkap, poin fitur, tech stack, dan galeri screenshot (dengan lightbox).
- **Tanpa live demo** - project ditampilkan lewat screenshot, bukan link demo.
- **Ikon SVG** - semua ikon (email, LinkedIn, GitHub, Instagram, dll.) memakai SVG inline, bukan emoji.
- **Berjalan tanpa server** - cukup dibuka lewat file `index.html`, tidak butuh build step atau backend.
- Animasi scroll-reveal, typewriter di hero, filter project, carousel sertifikat, custom cursor, dan lain-lain - murni HTML/CSS/JS.

## Tech Stack

- HTML5 & CSS3 (custom properties, grid, flexbox, animasi)
- JavaScript (vanilla, tanpa framework/build tool)
- Google Fonts (Inter, Manrope)

## Struktur Folder

```
.
├── index.html          # Struktur halaman, style, dan script render
├── data.js             # "Database" - SEMUA konten & teks UI diedit di sini
├── CV_DevinaDewi.pdf   # File CV untuk tombol "Download CV"
├── favicon.svg / .ico  # Favicon (monogram "D")
├── assets/
│   ├── img/             # Screenshot project & gambar preview
│   └── icons/           # Salinan referensi ikon SVG yang dipakai index.html
└── README.md
```

## Cara Menjalankan Lokal

Tidak perlu instalasi apa pun.

1. Download / clone folder ini.
2. Klik dua kali `index.html`, atau buka lewat browser (`File → Open File…`).
3. Selesai - semua fitur (termasuk switch bahasa & modal project) berjalan langsung dari file lokal.

## Cara Mengedit Isi (lewat `data.js`)

Buka `data.js` dengan editor teks apa pun (VS Code, Notepad, dll). File ini berisi objek `PORTFOLIO_DATA` (semua konten) dan `I18N` (semua teks UI statis).

- Untuk **menambah data baru** (project, pengalaman, pendidikan, sertifikat), salin satu blok `{ ... }` yang sudah ada di dalam array-nya, tempel di bawahnya, lalu ubah isinya.
- Teks yang perlu **dua bahasa** ditulis sebagai objek `{ en: '...', id: '...' }` - isi keduanya. Berlaku untuk `aboutLead`, `aboutText`, `tags`, `roles` pada `profile`; `tag`/`desc`/`detail`/`highlights` pada `projects`; `type`/`desc` pada `experience`; `desc` pada `education`; serta `webTitle`/`webNote`/`dataTitle`/`dataNote` pada `skills`.
- Teks yang **tidak** diterjemahkan (nama orang, nama perusahaan/instansi, tahun, nama teknologi, judul project) cukup ditulis sebagai string biasa.
- Setelah mengedit, cukup **refresh** `index.html` di browser (tidak perlu build/compile).

**Menambah project baru** - salin blok berikut di dalam array `projects`:

```js
{
	title: 'Judul Project',
	category: 'web',
	tag: { en: 'Short Label', id: 'Label Singkat' },
	desc: { en: 'Short description.', id: 'Deskripsi singkat project.' },
	detail: { en: 'Full description.', id: 'Deskripsi lengkap project.' },
	highlights: {
		en: ['Feature one', 'Feature two'],
		id: ['Fitur satu', 'Fitur dua'],
	},
	stack: ['Tool1', 'Tool2'],
	images: ['assets/img/nama-project-1.jpg', 'assets/img/nama-project-2.jpg'],
	year: '2026',
	github: '',
},
```

- `category` diisi `'web'` atau `'data'` (dipakai tombol filter di section Projects).
- `images` adalah daftar nama file screenshot; taruh file aslinya di `assets/img/` dengan nama yang sama.
- `github` diisi link repo lengkap (`https://github.com/...`). Kosongkan `''` kalau belum ada - tombol GitHub di modal otomatis disembunyikan.
- Project tidak punya live demo, hanya galeri screenshot di modal detail (klik kartu project untuk membukanya).

**Menambah pengalaman kerja** - salin blok berikut di dalam array `experience`:

```js
{
	year: 'Jan 2026 - Sekarang',
	type: { en: 'Internship', id: 'Magang' },
	title: 'Posisi Kamu',
	org: 'Nama Perusahaan',
	desc: { en: 'What you worked on.', id: 'Apa yang kamu kerjakan.' },
},
```

**Menambah pendidikan** - salin blok berikut di dalam array `education`:

```js
{
	year: '2019 - 2022',
	title: 'SMA Negeri 1',
	org: 'Nama Sekolah',
	desc: { en: 'Major / short achievement.', id: 'Jurusan / prestasi singkat.' },
},
```

**Menambah sertifikat** - salin blok berikut di dalam array `certifications` (`title`/`issuer` tidak diterjemahkan, `url` boleh dikosongkan `''`):

```js
{
	title: 'Nama Sertifikat',
	issuer: 'Penerbit',
	year: '2026',
	url: '',
},
```

**Mengisi link sosial media** - di bagian `contact`, setiap platform (`linkedin`, `github`, `instagram`) berbentuk `{ label, href }` dengan `href` berupa URL lengkap (diawali `https://`):

```js
linkedin: { label: 'nama kamu', href: 'https://www.linkedin.com/in/username' },
```

Kalau salah satu platform belum punya akun/link, **hapus seluruh objeknya** (bukan diisi `'#'` atau dibiarkan kosong) - ikon dan link platform tersebut otomatis tidak akan ditampilkan di halaman maupun footer.

## Cara Deploy ke GitHub Pages

1. Buat repository baru di GitHub (bisa lewat browser, tanpa aplikasi tambahan).
2. Upload seluruh isi folder ini ke repository tersebut (drag & drop lewat **Add file → Upload files**, atau `git push` kalau familiar dengan Git).
3. Buka tab **Settings → Pages** di repository.
4. Pada bagian **Branch**, pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu sekitar 1 menit, lalu website akan bisa diakses di:
   `https://<username>.github.io/<nama-repo>/`

> Penting: nama file utama harus tetap `index.html` (huruf kecil semua) agar GitHub Pages mengenalinya sebagai halaman depan.

