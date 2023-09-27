import Footer from '@/components/ui/footer';
import { AppConfig } from '@/lib/config';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL('https://dninomiya.github.io')
      : new URL(`http://localhost:${process.env.PORT || 3000}`),
  title: AppConfig.title,
  description: AppConfig.description,
  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="mask-icon" href="/icon.svg" color="#000000" />
      </head>
      <body>
        <main className="pb-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
