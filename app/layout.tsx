import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import LayoutProvider from '@/LayoutProvider';
import Logo from '@/components/Logo';
import './globals.css';

const mons = Montserrat({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mons',
});

export const metadata: Metadata = {
  title: 'Pokemon-trustCrow',
  description: 'Pokemon demo App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${mons.variable}  font-mons`}>
        <header className='h-[70px] shadow-sm fixed w-full top-0 left-0 z-20 bg-[#f9f9f9] pl-5 flex items-center'>
          <Logo />
        </header>

        <main className=' pt-[70px] relative z-10 mb-10'>
          <LayoutProvider>{children}</LayoutProvider>
        </main>
      </body>
    </html>
  );
}
