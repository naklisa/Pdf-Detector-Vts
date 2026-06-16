import "./globals.css";

export const metadata = {
  title: "VTS Panjang PDF Extractor",
  description: "Ekstrak data PDF kapal dan cuaca ke Excel secara otomatis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
