import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';
import { serviceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Corporate Yoga & Wellbeing | Highlands Workplace Programmes',
  description:
    'Corporate wellbeing sessions including yoga, breathwork and mindfulness workshops for businesses in the Scottish Highlands. Support healthier, happier workplaces. Enquire today.',
  alternates: { canonical: 'https://presentheartliving.co.uk/corporate-wellbeing' },
  openGraph: {
    title: 'Corporate Yoga & Wellbeing | Present Heart Living',
    description:
      'Workplace yoga, breathwork and mindfulness programmes for Scottish Highlands businesses. Reduce staff stress, improve focus and support employee wellbeing. Enquire today.',
    url: 'https://presentheartliving.co.uk/corporate-wellbeing',
    siteName: 'Present Heart Living',
    locale: 'en_GB',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is included in a corporate wellbeing session?',
    answer:
      'Sessions can include desk-friendly yoga, breathwork exercises, guided relaxation and mindfulness practices. Programmes are tailored to the needs and time constraints of your team.',
  },
  {
    question: 'Do employees need yoga experience?',
    answer:
      'No. All sessions are designed to be accessible for people with no previous experience. Practices are gentle and adapted to suit a workplace environment.',
  },
  {
    question: 'Where do corporate sessions take place?',
    answer:
      'Sessions can be delivered at your workplace, at the Present Heart Living studio, or at an external venue of your choice across the Scottish Highlands.',
  },
  {
    question: 'How long is a typical corporate session?',
    answer:
      'Sessions can be adapted to suit your schedule. Common formats include 30-minute lunchtime sessions, 60-minute workshops and half-day wellbeing programmes.',
  },
  {
    question: 'Can programmes be tailored for our organisation?',
    answer:
      'Absolutely. Audrey works with each organisation to understand their needs and develop a programme that addresses specific wellbeing goals, whether that is stress reduction, team building or ongoing employee support.',
  },
];

const SessionIcon = ({ type }: { type: string }) => {
  const cls = 'w-8 h-8 text-sage';
  switch (type) {
    case 'desk':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4.5" r="2" />
          <path d="M12 6.5v5" />
          <path d="M9 9.5H7M17 9.5h-5" />
          <path d="M10 11.5l2 2.5 2-2.5" />
          <path d="M8 20h8M12 14v6" />
        </svg>
      );
    case 'breath':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
          <path d="M3 7c2.5-3 5 3 7.5 0s5-3 7.5 0" />
          <path d="M3 12c2.5-3 5 3 7.5 0s5-3 7.5 0" />
          <path d="M3 17c2.5-3 5 3 7.5 0s5-3 7.5 0" />
        </svg>
      );
    case 'mind':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
        </svg>
      );
    case 'group':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="5" r="2" />
          <circle cx="16" cy="5" r="2" />
          <path d="M5 21l3-7 3 3 3-3 3 7" />
          <path d="M8 14v-3M16 14v-3" />
        </svg>
      );
    case 'sound':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
          <path d="M12 22c4 0 7-3 7-7s-3-7-7-7-7 3-7 7 3 7 7 7z" />
          <path d="M5 15H2M22 15h-3" />
          <path d="M7.05 7.05L5 5M19 5l-2.05 2.05" />
          <circle cx="12" cy="15" r="2" />
        </svg>
      );
    case 'program':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    default:
      return null;
  }
};

const sessionTypes = [
  {
    title: 'Desk-Friendly Yoga',
    description:
      'Gentle stretches and movements that can be practised at or near a desk, designed to relieve physical tension from prolonged sitting.',
    iconType: 'desk',
  },
  {
    title: 'Breathwork Sessions',
    description:
      'Conscious breathing techniques to help employees manage stress, improve focus and find calm during busy working days.',
    iconType: 'breath',
  },
  {
    title: 'Mindfulness Workshops',
    description:
      'Practical mindfulness exercises that teams can use daily to support awareness, concentration and emotional resilience.',
    iconType: 'mind',
  },
  {
    title: 'Group Yoga Classes',
    description:
      'Accessible yoga sessions for teams of all experience levels, building connection and supporting physical wellbeing.',
    iconType: 'group',
  },
  {
    title: 'Sound Bath Experiences',
    description:
      'Immersive sound-based relaxation sessions that help teams release accumulated tension and restore calm.',
    iconType: 'sound',
  },
  {
    title: 'Wellbeing Programmes',
    description:
      'Ongoing programmes designed to embed wellbeing practices into workplace culture over weeks or months.',
    iconType: 'program',
  },
];

