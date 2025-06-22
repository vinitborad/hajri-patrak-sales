import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hajri Patrak – Modern QR Based Attendance System",
  description:
    "Hajri Patrak is a comprehensive QR-based attendance system for colleges and universities. Streamline attendance marking, reporting, and analytics with dynamic QR codes, location tracking, multi-role access, and instant notifications. Try our user-friendly, affordable platform today!",
  keywords: [
    "Hajri Patrak",
    "QR attendance system",
    "college attendance",
    "university attendance",
    "student attendance",
    "attendance analytics",
    "education technology",
    "attendance app",
    "attendance software",
    "LDCE demo"
  ],
  authors: [{ name: "Vinit Borad" }],
  creator: "Hajri Patrak",
  publisher: "Hajri Patrak",
  openGraph: {
    title: "Hajri Patrak – Modern QR Based Attendance System",
    description: "Hajri Patrak is a comprehensive QR-based attendance system for colleges and universities. Streamline attendance marking, reporting, and analytics with dynamic QR codes, location tracking, multi-role access, and instant notifications. Try our user-friendly, affordable platform today!",
    url: "https://hajripatrak.com",
    siteName: "Hajri Patrak",
    images: [],
    locale: "en_IN",
    type: "website"
  },
  metadataBase: new URL("https://hajripatrak.com"),
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
