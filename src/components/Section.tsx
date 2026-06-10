import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 inline-flex rounded-full border border-steel-gold/30 bg-steel-gold/10 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-steel-gold">{eyebrow}</p>
        <h2 className="text-3xl font-black tracking-tight text-steel-ink sm:text-5xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-8 text-steel-muted sm:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
