import { Inter } from 'next/font/google';
import './globals.css';
import { headers } from 'next/headers';
import { SessionProvider } from './session-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Personal Assistant',
  description: 'Your AI-powered personal assistant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}