import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "./globals.css";

export const metadata = {
  title: "SMK Gema Bhakti 1 Jasinga",
  description: "Website Resmi SMK Gema Bhakti 1 Jasinga. Sekolah kejuruan unggulan yang mencetak lulusan kompeten, berkarakter, dan siap kerja",

  keywords: [
    "SMK Gema Bhakti 1 Jasinga",
    "SMK Jasinga",
    "Sekolah Kejuruan Jasinga",
  ],
  verification: {
    google: "abc123XYZ",
  },

  icons: {
    icon: "/smk.jpg",
    shortcut: "/smk.jpg",
    apple: "/smk.jpg",
  },

  openGraph: {
    title: "SMK Gema Bhakti 1 Jasinga",
    description: "Sekolah Menengah Kejuruan unggulan di Jasinga",
    url: "https://smkgemabhakti.vercel.app",
    siteName: "SMK Gema Bhakti 1 Jasinga",
    images: [
      {
        url: "/smk.jpg",
        width: 512,
        height: 512,
        alt: "Logo SMK Gema Bhakti 1 Jasinga",
      },
    ],
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