export default function CorporateWellbeingPage() {
  return (
    <>
      <JsonLd
        data={
          serviceSchema(
            'Corporate Wellbeing Programmes',
            'Corporate yoga, breathwork and mindfulness sessions designed to support healthier workplaces across the Scottish Highlands. Tailored programmes for organisations of all sizes.',
            '/corporate-wellbeing'
          ) as unknown as Record<string, unknown>
        }
      />

      <Hero
        variant="narrow"
        title="Corporate Wellbeing Programmes"
        subtitle="Yoga, breathwork and mindfulness sessions designed to support healthier, happier workplaces across the Scottish Highlands"
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
        imageAlt="Modern office space for corporate wellbeing programmes"
      />
      <Breadcrumbs
        items={[{ name: 'Corporate Wellbeing', url: '/corporate-wellbeing' }]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              Supporting Wellbeing in the Workplace
            </h2>
            <p className="text-lg text-peat/70 leading-relaxed mb-6">
              Modern working environments can place significant demands on both physical and mental
              wellbeing. Long hours at desks, constant digital communication and the pressures of busy
              schedules can often lead to fatigue, stress and reduced focus.
            </p>
            <p className="text-peat/70 leading-relaxed mb-6">
              Corporate wellbeing programmes offer organisations an opportunity to support their teams by
              creating space for movement, relaxation and mindful awareness. At Present Heart Living,
              sessions are designed to help employees step away from the demands of their workday and
              reconnect with their bodies through simple movement and breathing practices.
            </p>
            <p className="text-peat/70 leading-relaxed">
              These sessions can be particularly beneficial for teams experiencing workplace stress, those
              working in sedentary roles, or organisations seeking to foster a culture of care and wellbeing.
              Learn more about{' '}
              <Link href="/about/audrey-buchanan" className="text-sage hover:text-forest underline">
                Audrey Buchanan&apos;s
              </Link>{' '}
              approach to teaching and her background in education.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="Benefits of Workplace Wellbeing"
            subtitle="Supporting employees supports the whole organisation"
          />
          <FadeIn delay={0.1}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Reduced Stress', desc: 'Yoga and breathwork help regulate the nervous system, supporting calmer and more focused employees.' },
                { title: 'Improved Focus', desc: 'Mindfulness practices enhance concentration and attention, supporting better decision-making.' },
                { title: 'Physical Wellbeing', desc: 'Gentle movement reduces physical tension from desk work, supporting posture and flexibility.' },
                { title: 'Team Connection', desc: 'Shared wellbeing experiences foster a sense of connection and support within teams.' },
                { title: 'Reduced Absenteeism', desc: 'Investment in employee wellbeing can contribute to reduced sick leave and improved morale.' },
                { title: 'Positive Culture', desc: 'Embedding wellbeing practices signals that an organisation values its people and their health.' },
              ].map((b, i) => (
                <FadeIn key={b.title} delay={0.1 + i * 0.05}>
                  <div className="bg-white rounded-xl p-6 border-l-2 border-l-gold/50 border border-mist/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-heading text-lg text-forest mb-2">{b.title}</h3>
                    <p className="text-sm text-peat/70 leading-relaxed">{b.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Session Options"
            subtitle="Flexible formats tailored to your organisation&apos;s needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {sessionTypes.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-7 shadow-md border border-mist/30 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="mb-5 p-3 bg-sage/8 rounded-lg w-fit">
                    <SessionIcon type={s.iconType} />
                  </div>
                  <h3 className="font-heading text-lg text-forest mb-2">{s.title}</h3>
                  <p className="text-sm text-peat/60 leading-relaxed">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-sand/10">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="How It Works"
            subtitle="A simple process to bring wellbeing into your workplace"
          />
          <FadeIn delay={0.1}>
            <div className="mt-10 space-y-8">
              {[
                { step: '01', title: 'Initial Conversation', desc: 'We discuss your organisation\'s needs, team size, available space and wellbeing goals.' },
                { step: '02', title: 'Tailored Programme', desc: 'Audrey designs a programme that fits your schedule, space and the specific needs of your team.' },
                { step: '03', title: 'Delivery', desc: 'Sessions are delivered at your workplace, our studio or an external venue at times that suit your team.' },
                { step: '04', title: 'Ongoing Support', desc: 'For organisations seeking ongoing wellbeing support, regular programmes can be arranged on a weekly, fortnightly or monthly basis.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="font-heading text-6xl font-light text-sage/15 leading-none select-none shrink-0 w-16 text-right">{item.step}</div>
                  <div className="pt-2">
                    <h3 className="font-heading text-lg text-forest mb-1">{item.title}</h3>
                    <p className="text-peat/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <CTABanner
        heading="Bring Wellbeing to Your Workplace"
        description="Discover how yoga, breathwork and mindfulness can support your team. Programmes tailored for organisations across the Scottish Highlands."
        primaryCTA={{ label: 'Enquire Now', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Classes', href: '/classes' }}
      />
    </>
  );
}
