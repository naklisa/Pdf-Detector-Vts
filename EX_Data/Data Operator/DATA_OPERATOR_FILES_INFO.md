# Data Operator File Details

Folder: `EX_Data/Data Operator`

Dokumen ini menjelaskan isi file-file yang ada di folder tersebut, lengkap dengan tipe file, struktur utama, dan konten penting yang terdeteksi.

---

## Ringkasan File

1. `A2 16 JUNI 2026 08.00-17.30LT - HD.xlsx`
2. `A2 16-17 JUNI 2026 SL (1).xlsx`
3. `A9 16-17 JUNI 2026 SL (1).xlsx`
4. `A7 FORM MONITORING AIS 16 JUNI 2026 HD.pdf`
5. `Daily 16 JUNI 2026 08.00-17.30 LT.HD.pdf`

---

## 1. A2 16 JUNI 2026 08.00-17.30LT - HD.xlsx

- Format: Excel `.xlsx`
- Sheet yang terdeteksi:
  - `Form A2`
  - `DATA BASE`

### Konten penting
- Sheet `Form A2` berisi judul form A2 dan ringkasan lalu lintas kapal harian (`Daily Vessel Summary`).
- Sheet `DATA BASE` berisi data kapal yang terstruktur.

### Data utama di sheet `DATA BASE`
- Judul tabel: `DATA VESSEL`
- Kolom yang ditemukan:
  - `MMSI`
  - `NAMA VESSEL / CAL SIGN`
  - `LOA`
  - `GT`
  - `DRAFT`
  - `BENDERA`
  - `CARGO`
  - `AGEN`
  - `AGEN ( SINGKATAN )`

### Contoh baris data
- `199952091`
- `TB. MARINA MERCURY / YDA4748 - TK. DANA BAHARI 1`
- `-/-`
- `196/`
- `-/-`
- `TRANSINDO BAHARI PERKASA`
- `TBP`

---

## 2. A2 16-17 JUNI 2026 SL (1).xlsx

- Format: Excel `.xlsx`
- Sheet yang terdeteksi:
  - `Form A2`
  - `database.kpl`

### Konten penting
- Sheet `Form A2` sama seperti file A2 HD: judul form A2, ringkasan lalu lintas kapal harian, dan header umum.
- Sheet `database.kpl` berisi data kapal yang sama tipe A2 tetapi ada variasi nilai dan kolom tambahan.

### Data utama di sheet `database.kpl`
- Judul tabel: `DATA VESSEL`
- Kolom yang ditemukan:
  - `MMSI`
  - `NAMA VESSEL / CAL SIGN`
  - `LOA`
  - `GT`
  - `DRAFT`
  - `BENDERA`
  - `CARGO`
  - `AGEN`
  - `AGEN ( SINGKATAN )`
  - `Column1`

### Contoh baris data
- `199952091`
- `TB. MARINA MERCURY 2 / YDA4748 - TK. DANA BAHARI 1`
- `24.24/73.15`
- `196/2037`
- `3.2/-`
- `INDONESIA`
- `TRANSINDO BAHARI PERKASA`
- `TBP`

---

## 3. A9 16-17 JUNI 2026 SL (1).xlsx

- Format: Excel `.xlsx`
- Sheet yang terdeteksi:
  - `Sheet1`

### Konten penting
- File ini adalah `FORMULIR A9` untuk laporan penyiaran berita navigasi.
- Terlihat informasi header yang menunjukkan shift dan waktu operasi.

### Konten header
- `FORMULIR A9`
- `Laporan Penyiaran Berita Navigasi`
- `VTS : VTS PANJANG`
- `Tanggal : 16 - 17 JUNI 2026`
- `Waktu : 17.30LT - 08.00LT`

### Kolom tabel
- `No`
- `Jam Siaran`
- `Jenis Berita`
- `Isi Berita`
- `Channel Frequency`
- `Petugas`

---

## 4. A7 FORM MONITORING AIS 16 JUNI 2026 HD.pdf

- Format: PDF `.pdf`
- Dari pemeriksaan internal file, file valid sebagai PDF (`%PDF-1.7`).
- PDF ini kemungkinan berisi form monitoring AIS untuk shift HD.

### Temuan teknis
- File punya satu halaman.
- Metadata menunjukkan pembuatan dan modifikasi pada `16 Juni 2026`.
- Font terpasang termasuk Calibri.
- Konten teks langsung tidak mudah ditangkap dengan regex sederhana karena berada dalam stream terkompresi atau terformat internal PDF.

### Catatan
- Untuk ekstraksi teks yang akurat, gunakan parser PDF khusus seperti `pdfplumber`, `PyPDF2`, atau `pikepdf`.
- File kemungkinan berisi teks yang perlu dekode dari stream PDF, bukan teks plain.

---

## 5. Daily 16 JUNI 2026 08.00-17.30 LT.HD.pdf

- Format: PDF `.pdf`
- Dari pemeriksaan internal file, file valid sebagai PDF (`%PDF-1.7`).
- PDF ini kemungkinan berisi laporan harian untuk shift HD.

### Temuan teknis
- File juga terlihat memiliki satu halaman.
- Metadata pembuatan/modifikasi tanggal `16 Juni 2026`.
- Font terpasang termasuk Cambria dan Calibri.
- Teks utama tidak diekstrak langsung oleh regex sederhana;
  perlu parser PDF yang mampu membaca stream dan objek layout.

### Catatan
- File `Daily ... HD.pdf` kemungkinan berisi ringkasan harian atau laporan aktivitas.
- Untuk review lebih lanjut, gunakan parser PDF yang dapat mengekstrak teks dari stream dan layout.

---

## Catatan Umum

- Folder ini berisi file sample `Data Operator` yang relevan dengan proses ekstraksi PDF ke Excel di aplikasi.
- File Excel A2/A9 menunjukkan template data kapal dan laporan penyiaran.
- File PDF memerlukan parser PDF khusus untuk mengekstrak teks secara tepat.
- Jika kamu ingin analisis lebih dalam lagi, minta saya membaca lagi file tertentu atau jalankan parser PDF khusus.
