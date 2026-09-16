# PT Widia Utama — Company Website

Website resmi PT Widia Utama, perusahaan konveksi (apparel & workwear
manufacturing) yang berbasis di Surabaya, Jawa Timur, beroperasi sejak
2005. Dibangun dengan Next.js App Router, TypeScript, dan Tailwind CSS,
dengan arah desain *premium industrial corporate* — dark, editorial,
photography-driven.

**Status saat ini:** seluruh 14 halaman yang direncanakan sudah dibangun
dan berfungsi (lihat "Routes" di bawah). Beberapa data — foto produk/
pabrik/portfolio, data portfolio proyek nyata, dan file katalog PDF —
masih placeholder karena datanya belum diberikan/dikonfirmasi (lihat
"Placeholder & data yang masih dibutuhkan").

---

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens kustom — lihat `tailwind.config.ts`)
- **next/font/google** — Space Grotesk (heading) & IBM Plex Sans (body)
- `clsx` + `tailwind-merge` (helper `cn()` di `lib/utils.ts`)
- Tidak ada backend/database/CMS — semua data ada di `lib/data/*.ts`, dan
  form Request a Quote memakai mock submit handler (lihat bagian
  "Custom Order / Quote flow")

## Cara menjalankan

```bash
npm install
npm run dev       # http://localhost:3000
```

Build production:

```bash
npm run build
npm run start
```

> Catatan environment pengembangan ini (sandbox Claude): `npm install`
> tidak bisa dijalankan karena registry npm diblokir (403), jadi
> `npm run build` juga tidak pernah benar-benar dijalankan di sini.
> Semua audit dilakukan secara manual (baca kode, cek import/export,
> script pencarian). Jalankan kedua perintah di atas di komputer Anda
> sendiri untuk verifikasi akhir — jika `npm run build` gagal, kirim
> pesan errornya untuk diperbaiki.

## Folder structure

```
app/
  layout.tsx              Root layout — font, Navbar, Footer, metadata
                            default, Organization JSON-LD
  globals.css              Design tokens (dark body, selection, focus,
                            reduced-motion), no-horizontal-overflow
  page.tsx                 Homepage (10 section)
  robots.ts                 robots.txt (Next.js metadata route)
  sitemap.ts                sitemap.xml (Next.js metadata route)
  products/
    page.tsx                 Katalog produk (/products)
    [slug]/page.tsx           Detail produk dinamis (4 slug resmi)
  custom-order/page.tsx      Request a Quote — form lengkap
  portfolio/
    page.tsx                 Grid portfolio (/portfolio)
    [slug]/page.tsx           Case study dinamis (3 slot placeholder)
  about/page.tsx             Profil perusahaan
  factory/page.tsx           Proses produksi & quality control
  catalog/page.tsx           Halaman katalog
  contact/page.tsx           Info kontak resmi

components/
  ui/                 Button, Container, Section, Card, Typography,
                       ImagePlaceholder, Breadcrumb, Reveal
  layout/             Navbar, MobileNav, Footer (nav sama di desktop & mobile)
  cta/                CTASection — reusable, dipakai di 6+ halaman
  form/               FormField, FileUpload, QuoteForm, QuoteSuccess,
                       QuoteContactPanel
  product/            ProductCard, ProductHero, ProductGallery,
                       ProductSpecs, SizeChart, ProductFAQ, RelatedProducts
  portfolio/           PortfolioHero, PortfolioCard, PortfolioGrid,
                       PortfolioGallery, PortfolioMeta, RelatedProjects
  home/                Hero, TrustIntro, ProductCategories, WhyWidiaUtama,
                       CustomOrder, ProductionProcess, FactorySection,
                       PortfolioPreview, CatalogCTA
  about/               AboutHero, CompanyStory, CompanyStrengths
  factory/             FactoryHero, FactoryGallery, QualityControl
  catalog/             CatalogHero, CatalogPreview, CatalogDownloadButton,
                       CatalogProducts
  contact/             ContactHero, ContactInfo

lib/
  data/
    products.ts          Single source of truth — 4 produk resmi
    portfolio.ts          Single source of truth — 3 slot placeholder
    process.ts             6 langkah proses produksi (dipakai di 3 halaman)
    strengths.ts            9 kekuatan perusahaan (dipakai di 2 halaman)
    catalog.ts               Konfigurasi file katalog (title/description/file/available)
  quote/
    submitQuote.ts           Mock submit handler — TIDAK ADA BACKEND
    whatsapp.ts               Bangun link & pesan WhatsApp dari data form
  site-config.ts            siteConfig + buildMetadata() — dipakai semua halaman
  utils.ts                   cn() = clsx + tailwind-merge

public/
  images/{logo,hero,products,factory,portfolio,clients,team,catalog}/
                            Semua kosong (placeholder), siap diisi foto asli
  catalog/                  Kosong — siap diisi company-catalog.pdf
```

## Routes

Semua 14 halaman berikut sudah ada dan tidak ada link internal yang menuju
halaman yang belum dibangun:

