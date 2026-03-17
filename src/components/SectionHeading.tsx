'use client';

import FadeIn from './FadeIn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <FadeIn className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-forest mb-4">
        {title}
      </h2>
      <div className={`w-12 h-px bg-gold/60 mb-5 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="text-lg text-peat/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
