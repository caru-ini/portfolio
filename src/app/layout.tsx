import { BackToPagetop } from '@/components/backToPagetop';
import { ContentfulPreviewProvider } from '@/components/layout/contentful-provider';
import { Footer } from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { cn } from '@/lib/utils';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://caru.live'),
  title: 'caru.live',
  description: 'Caruのポートフォリオサイトです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled } = draftMode();
  return (
    <html lang='ja'>
      <body className={cn(inter.className, 'flex flex-col min-h-svh')}>
        <ContentfulPreviewProvider
          locale='en-US'
          enableInspectorMode={isEnabled}
          enableLiveUpdates={isEnabled}
          debugMode={isEnabled}
        >
          <ThemeProvider attribute='class' forcedTheme='dark' disableTransitionOnChange>
            <Header />
            {children}
            <Footer />
            <BackToPagetop />
          </ThemeProvider>
        </ContentfulPreviewProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
    </html>
  );
}
