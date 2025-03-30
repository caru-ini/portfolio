import { ThemeProvider } from "@/components/theme-provider";
import { env } from "@/env";
import { inter, poppins } from "@/lib/fonts";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "caru-ini",
  description: "Caru's Portfolio.",
  icons: {
    icon: "./avatar.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className={`${poppins.variable} ${inter.variable}`}>
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID ?? ""} />
      <SessionProvider>
        <body className="flex min-h-svh flex-col" suppressHydrationWarning>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
