import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Cursor from "@/components/template/cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NCV Studio",
  description: "From Concept to Creation, From Creation to Meaning.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "NCV Studio",
    description: "From Concept to Creation, From Creation to Meaning.",
    url: "https://ncv-studio.vercel.app", // Ganti dengan domain kamu
    siteName: "NCV Studio",
    images: [
      {
        url: "/og-image.png", // Buat dan letakkan gambar og image (1200x630)
        width: 1067,
        height: 630,
        alt: "NCV Studio Open Graph Image",
      },
    ],
    type: "website",
  },
  keywords: [
    "NCV Studio",
    "NCV",
    "Not Carring Visual",
    "creative agency",
    "design",
    "branding",
    "development",
    "production",
    "From Concept to Creation",
  ],
  authors: [
    {
      name: "NCV Studio",
      url: "https://ncv-studio.vercel.app",
    },
  ],
  category: "technology",
  applicationName: "NCV Studio",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Cursor>{children}</Cursor>
        </ThemeProvider>
      </body>
    </html>
  );
}
