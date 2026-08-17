import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arya Team - Web Portofolio',
  description: 'Portofolio website Arya Team',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="h-full antialiased">
      <body className={`${inter.className} md:px-3 md:py-2`}>
        <Navbar />
        <main>
          <div className="min-h-screen py-28">{children}</div>
          <ScrollToTop />
        </main>

        <Footer />
      </body>
    </html>
  );
}
