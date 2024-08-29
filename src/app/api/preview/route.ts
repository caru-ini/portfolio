import { getPreviewPostBySlug } from '@/lib/contentful';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  if (secret !== process.env.NEXT_PREVIEW_SECRET_TOKEN || !slug) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  const post = await getPreviewPostBySlug(slug);

  if (!post) {
    return NextResponse.json({ message: 'Invalid slug' }, { status: 401 });
  }

  draftMode().enable();

  redirect('/blog/' + post.slug);
}
