# VTS Panjang PDF Extractor

Aplikasi web untuk mengonversi PDF VTS Panjang (data kapal A2 / laporan cuaca A1) menjadi file Excel otomatis.

## Struktur Project

- `backend/` - FastAPI server dengan ekstraksi PDF dan pembuatan Excel
- `frontend/` - Next.js 14 App Router dengan UI drag & drop untuk upload PDF

## Setup Backend

1. Buka terminal di folder `backend`
2. Buat virtual environment (opsional tapi direkomendasikan):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

3. Install dependency:

```powershell
pip install -r requirements.txt
```

4. Jalankan server:

```powershell
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Server akan tersedia di `http://localhost:8000`.

## Setup Frontend

1. Buka terminal di folder `frontend`
2. Install dependency:

```powershell
npm install
```

3. Jalankan development server:

```powershell
npm run dev
```

Akses frontend di `http://localhost:3000`.

## Penggunaan

1. Buka `http://localhost:3000`
2. Unggah file PDF yang sesuai dengan template:
   - `DATA OPERATOR - KAPAL` atau `CREW LIST` => akan menjadi `Data 16-17.xlsx`
   - `LAPORAN METEOROLOGI` atau `CUACA` => akan menjadi `Data Cuaca.xlsx`
3. Jika template cocok, file Excel akan otomatis diunduh.
4. Jika tidak cocok, akan muncul pesan kesalahan merah.

## Catatan

- Backend akan membuat folder `templates/` dan `outputs/` secara otomatis saat dijalankan pertama kali.
- Pastikan PDF benar-benar valid dan berisi informasi yang diharapkan.
