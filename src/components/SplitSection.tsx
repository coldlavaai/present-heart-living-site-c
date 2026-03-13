'use client';

import Image from 'next/image';
import FadeIn from './FadeIn';

interface SplitSectionProps {
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bgColor?: string;
}

export default function SplitSection({
  title,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
  bgColor = '',
}: SplitSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
          <FadeIn direction={reverse ? 'right' : 'left'} className={reverse ? 'lg:order-2' : ''}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn direction={reverse ? 'left' : 'right'} className={reverse ? 'lg:order-1' : ''}>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-forest mb-6">
              {title}
            </h2>
            <div className="text-peat/70 leading-relaxed space-y-4">
              {children}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
