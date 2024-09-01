'use client';
import { ContentfulLivePreviewInitConfig } from '@contentful/live-preview';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { ReactNode } from 'react';

interface ContentfulPreviewProviderProps extends ContentfulLivePreviewInitConfig {
  children: ReactNode;
}

export function ContentfulPreviewProvider({ children, ...props }: ContentfulPreviewProviderProps) {
  return <ContentfulLivePreviewProvider {...props}>{children}</ContentfulLivePreviewProvider>;
}
