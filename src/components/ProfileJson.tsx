'use client';

import { cn } from '@/lib/utils';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/github-dark.css';
import { useCallback, useEffect, useState } from 'react';

hljs.registerLanguage('json', json);

const profileData = {
  name: 'Caru',
  role: 'Student Developer',
  interests: ['Web', 'AI', 'Open Source'],
  location: 'Japan',
};

const profileText = '{\n' + JSON.stringify(profileData, null, 2).slice(1);

export function ProfileJson() {
  const [displayedText, setDisplayedText] = useState('');

  const highlightText = useCallback((text: string) => {
    return hljs.highlight(text, { language: 'json' }).value;
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(
      () => {
        if (index < profileText.length - 1) {
          setDisplayedText((prev) => {
            const newText = prev + profileText[index];
            return newText;
          });
          index++;
        } else {
          clearInterval(timer);
        }
      },
      50 + Math.random() * 50,
    );

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='h-[264px] w-[400px] bg-secondary/10'>
      <pre className={cn('text-muted-foreground p-3 rounded-md whitespace-pre-wrap')}>
        <code dangerouslySetInnerHTML={{ __html: highlightText(displayedText) }} />
      </pre>
    </div>
  );
}
