"use client";

import { Button } from "@/components/ui/button";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center gap-1 rounded-md border border-border bg-background p-1">
      <Button
        variant={mounted && theme === "light" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setTheme("light")}
        className="gap-1.5"
      >
        <Sun className="size-4" />
        Light
      </Button>
      <Button
        variant={mounted && theme === "dark" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setTheme("dark")}
        className="gap-1.5"
      >
        <Moon className="size-4" />
        Dark
      </Button>
      <Button
        variant={mounted && theme === "system" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setTheme("system")}
        className="gap-1.5"
      >
        <Monitor className="size-4" />
        System
      </Button>
    </div>
  );
}