| Route | Keterangan |
|---|---|
| `/` | Homepage |
| `/products` | Katalog 4 produk resmi |
| `/products/polo-shirt` | Detail produk |
| `/products/t-shirt` | Detail produk |
| `/products/kemeja` | Detail produk |
| `/products/jaket` | Detail produk |
| `/custom-order` | Request a Quote (terima `?product=<Nama>` untuk pre-fill) |
| `/portfolio` | Grid portfolio (3 slot placeholder) |
| `/portfolio/project-1` | Case study placeholder |
| `/portfolio/project-2` | Case study placeholder |
| `/portfolio/project-3` | Case study placeholder |
| `/about` | Profil perusahaan |
| `/factory` | Proses produksi & quality control |
| `/catalog` | Halaman katalog (download disabled — PDF belum ada) |
| `/contact` | Info kontak resmi |

4 slug produk dan 3 slug portfolio dihasilkan otomatis oleh
`generateStaticParams()` dari `lib/data/products.ts` /
`lib/data/portfolio.ts` — tidak ada slug yang di-hardcode terpisah.

## Lokasi data

- **Produk** (nama, deskripsi, material/MOQ/ukuran, FAQ): `lib/data/products.ts`.
  Ini satu-satunya sumber — `ProductCard`, `/products`, `/products/[slug]`,
  `/about`, `/catalog`, dan Footer semuanya membaca dari sini.
- **Portfolio**: `lib/data/portfolio.ts` — lihat catatan placeholder di
  bawah.
- **Proses produksi** (6 langkah): `lib/data/process.ts` — dipakai
  homepage, `/factory`, dan `/catalog` (heading berbeda-beda lewat prop
  `title` di komponen `ProductionProcess`, datanya tetap satu sumber).
- **Kekuatan perusahaan** (9 poin): `lib/data/strengths.ts` — dipakai
  homepage dan `/about`.
- **Konfigurasi katalog PDF**: `lib/data/catalog.ts`.
- **Site config (domain, nama situs, locale)**: `lib/site-config.ts`.

## Lokasi gambar & cara mengganti placeholder

Semua folder gambar sudah disiapkan di `public/images/`:

```
public/images/logo/
public/images/hero/
public/images/products/
public/images/factory/
public/images/portfolio/
public/images/clients/
public/images/team/
public/images/catalog/
```

Semua masih kosong. Selama kosong, komponen `ImagePlaceholder` otomatis
menampilkan kotak placeholder dengan label `[COMPANY DATA NEEDED — <folder>]`
yang jelas — bukan foto acak dari internet.

**Cara mengganti dengan foto asli** (langkah sama untuk semua jenis foto):

1. Taruh file foto di folder yang sesuai, mis. `public/images/products/polo-shirt-1.jpg`.
2. Buka `lib/data/products.ts` (atau `portfolio.ts` untuk foto portfolio),
   ubah field `image` (dan/atau `gallery`) dari `null` menjadi path itu,
   mis. `"/images/products/polo-shirt-1.jpg"`.
3. Selesai — `ProductCard`, `ProductGallery`, dll. otomatis merender foto
   asli lewat `next/image` menggantikan placeholder, tanpa perubahan kode
   lain.

Untuk foto hero (`Hero.tsx`) dan factory (`FactoryGallery.tsx`) yang belum
punya field data terpisah, cara paling sederhana adalah mengedit langsung
komponennya untuk mengganti `<ImagePlaceholder>` dengan `<Image>` + path
foto asli (ikuti pola yang sudah dipakai di `ProductCard.tsx`).

## Cara mengaktifkan download katalog PDF

Belum ada file PDF katalog asli. Untuk mengaktifkan:

1. Taruh file PDF di `public/catalog/company-catalog.pdf`.
2. Buka `lib/data/catalog.ts`, ubah `available: false` menjadi `available: true`.

