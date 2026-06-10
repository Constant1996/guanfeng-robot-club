import type { ReactNode } from 'react';

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <main className="arena-shell min-h-screen pb-20 pt-24 text-steel-ink xl:pb-0">
      <section className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="hud-panel max-w-4xl rounded-[2rem] p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-steel-gold">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-steel-muted sm:text-lg">{description}</p>
        </div>
      </section>
      {children}
    </main>
  );
}
