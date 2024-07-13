'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ToggleThemeProps {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
  className?: string;
}

const ToggleTheme = ({ variant = 'default', className }: ToggleThemeProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Button
      variant={variant}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={className}
    >
      {mounted && theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ToggleTheme;
