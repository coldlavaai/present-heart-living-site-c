import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Yoga & Pilates Classes in the Highlands | Present Heart Living',
  description:
    'Discover yoga and Pilates classes across the Scottish Highlands with Present Heart Living. Welcoming practices designed to support strength, flexibility and wellbeing.',
  alternates: { canonical: 'https://presentheartliving.co.uk/locations' },
  openGraph: {
    title: 'Local Yoga & Pilates Classes | Present Heart Living',
    description:
      'Find yoga and Pilates classes near you in the Scottish Highlands. Inverness, Black Isle, Dingwall and surrounding areas.',
    url: 'https://presentheartliving.co.uk/locations',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const locations = [
  {
    title: 'Yoga Classes Inverness',
    href: '/yoga-classes-inverness',
    description:
      'Discover yoga classes within easy reach of Inverness designed for beginners and experienced practitioners alike.',
    icon: '🏔️',
  },
  {
    title: 'Yoga Classes Black Isle',
    href: '/yoga-classes-black-isle',
    description:
      'Explore yoga practices for those living across the Black Isle and surrounding communities.',
    icon: '🌊',
  },
  {
    title: 'Pilates Classes Highlands',
    href: '/pilates-classes-highlands',
    description:
      'Learn more about Pilates classes designed to support posture, strength and body awareness.',
    icon: '💪',
  },
  {
    title: 'Beginner Yoga Classes Highlands',
    href: '/beginner-yoga-classes-highlands',
    description:
      'A welcoming introduction to yoga for those attending their first class.',
    icon: '🌱',
  },
];

export default function LocationsPage() {
  return (
    <>
      <Hero
        variant="narrow"
        title="Yoga and Pilates Classes in the Scottish Highlands"
        subtitle="Mindful movement practices for communities across Inverness, the Black Isle, Dingwall and surrounding areas"
        imageSrc="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=900&fit=crop"
        imageAlt="Scottish Highlands landscape"
      />
      <Breadcrumbs items={[{ name: 'Local Classes', url: '/locations' }]} />

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Mindful Movement in the Highlands
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Present Heart Living offers yoga, Pilates and mindful movement practices for people living
              across the Scottish Highlands. Classes are designed to provide a calm and welcoming environment
              where students can explore movement, breathing and relaxation practices that support physical
              and emotional wellbeing.
            </p>
            <p className="text-peat/70 leading-relaxed mb-4">
              Many people are drawn to yoga because they are seeking balance within busy lives. Others arrive
              looking for ways to improve flexibility, reduce stress or reconnect with their bodies through
              movement. Whatever brings you to practice, Present Heart Living aims to provide a supportive
              space where individuals can explore yoga and Pilates at their own pace.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mt-12 mb-6">
              Classes Accessible Across the Region
            </h2>
            <p className="text-peat/70 leading-relaxed mb-4">
              Present Heart Living welcomes students from communities across the Highlands, including those
              living in Inverness, the Black Isle and surrounding areas. Students often travel from:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-peat/70 mb-6">
              {['Inverness', 'Dingwall', 'Muir of Ord', 'Beauly', 'The Black Isle', 'Conon Bridge', 'Fortrose and Rosemarkie'].map((place) => (
                <li key={place} className="flex items-center gap-2">
                  <span className="text-sage">•</span> {place}
                </li>
              ))}
            </ul>
            <p className="text-peat/70 leading-relaxed">
              For many students, the journey to class becomes part of the transition from a busy day into a
              calmer and more reflective space.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            title="Find Classes Near You"
            subtitle="Explore yoga and Pilates practices available to students across the region"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {locations.map((loc, i) => (
              <FadeIn key={loc.href} delay={i * 0.1}>
                <Link
                  href={loc.href}
                  className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-mist/50 hover:border-sage/30"
                >
                  <span className="text-3xl block mb-3">{loc.icon}</span>
                  <h3 className="font-heading text-xl text-forest mb-2 group-hover:text-sage transition-colors">
                    {loc.title}
                  </h3>
                  <p className="text-peat/70 text-sm leading-relaxed mb-3">
                    {loc.description}
                  </p>
                  <span className="text-sage text-sm font-medium group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Begin Practice */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Begin Your Practice
            </h2>
            <p className="text-peat/70 leading-relaxed">
              Whether you are new to yoga or returning after time away, Present Heart Living offers a
              supportive environment where you can begin or deepen your practice. Through mindful movement
              and breath awareness, students can develop strength, flexibility and a greater sense of balance
              in everyday life.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        heading="Start Your Practice in the Highlands"
        description="Join a welcoming yoga or Pilates class near you in the Scottish Highlands."
        primaryCTA={{ label: 'Explore Classes', href: '/classes' }}
        secondaryCTA={{ label: 'Book a Class', href: '/contact' }}
      />
    </>
  );
}
