'use client';

import { cn } from '@/lib/utils';
import { dotGothic16 } from '@/utils/font';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/github-dark.css'; // または他の好みのスタイル
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < profileText.length - 1) {
        setDisplayedText((prev) => prev + profileText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='h-[264px] w-[400px] bg-secondary/10'>
      <pre
        className={cn(
          'text-muted-foreground p-3 rounded-md whitespace-pre-wrap',
          dotGothic16.className,
        )}
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(displayedText, { language: 'json' }).value,
        }}
      />
    </div>
  );
}
