import Link from "next/link";

export const BrandLogo = () => (
  <Link
    href="/"
    className="group font-poppins text-xl font-bold text-primary transition-all duration-150 ease-in-out hover:scale-105"
  >
    Caru
    <span className="text-foreground group-hover:text-pink-300">.moe</span>
  </Link>
);
