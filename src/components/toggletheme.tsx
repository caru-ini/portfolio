'use client';
import { Button } from '@/components/ui/button';

import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from 'lucide-react';

import { useState, useEffect } from 'react';

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <></>;

    return (
        <Button variant={"ghost"} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon/>}
        </Button>
    );
};

export default ToggleTheme;

