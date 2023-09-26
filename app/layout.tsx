import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/ui/footer';
import { AppConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <main className="pb-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
