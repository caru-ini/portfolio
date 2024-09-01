import { getPreviewPostBySlug } from '@/lib/contentful';
import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET_TOKEN || !slug) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  const post = await getPreviewPostBySlug(slug);

  if (!post) {
    return NextResponse.json({ message: 'Invalid slug' }, { status: 401 });
  }

  draftMode().enable();

  // This is a hack due to a bug with cookies and NextJS, this code might not be required in the future
  const cookieStore = cookies();
  const cookie = cookieStore.get('__prerender_bypass');
  cookies().set({
    name: '__prerender_bypass',
    value: cookie?.value || '1',
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'none',
  });

  redirect(`/blog/${slug}`);
  return;
}
