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
    google: "VJbroswWy6KUH_M0ZT_e6udWW_ehzWO7-Xdf0PZN4Dk",
  },

  icons: {
    icon: "/smk.jpg",
    shortcut: "/smk.jpg",
    apple: "/smk.jpg",
  },

  openGraph: {
    title: "SMK Gema Bhakti 1 Jasinga",
    description: "Sekolah Menengah Kejuruan unggulan di Jasinga",
    url: "https://smkgb1jasinga.vercel.app",
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
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
