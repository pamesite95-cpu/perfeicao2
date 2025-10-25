import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from './components/Nav';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perfeição",
  description: "Joias que eternizam momentos especiais.",
  icons: {
    icon: '/logo-icon.ico',
    shortcut: '/logo-icon.ico',
    apple: '/logo-icon.ico',
  },
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
        <Nav />
        <div className="pt-16">{/* espaçamento para o menu fixo */}
          {children}
        </div>
      </body>
    </html>
  );
}