Tidak ada perubahan kode lain yang diperlukan — `CatalogDownloadButton`
otomatis berubah dari disabled state ("Catalog file is not available
yet.") menjadi tombol download asli.

## Custom Order / Quote flow

`/custom-order` memakai **mock submit handler** (`lib/quote/submitQuote.ts`)
— belum ada backend/email API/database. Alurnya:

```
/products/[slug] → Request a Quote → /custom-order?product=<Nama Produk>
  → field Produk terisi otomatis jika nama cocok dengan salah satu dari
    4 produk resmi
  → isi form → validasi client-side (6 field wajib: Nama, Perusahaan,
    Email, WhatsApp, Produk, Jumlah)
  → submit → status "submitting" → mock sukses (900ms delay, hanya
    console.info, tidak ada data yang benar-benar terkirim/tersimpan)
  → "REQUEST RECEIVED" → tombol "Continue to WhatsApp" membuka
    https://wa.me/6281331208737 dengan pesan otomatis berisi seluruh data
    form (field kosong seperti Deadline/Catatan dihilangkan barisnya,
    bukan ditampilkan sebagai "undefined")
```

Untuk menghubungkan backend sungguhan nanti: ganti isi fungsi
`submitQuote()` di `lib/quote/submitQuote.ts` dengan `fetch()` ke endpoint
API asli (contoh kode ada di komentar file tersebut) — `QuoteForm.tsx`
tidak perlu diubah karena hanya bergantung pada bentuk hasil
`{ ok, error? }`.

## Kontak & WhatsApp

Data resmi yang dipakai konsisten di seluruh situs (Navbar, Footer,
Contact, Custom Order, CTA manapun):

- WhatsApp: **0813 3120 8737** (`https://wa.me/6281331208737`)
- Email: **widiamerta@yahoo.com**
- Alamat: Perum Pondok Maritim Indah, Blok TT Kav.8 No.1, Balasklumprik,
  Wiyung, Surabaya 60222, Jawa Timur

## SEO

- Setiap halaman punya `title` + `description` sendiri lewat helper
  `buildMetadata()` di `lib/site-config.ts` (title, description, canonical,
  Open Graph — konsisten, tidak duplikat kecuali 3 halaman portfolio
  placeholder yang memang belum punya judul asli).
- `app/robots.ts` dan `app/sitemap.ts` — dibangun dari data rute yang sama
  dengan halaman sesungguhnya (bukan daftar hardcode terpisah).
- **Domain belum dikonfirmasi** — canonical/OG/sitemap memakai
  `NEXT_PUBLIC_SITE_URL` jika di-set; jika tidak, path dibiarkan relatif
  (tidak ada domain fiktif). Set env var ini di deployment begitu domain
  produksi sudah pasti — tidak ada perubahan kode lain yang diperlukan.
- `Organization` JSON-LD sitewide di `app/layout.tsx` — hanya nama, email,
  telepon, alamat, dan tahun berdiri (2005). Tidak ada rating/review/
  sertifikasi/jumlah karyawan.

## Placeholder & data yang masih dibutuhkan

Ditandai jelas di kode (`[COMPANY DATA NEEDED — ...]`, `[PORTFOLIO DATA
NEEDED]`, `[PRODUCT DATA NEEDED]`, `[CATALOG FILE — COMPANY DATA NEEDED]`,
`[SIZE CHART — COMPANY DATA NEEDED]`) — tidak ada yang ditebak atau dikarang:

- Foto: hero, 4 foto produk, foto factory (workshop/production/quality
  control/packing), foto portfolio, logo klien, foto tim.
- **Portfolio**: `lib/data/portfolio.ts` berisi 3 slot placeholder
  struktural (`project-1/2/3`) — PT Widia Utama belum punya proyek
  portfolio yang terverifikasi/disetujui klien. Semua field selain `slug`
  bernilai `null`/placeholder. Untuk mengisi proyek asli, edit array
  `portfolioProjects` di file itu.
- Data produk: material, MOQ, ukuran (size chart) per produk — semua
  masih `null` di `lib/data/products.ts`.
- Data perusahaan: nama pendiri, jumlah karyawan, luas fasilitas/workshop,
  kapasitas produksi, sertifikasi — sengaja tidak disebutkan di mana pun
  karena belum dikonfirmasi.
- File katalog PDF asli (lihat "Cara mengaktifkan download katalog PDF").
- Domain produksi (untuk SEO — lihat bagian "SEO").

## Design system (ringkas)

- Warna: `ink` (charcoal 60%), `navy` (dark navy 30%), `emerald` (aksen
  10%), `paper` (teks off-white) — `tailwind.config.ts`.
- Tipografi: **Space Grotesk** (heading, `--font-display`), **IBM Plex
  Sans** (body, `--font-body`).
- Radius kecil, border tipis, tanpa glassmorphism/gradient berlebihan,
  animasi minimal (`Reveal` fade+translate satu kali, menghormati
  `prefers-reduced-motion`).

---

## Riwayat pengembangan (ringkas)

1. Foundation — struktur project, design tokens, komponen dasar.
2. Design system & global UI — typography, Navbar/Footer, image placeholder.
3. Homepage (10 section).
4. Products system (`/products`, `/products/[slug]`).
5. Custom Order / Request a Quote.
6. Portfolio (`/portfolio`, `/portfolio/[slug]`).
7. About + Factory.
8. Catalog.
9. Contact.
10. Audit sistem konversi — CTA/WhatsApp/navigasi/form; ditemukan &
    diperbaiki: drawer mobile navbar yang bisa memotong tombol CTA di
    layar pendek, duplikasi data produk di Footer, template pesan
    WhatsApp, Email jadi field wajib, 1 unused import.
11. Audit SEO/performance/image — ditambah `robots.ts`, `sitemap.ts`,
    `Organization` JSON-LD, semua halaman dipindah ke helper
    `buildMetadata()` untuk Open Graph konsisten; alt text diperjelas di
    2 komponen.
12. Final QA — audit menyeluruh (import/export, unused code, duplicate
    data, accessibility, hydration, route) + README ditulis ulang menjadi
    panduan lengkap ini.
tes update
