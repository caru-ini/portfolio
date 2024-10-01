import { PostList } from '@/components/blog/postList';
import { buttonVariants } from '@/components/ui/button';
import { ContentfulEntry } from '@/lib/contentful';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export function LatestPosts({ posts }: { posts: ContentfulEntry[] }) {
  return (
    <section className='py-12 md:py-16 lg:py-24' id='blog'>
      <div className='container space-y-3'>
        <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>Blog</div>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          Latest Posts
        </h2>
        <p className='text-muted-foreground'>最近書いた記事や、最近の記事を紹介します。</p>
        <PostList posts={posts} />
        <div className='mt-8 flex justify-end'>
          <a
            href='/blog'
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'text-primary rounded-full hover:text-primary',
            )}
          >
            もっと見る
            <ArrowRight size={20} className='inline-block' />
          </a>
        </div>
      </div>
    </section>
  );
}
