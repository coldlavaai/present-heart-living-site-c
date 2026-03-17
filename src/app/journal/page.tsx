import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import { journalPosts, topicLinks } from '@/lib/journal';

export const metadata: Metadata = {
  title: 'Wellbeing Journal | Yoga, Breathwork & Mindfulness Insights',
  description:
    'Explore articles on yoga, breathwork, mindfulness and wellbeing from Present Heart Living in the Scottish Highlands. Practical insights to support your practice on and off the mat.',
  alternates: { canonical: 'https://presentheartliving.co.uk/journal' },
  openGraph: {
    title: 'Wellbeing Journal | Present Heart Living',
    description:
      'Thoughtful articles on yoga, breathwork, mindfulness and wellbeing. Practical insights from Audrey Buchanan and the Present Heart Living community in the Scottish Highlands.',
    url: 'https://presentheartliving.co.uk/journal',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function JournalPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-20">
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=900&fit=crop"
          alt="Scottish Highlands landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/72" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest mb-4 drop-shadow-sm">
              The Present Heart Journal
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#5a6b58' }}>
              Thoughtful articles on yoga, breathwork, mindfulness and wellbeing from the Scottish Highlands
            </p>
          </FadeIn>
        </div>
      </section>
      <Breadcrumbs items={[{ name: 'Journal', url: '/journal' }]} />

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-lg text-peat/70 leading-relaxed">
              The Present Heart Journal explores ideas, practices and reflections on yoga, breathwork and
              mindful living. Whether you are new to yoga or a regular practitioner, these articles offer
              insights to support your wellbeing journey both on and off the mat.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Latest Articles"
            subtitle="Insights from the Present Heart Living community"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {journalPosts.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.1}>
                <Link
                  href={`/journal/${article.slug}`}
                  className="group flex flex-col bg-white rounded-xl shadow-md border border-mist/30 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={article.cardImageSrc}
                      alt={article.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-peat/50 mb-3">
                      <span className="bg-sage/10 text-sage px-2 py-1 rounded-full font-medium">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-heading text-lg text-forest group-hover:text-sage transition-colors mb-3">
                      {article.title}
                    </h3>
                    <p className="text-sm text-peat/60 leading-relaxed flex-1">{article.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-mist/30 flex items-center justify-between">
                      <span className="text-xs text-peat/40">{article.date}</span>
                      <span className="text-sm text-sage font-medium group-hover:text-forest transition-colors">
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

      {/* Topics */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeading
            title="Explore by Topic"
            subtitle="Find articles that support your interests and practice"
          />
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {Object.entries(topicLinks).map(([topic, href]) => (
                <Link
                  key={topic}
                  href={href}
                  className="px-4 py-2 bg-white rounded-full text-sm text-peat/70 border border-mist/50 hover:border-sage/30 hover:text-sage hover:bg-sage/5 transition-all duration-300 cursor-pointer"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-peat/70 leading-relaxed">
              Looking to start your practice?{' '}
              <Link href="/beginner-yoga-classes-highlands" className="text-sage hover:text-forest underline">
                Explore our beginner yoga classes
              </Link>{' '}
              or{' '}
              <Link href="/classes" className="text-sage hover:text-forest underline">
                view all classes
              </Link>{' '}
              available at Present Heart Living. You can also learn about our{' '}
              <Link href="/retreats" className="text-sage hover:text-forest underline">
                yoga retreats in Scotland
              </Link>{' '}
              for a deeper immersion experience.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        heading="Begin Your Yoga Journey"
        description="Inspired by what you've read? Take the next step and experience mindful movement in the Scottish Highlands."
        primaryCTA={{ label: 'Book a Class', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Classes', href: '/classes' }}
      />
    </>
  );
}
