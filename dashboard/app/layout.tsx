import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import { ModalProvider } from '@/Providers/modal-provider';

const inter = Inter({ subsets: ['latin'] });
import './globals.css';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Ecommerce Admin Dashboard for controlling the Shop.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
