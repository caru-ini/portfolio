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
