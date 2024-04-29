"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ToggleTheme from "@/components/toggletheme";
import { useState, useEffect } from "react";

const Nav: React.FC = () => {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transition = scroll
    ? "transform translate-y-0"
    : "transform -translate-y-full";

  return (
    <nav className="sticky z-50 flex justify-center items-center mx-auto top-0">
      {/* desktop */}
      <div
        className={
          "flex space-x-1 md:space-x-4 bg-secondary rounded-b-3xl py-4 px-6 border border-border transition-transform duration-300 ease-in-out " +
          transition
        }
      >
        <Link href="/">
          <Button variant={"link"} className="text-xl text-foreground">
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button variant={"link"} className="text-xl text-foreground">
            About
          </Button>
        </Link>
        <Link href="#">
          <Button variant={"link"} className="text-xl text-muted-foreground">
            Blog
          </Button>
        </Link>
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Nav;
