import { Inter, M_PLUS_1p, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const mPlus1p = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mPlus1p",
  display: "swap",
});
