# Design Spec — Ganendra Pradipa Portfolio Redesign

## Konsep

Redesign total dari "SaaS portfolio template" (hero besar, stat counter, card grid berwarna) menjadi **portfolio berbasis teks, monokrom, seperti dokumen/terminal** — terinspirasi dari maxleiter.com, diadaptasi untuk identitas data/ML kamu.

Prinsip utama: **substansi di atas packaging**. Tidak ada elemen yang mendekorasi tanpa fungsi. Setiap baris teks membawa informasi nyata (nama proyek, tahun, tools, hasil).

Scope: fokus portfolio proyek saja — tanpa bagian tulisan/notes.

---

## Warna

Monokrom murni. Tidak ada warna aksen sama sekali — hierarki dibangun lewat kontras nilai (value), bukan hue.

| Token              | Hex       | Peran                                                    |
| ------------------ | --------- | -------------------------------------------------------- |
| `--bg`             | `#FFFFFF` | Latar utama                                              |
| `--bg-subtle`      | `#FAFAFA` | Latar section alternatif / hover row                     |
| `--border`         | `#E4E4E4` | Garis pemisah, hairline rules                            |
| `--text-primary`   | `#0A0A0A` | Heading, teks utama (bukan `#000` murni — terlalu keras) |
| `--text-secondary` | `#6B6B6B` | Metadata: tahun, tools, label                            |
| `--text-tertiary`  | `#A3A3A3` | Teks paling redup: placeholder, disabled                 |

Tidak ada dark mode di versi pertama — bisa ditambah belakangan sebagai `prefers-color-scheme` invert sederhana (bg/text ditukar) tanpa menambah kompleksitas.

---

## Tipografi

Dua keluarga font, peran jelas:

- **Monospace** — untuk metadata: tahun, label section, tag tools, nav. Contoh: `JetBrains Mono`, `IBM Plex Mono`, atau `Berkeley Mono`-alike gratis (`Space Mono` sebagai fallback aman). Memberi nuansa "data/terminal" tanpa harus literal jadi terminal UI.
- **Sans-serif humanis untuk body/heading** — bukan Inter/Geist default. Pertimbangkan `Instrument Sans`, `Söhne`-alike (`General Sans`), atau `Neue Montreal`-alike gratis (`Switzer`). Harus terasa netral tapi punya karakter, bukan default framework.

Skala tipografi (mobile-first, dibesarkan di desktop via clamp):

- Nama/heading utama: 28–36px, weight 500 (bukan 700/900 — hindari kesan "berteriak")
- Section label (monospace): 13px, letter-spacing sedikit lebar, **sentence case, bukan ALL CAPS**
- Body/deskripsi proyek: 15–16px, line-height 1.6, max-width ~65ch
- Metadata (tahun, tools): 13px monospace, `--text-secondary`

Tidak ada accent tunggal di headline (tidak ada kata yang di-italic/bold/warna beda dalam satu judul).

---

## Layout

Single column, left-aligned, max-width konten ~680–720px, tanpa sidebar. Ini yang bikin terasa seperti dokumen, bukan dashboard.

```
[nav: about  projects  contact]              [github] [linkedin] [ig]

Ganendra Pradipa
Information Systems student · Merauke, South Papua

Data-focused — machine learning, computer vision, data mining.
Currently: R&D @ Smart Center Universitas Musamus.

---

## Experience

2022—      Information Systems Student, Universitas Musamus
Jun 2025—  Research & Development, Smart Center Universitas Musamus
Jun–Dec25  Research Assistant (CV & AI), Information System Dept.
           → aquatic weed detection via drone imagery, mAP@50 44.7%

---

## Projects

2026  Teen Depression Calculator
      Predicts depression likelihood in teens from questionnaire responses.
      Python · XGBoost · React                              [github ↗]

2026  FIFA World Cup 2026 Forecasting
      Win probability per match using Elo rating + Monte Carlo (10k runs).
      Python · Elo Rating · Monte Carlo                      [github ↗]

2026  Formula One 2026 Forecasting
      WDC/WCC prediction via Elo + ML + Monte Carlo simulation.
      Python · ML · Monte Carlo                               [github ↗]

2025  TitipHub
      Platform penitipan anak & hewan peliharaan (college startup).
      React · Tailwind · Node.js                              [github ↗]

2025  MaezproGym
      Membership & subscription management app for gyms.
      React · Tailwind · Node.js                               [github ↗]

---

## Contact
ganendraptpratama@gmail.com
```

Catatan layout:

- **Tidak ada hero terpisah** — nama, status, dan deskripsi singkat langsung muncul di atas tanpa section "About Me" berlabel.
- **Nav sebagai teks inline sederhana**, bukan navbar sticky dengan background/shadow.
- **Experience & Projects sebagai list bertahun**, disejajarkan kolom (tahun di kiri, konten di kanan) — pola tabular ringan, bukan card.
- **Divider**: hairline rule tipis (`1px solid var(--border)`) antar section, bukan spacing besar kosong.
- **Tidak ada gambar/thumbnail proyek.** Kalau nanti mau nambah visual, cukup satu diagram/chart kecil inline di detail proyek (bukan foto cover).
- **Link GitHub sebagai teks inline** di ujung baris, bukan tombol.

---

## Motion

Minimal. Hanya:

- Underline muncul halus saat hover pada link (bukan transform/scale)
- Tidak ada fade-in-on-scroll di tiap section
- Optional: satu efek kecil di baris project saat hover — background `--bg-subtle` muncul, tanpa shadow/scale

---

## Yang sengaja DIHINDARI (dari desain lama)

- ❌ Efek typewriter "I'm a |"
- ❌ Stat counter row (10+ Projects, 5+ Tools, dst.)
- ❌ Card grid dengan border-radius + shadow seragam
- ❌ Badge tech-stack warna-warni
- ❌ Eyebrow label ALL CAPS di atas tiap heading
- ❌ Tombol CTA besar bergradasi ("View Projects" / "Contact Me")
- ❌ Foto profil besar di hero
- ❌ Warna aksen (terracotta, neon-green, atau apa pun) — monokrom penuh

---

## Konten yang perlu disiapkan/dikonfirmasi

- Satu kalimat status/positioning di atas (draft: _"Data-focused — machine learning, computer vision, data mining."_) — boleh diganti gaya bahasamu sendiri
- Apakah skills & tools list tetap ditampilkan, atau cukup implisit lewat tools per-project? (disarankan: implisit saja, lebih ringkas)
- Format kontak: email saja, atau tetap tampilkan lokasi & social links seperti sekarang?

---

## Next step

Kalau spec ini sudah sesuai, saya bisa langsung build versi HTML-nya dan publish sebagai halaman yang bisa kamu lihat live sebelum diimplementasikan ke situs aslimu.
