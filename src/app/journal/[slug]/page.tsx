import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTABanner from '@/components/CTABanner';
import FadeIn from '@/components/FadeIn';
import { journalPosts, getPostBySlug } from '@/lib/journal';
import type { JournalBlock } from '@/lib/journal';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `https://presentheartliving.co.uk/journal/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://presentheartliving.co.uk/journal/${post.slug}`,
      siteName: 'Present Heart Living',
      locale: 'en_GB',
      type: 'article',
      images: [{ url: post.imageSrc, width: 1600, height: 900, alt: post.imageAlt }],
    },
  };
}

function renderBlock(block: JournalBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="text-peat/75 leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case 'heading':
      return (
        <h2 key={index} className="font-heading text-xl md:text-2xl text-forest mt-10 mb-3 tracking-wide">
          {block.text}
        </h2>
      );
    case 'subheading':
      return (
        <h3 key={index} className="font-heading text-lg text-forest mt-6 mb-2 tracking-wide">
          {block.text}
        </h3>
      );
    case 'quote':
      return (
        <blockquote
          key={index}
          className="border-l-2 border-gold/60 pl-6 my-8 font-heading text-xl italic text-forest/70"
        >
          {block.text}
        </blockquote>
      );
    case 'list':
      return (
        <ul key={index} className="my-5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 mb-2 text-peat/75">
              <span className="text-gold mt-1 shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block bg-sage/15 text-sage text-sm font-medium px-4 py-1 rounded-full mb-4 tracking-wide">
            {post.category}
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-peat/50">
            {post.date} · {post.readTime} · By Audrey Buchanan
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4">
          {/* Gold divider */}
          <div className="w-12 h-px bg-gold/60 mb-10" />

          <FadeIn>
            <div className="prose-content">
              {post.content.map((block, i) => renderBlock(block, i))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <FadeIn>
            <div className="bg-sage/8 rounded-xl p-6 md:p-8 border border-sage/15">
              <p className="font-heading text-lg text-forest mb-1">Audrey Buchanan</p>
              <p className="text-xs text-peat/50 mb-4 uppercase tracking-wider">Yoga &amp; Pilates Teacher · Scottish Highlands</p>
              <p className="text-sm text-peat/70 leading-relaxed">
                Audrey has been teaching yoga and Pilates in the Scottish Highlands for over thirty years. She founded Present Heart Living to offer classes, workshops and retreats rooted in genuine practice rather than performance — welcoming people at all stages of their journey with warmth and without fuss.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-sand/10">
          <div className="max-w-4xl mx-auto px-4">
            <FadeIn>
              <h2 className="font-heading text-2xl text-forest mb-8 text-center">More from the Journal</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related, i) => (
                <FadeIn key={related.slug} delay={i * 0.1}>
                  <Link
                    href={`/journal/${related.slug}`}
                    className="group flex flex-col bg-white rounded-xl shadow-md border border-mist/30 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={related.cardImageSrc}
                        alt={related.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-peat/50 mb-2">
                        <span className="bg-sage/10 text-sage px-2 py-1 rounded-full font-medium">
                          {related.category}
                        </span>
                        <span>{related.readTime}</span>
                      </div>
                      <h3 className="font-heading text-base text-forest group-hover:text-sage transition-colors mb-2">
                        {related.title}
                      </h3>
                      <p className="text-xs text-peat/60 leading-relaxed flex-1">{related.excerpt}</p>
                      <div className="mt-3 pt-3 border-t border-mist/30 flex items-center justify-between">
                        <span className="text-xs text-peat/40">{related.date}</span>
                        <span className="text-xs text-sage font-medium group-hover:text-forest transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        heading="Continue Your Practice"
        description="Inspired by what you have read? Come and experience mindful movement in the Scottish Highlands."
        primaryCTA={{ label: 'Book a Class', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Classes', href: '/classes' }}
      />
    </>
  );
}
