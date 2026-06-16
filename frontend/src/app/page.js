"use client";

import { useState } from "react";

const API_URL = "http://localhost:8000/api/convert";

function parseFilename(contentDisposition) {
  if (!contentDisposition) return "Data.xlsx";
  const match = /filename\*=UTF-8''([^;\n\r]+)/i.exec(contentDisposition) || /filename="?([^";\n\r]+)"?/i.exec(contentDisposition);
  return match ? decodeURIComponent(match[1]) : "Data.xlsx";
}

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [dragActive, setDragActive] = useState(false);

  const handleFileSelect = (event) => {
    const selected = event.target.files?.[0] || null;
    setFile(selected);
    setMessage({ text: "", type: "" });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const dropped = event.dataTransfer.files?.[0] || null;
    if (dropped) {
      setFile(dropped);
      setMessage({ text: "File PDF siap diunggah.", type: "success" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setMessage({ text: "Pilih file PDF terlebih dahulu.", type: "error" });
      return;
    }

    setLoading(true);
    setMessage({ text: "Memproses file, mohon tunggu...", type: "" });

    try {
      const formData = new FormData();
      formData.append("upload_file", file);

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorPayload = await response.json();
        throw new Error(errorPayload.detail || "Terjadi kesalahan server.");
      }

      const blob = await response.blob();
      const filename = parseFilename(response.headers.get("Content-Disposition"));
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      setMessage({ text: `Sukses! File "${filename}" siap diunduh.`, type: "success" });
      setFile(null);
    } catch (error) {
      setMessage({ text: error.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-slate-950/80 p-8 text-sky-100 shadow-inner shadow-slate-950/30 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">VTS Panjang PDF Extractor</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Ubah Data PDF Kapal atau Cuaca menjadi Excel</h1>
          </div>
          <div className="rounded-3xl bg-slate-800/70 px-5 py-4 text-right text-slate-300 shadow-lg shadow-slate-950/20">
            <p className="text-sm text-sky-300">Proses cepat, aman, dan otomatis.</p>
            <p className="mt-2 text-lg font-medium text-white">Seret atau pilih PDF Anda sekarang.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            className={`rounded-3xl border-2 ${dragActive ? "border-sky-400 bg-slate-900/80" : "border-slate-700 bg-slate-950/70"} p-10 text-center transition-colors duration-200`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileSelect}
              className="mx-auto mb-4 block w-full cursor-pointer rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 shadow-inner shadow-slate-950/20 file:cursor-pointer file:rounded-xl file:border-0 file:bg-sky-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-950"
            />
            <p className="text-base text-slate-400">Tarik dan lepas file PDF di sini, atau klik untuk memilih file.</p>
            <p className="mt-2 text-sm text-slate-500">Dukungan format: PDF kapal A2 dan laporan cuaca A1.</p>
          </div>

          {file ? (
            <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-4 text-slate-200">
              <p className="text-sm text-slate-400">File terpilih:</p>
              <p className="mt-1 font-medium text-white">{file.name}</p>
            </div>
          ) : null}

          {message.text ? (
            <div className={`rounded-3xl border p-4 text-left ${message.type === "error" ? "border-red-500 bg-red-500/10 text-red-200" : "border-emerald-500 bg-emerald-500/10 text-emerald-200"}`}>
              <p className="font-semibold">{message.type === "error" ? "Pesan Kesalahan" : "Berhasil"}</p>
              <p className="mt-2 text-sm">{message.text}</p>
            </div>
          ) : null}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Pastikan file PDF sesuai template sebelum mengunggah.</p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-3xl bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Memproses..." : "Konversi & Unduh Excel"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
