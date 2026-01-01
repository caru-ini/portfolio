import { Inter } from "next/font/google";

import LocalFont from "next/font/local";

export const poppins = LocalFont({
  src: [
    {
      path: "./font-files/poppins-v24-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const mPlus1p = LocalFont({
  src: [
    {
      path: "./font-files/m-plus-1p-v32-japanese_latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font-files/m-plus-1p-v32-japanese_latin-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mPlus1p",
  display: "swap",
});
