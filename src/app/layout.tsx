import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { ThemeProvider } from "@/components/theme-provider";
import { env } from "@/env";
import { inter, mPlus1p, poppins } from "@/lib/fonts";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "caru-ini",
  description: "Caru's Portfolio.",
  icons: {
    icon: "/avatar.webp",
  },
  metadataBase: new URL(
    env.NODE_ENV === "development" ? "http://localhost:3000" : "https://caru.moe"
  ),
  alternates: {
    types: {
      "application/rss+xml": "/blog/rss.xml",
      "application/atom+xml": "/blog/atom.xml",
      "application/feed+json": "/blog/feed.json",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${mPlus1p.variable} ${poppins.variable} ${inter.variable}`}
    >
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID ?? ""} />
      <body className="flex min-h-svh flex-col" suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
