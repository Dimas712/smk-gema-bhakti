import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://smkgemabhakti1jasinga.vercel.app"),

  title: {
    default: "SMK Gema Bhakti 1 Jasinga",
    template: "%s | SMK Gema Bhakti 1 Jasinga",
  },

  description:
    "Website resmi SMK Gema Bhakti 1 Jasinga Bogor. Sekolah Menengah Kejuruan unggulan dengan berbagai jurusan, sistem Elearning, dan PPDB online. Mencetak lulusan kompeten, berkarakter, dan siap kerja.",

  keywords: [
    "SMK Gema Bhakti 1 Jasinga",
    "SMK Jasinga",
    "SMK Bogor",
    "SMK terbaik di Jasinga",
    "Sekolah Kejuruan Jasinga",
    "PPDB SMK Jasinga",
    "SMK Gema Bhakti",
    "Elearning SMK",
    "Elearning SMK Gema Bhakti",
    "Elearning Jasinga",
    "Elearning SMK Bogor",
    "Website Elearning SMK",
    "Sekolah SMK Bogor Barat",
    "SMK Swasta Jasinga",
  ],

  authors: [{ name: "SMK Gema Bhakti 1 Jasinga" }],
  creator: "SMK Gema Bhakti 1 Jasinga",
  publisher: "SMK Gema Bhakti 1 Jasinga",

  verification: {
    google: "VJbroswWy6KUH_M0ZT_e6udWW_ehzWO7-Xdf0PZN4Dk",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://smkgemabhakti1jasinga.vercel.app",
  },

  icons: {
    icon: "/smk.jpg",
    shortcut: "/smk.jpg",
    apple: "/smk.jpg",
  },

  openGraph: {
    title: "SMK Gema Bhakti 1 Jasinga | SMK & Elearning Jasinga",
    description:
      "Website resmi SMK Gema Bhakti 1 Jasinga. Info sekolah, jurusan, PPDB, dan Elearning tersedia lengkap.",
    url: "https://smkgemabhakti1jasinga.vercel.app",
    siteName: "SMK Gema Bhakti 1 Jasinga",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/smk.jpg",
        width: 512,
        height: 512,
        alt: "SMK Gema Bhakti 1 Jasinga",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SMK Gema Bhakti 1 Jasinga",
    description: "Website resmi SMK Gema Bhakti 1 Jasinga dan Elearning",
    images: ["/smk.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Schema SEO Sekolah + Elearning */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              name: "SMK Gema Bhakti 1 Jasinga",
              url: "https://smkgemabhakti1jasinga.vercel.app",
              logo: "https://smkgemabhakti1jasinga.vercel.app/smk.jpg",
              description:
                "SMK Gema Bhakti 1 Jasinga adalah sekolah kejuruan di Bogor yang menyediakan pembelajaran dan sistem Elearning.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jasinga",
                addressRegion: "Bogor",
                addressCountry: "ID",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Elearning SMK Gema Bhakti 1 Jasinga",
                itemListElement: [
                  {
                    "@type": "Course",
                    name: "Elearning SMK Gema Bhakti 1 Jasinga",
                    description: "Platform pembelajaran online siswa SMK",
                  },
                ],
              },
            }),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}