import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import { ModalProvider } from '@/Providers/modal-provider';

const inter = Inter({ subsets: ['latin'] });
import './globals.css';
import { ToastProvider } from '@/Providers/toast-provider';
import { ThemeProvider } from '@/Providers/theme-provider';

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Ecommerce Admin Dashboard for controlling Shop operations.',
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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
