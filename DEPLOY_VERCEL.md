# 🚀 Panduan Deploy ke Vercel

Panduan ini menjelaskan langkah-langkah untuk men-deploy project **web_porto** (Next.js 16) ke [Vercel](https://vercel.com).

---

## Prasyarat

- Akun [GitHub](https://github.com), [GitLab](https://gitlab.com), atau [Bitbucket](https://bitbucket.org)
- Akun [Vercel](https://vercel.com) (bisa daftar gratis menggunakan akun GitHub)
- Repository project sudah di-push ke salah satu platform di atas

---

## Langkah 1 — Push Project ke GitHub

Jika belum memiliki repository remote, buat repository baru di GitHub lalu push project:

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan remote origin
git remote add origin https://github.com/<username>/<nama-repo>.git

# Commit dan push
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

> [!IMPORTANT]
> Pastikan file `.gitignore` sudah mengabaikan folder `node_modules/` dan `.next/` agar tidak ikut ter-push.

---

## Langkah 2 — Buat Akun Vercel

1. Buka [vercel.com](https://vercel.com)
2. Klik **Sign Up**
3. Pilih **Continue with GitHub** (atau provider lain yang kamu gunakan)
4. Berikan izin akses ke repository GitHub

---

## Langkah 3 — Import Project

1. Setelah login, klik tombol **Add New...** → **Project**
2. Pilih repository **web_porto** dari daftar repository
3. Klik **Import**

---

## Langkah 4 — Konfigurasi Project

Di halaman konfigurasi, Vercel akan otomatis mendeteksi bahwa ini adalah project Next.js. Pastikan pengaturan berikut sudah benar:

| Pengaturan         | Nilai                |
| ------------------- | -------------------- |
| **Framework Preset** | Next.js              |
| **Root Directory**   | `./` (default)       |
| **Build Command**    | `next build`         |
| **Output Directory** | `.next` (default)    |
| **Install Command**  | `npm install`        |

### Environment Variables (Opsional)

Jika project menggunakan environment variables (misalnya API key), tambahkan di bagian **Environment Variables**:

1. Klik **Environment Variables**
2. Masukkan **Key** dan **Value** untuk setiap variabel
3. Pilih environment mana yang membutuhkannya (Production / Preview / Development)

> [!NOTE]
> Saat ini project ini belum menggunakan environment variables, jadi bagian ini bisa di-skip.

---

## Langkah 5 — Deploy! 🎉

1. Klik tombol **Deploy**
2. Tunggu proses build selesai (biasanya 1–3 menit)
3. Setelah berhasil, Vercel akan memberikan URL untuk mengakses website, misalnya:
   ```
   https://web-porto-<random>.vercel.app
   ```

---

## Langkah 6 — Custom Domain (Opsional)

Jika ingin menggunakan domain sendiri:

1. Buka **Project Settings** → **Domains**
2. Masukkan nama domain (contoh: `portofolio.com`)
3. Klik **Add**
4. Vercel akan memberikan instruksi DNS record yang perlu ditambahkan di penyedia domain:

   | Tipe   | Name  | Value                    |
   | ------ | ----- | ------------------------ |
   | CNAME  | `www` | `cname.vercel-dns.com`   |
   | A      | `@`   | `76.76.21.21`            |

5. Tunggu propagasi DNS (biasanya 1–48 jam)

---

## Auto Deploy (CI/CD)

Secara default, Vercel akan **otomatis men-deploy ulang** setiap kali kamu push commit baru ke branch `main`. Cukup lakukan:

```bash
git add .
git commit -m "update: perubahan terbaru"
git push
```

Vercel juga akan membuat **Preview Deployment** untuk setiap Pull Request, sehingga kamu bisa melihat perubahan sebelum di-merge.

---

## Troubleshooting

### Build gagal?

1. **Cek log build** di dashboard Vercel untuk melihat error detail
2. **Pastikan build berhasil di lokal** terlebih dahulu:
   ```bash
   npm run build
   ```
3. **Periksa versi Node.js** — di Vercel, kamu bisa mengatur versi Node.js di **Settings** → **General** → **Node.js Version**

### Halaman 404?

- Pastikan struktur folder `src/app/` sudah benar sesuai dengan App Router Next.js
- Periksa apakah file `page.js` atau `page.tsx` ada di setiap route

### Environment variable tidak terbaca?

- Pastikan variabel sudah ditambahkan di dashboard Vercel
- Nama variabel yang ingin diakses di client-side harus diawali `NEXT_PUBLIC_`
- Lakukan **Redeploy** setelah menambahkan variabel baru

---

## Perintah Berguna

```bash
# Install Vercel CLI (opsional, untuk deploy dari terminal)
npm i -g vercel

# Login ke akun Vercel
vercel login

# Deploy dari terminal
vercel

# Deploy ke production langsung
vercel --prod
```

---

## Referensi

- 📖 [Dokumentasi Vercel](https://vercel.com/docs)
- 📖 [Vercel + Next.js Guide](https://vercel.com/docs/frameworks/nextjs)
- 📖 [Vercel CLI Reference](https://vercel.com/docs/cli)
- 📖 [Custom Domain di Vercel](https://vercel.com/docs/projects/domains)
