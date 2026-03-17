import type { ReactElement } from 'react';

const cls = 'w-7 h-7 text-sage';

const icons: Record<string, ReactElement> = {
  'seasonal-flow-yoga': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M12 12C12 12 7 10 5 6c4 0 7 2 7 6z" />
      <path d="M12 12C12 12 17 10 19 6c-4 0-7 2-7 6z" />
      <path d="M12 17c-2-1-4-3-4-5" />
    </svg>
  ),
  'restorative-yoga': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C8 3 5 6 5 9c0 4 3 6 7 9 4-3 7-5 7-9 0-3-3-6-7-6z" />
      <path d="M12 7v5M9.5 9.5l2.5 2.5" />
    </svg>
  ),
  'yin-yoga': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  pilates: (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v5l-3 3M12 12l3 3" />
      <path d="M6 20h12" />
      <path d="M9 17v3M15 17v3" />
    </svg>
  ),
  breathwork: (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
      <path d="M3 8c2.5-3 5 3 7.5 0s5-3 7.5 0" />
      <path d="M3 13c2.5-3 5 3 7.5 0s5-3 7.5 0" />
      <path d="M3 18c2.5-3 5 3 7.5 0s5-3 7.5 0" />
    </svg>
  ),
  'sound-baths': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12a7 7 0 0 0 14 0" />
      <path d="M5 12H3M21 12h-2" />
      <path d="M12 5V3M8.5 6.5 7 5M15.5 6.5 17 5" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  'uk-retreats': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18l4-8 4 4 3-6 4 10" />
      <path d="M3 18h18" />
    </svg>
  ),
  'international-retreats': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" />
    </svg>
  ),
  'retreat-experience': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  ),
  // Local class pages
  'yoga-classes-inverness': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18l4-8 4 4 3-6 4 10" />
      <path d="M3 18h18" />
    </svg>
  ),
  'yoga-classes-black-isle': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
      <path d="M2 12c2-4 5-4 7 0s5 4 7 0" />
      <path d="M2 17c2-4 5-4 7 0s5 4 7 0" />
      <path d="M2 7c2-4 5-4 7 0s5 4 7 0" />
    </svg>
  ),
  'pilates-classes-highlands': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v5l-3 3M12 12l3 3" />
      <path d="M6 20h12" />
      <path d="M9 17v3M15 17v3" />
    </svg>
  ),
  'beginner-yoga-classes-highlands': (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M12 12C12 12 7 10 5 6c4 0 7 2 7 6z" />
      <path d="M12 12C12 12 17 10 19 6c-4 0-7 2-7 6z" />
    </svg>
  ),
};

const fallback: ReactElement = (
  <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function ClassIcon({ href }: { href: string }) {
  const key = href.split('/').filter(Boolean).pop() ?? '';
  return icons[key] ?? fallback;
}
