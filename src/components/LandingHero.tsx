import { arenaStats, events, visualAssets } from '../data/site';

const featuredEvent = events[0];

export function LandingHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-screen blurred arena background with readable text overlay zones */}
      <div className="absolute inset-0 overflow-hidden bg-steel-black">
        <picture className="pointer-events-none block h-full w-full">
          <source media="(min-width: 1024px)" srcSet={visualAssets.landingBackground} />
          <img
            src={visualAssets.landingBackground}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-[70%_center] opacity-95 sm:object-[65%_center] lg:object-right"
          />
        </picture>
        {/* Left-side readability gradient + strong bottom darkening for HUD stats */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(5,7,13,0.82) 0%, rgba(5,7,13,0.68) 32%, rgba(5,7,13,0.28) 56%, rgba(7,17,31,0.12) 80%, transparent 100%), linear-gradient(to top, rgba(5,7,13,0.9) 0%, rgba(5,7,13,0.64) 24%, rgba(5,7,13,0.28) 48%, transparent 72%), linear-gradient(to bottom, rgba(5,7,13,0.42) 0%, rgba(5,7,13,0.2) 18%, transparent 42%)',
          }}
        />
        {/* Ambient arena glows matching design system */}
        <div className="absolute left-[10%] top-44 h-64 w-64 rounded-full bg-steel-cyan/14 blur-3xl" />
        <div className="absolute bottom-[8%] right-[10%] h-80 w-80 rounded-full bg-steel-gold/10 blur-3xl" />
      </div>

      {/* Grid + noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            'linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent 90%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,.35) 0.7px, transparent 0.7px)',
          backgroundSize: '8px 8px',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Foreground content stays on the left so the arena image remains visible on the right. */}
      <div className="relative z-10 flex min-h-screen items-center px-5 pb-10 pt-28 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="inline-flex max-w-max rounded-full border border-steel-gold/35 bg-steel-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.34em] text-steel-gold backdrop-blur-xl">
              观锋俱乐部 · 赛季开放
            </p>
            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-tight text-steel-ink sm:text-7xl lg:text-8xl">
              加入擂台，<br />
              开启你的<br />
              <span className="text-steel-cyan">机甲对决</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-steel-muted">
              在观锋俱乐部，拿起遥控器，选择武器模块，进入真实规则的机器人擂台。这里有对手、有积分、有徽章，也有每周都能挑战的新目标。
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#/join"
                className="gold-cta rounded-full px-8 py-4 text-center font-black transition hover:scale-[1.02]"
              >
                立即加入
              </a>
              <a
                href="#/events"
                className="rounded-full border border-steel-line bg-steel-black/45 px-8 py-4 text-center font-bold text-steel-ink backdrop-blur-xl transition hover:border-steel-cyan hover:text-steel-cyan"
              >
                查看本周赛程
              </a>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {arenaStats.map((stat) => (
                <div
                  key={stat.label}
                  className="hud-panel rounded-2xl p-4"
                >
                  <p className="text-2xl font-black text-steel-ink">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold text-steel-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <article className="hud-panel scanline mt-5 max-w-2xl rounded-3xl p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-steel-gold px-3 py-1 text-xs font-black text-steel-black">下一场</span>
                <span className="rounded-full border border-steel-line px-3 py-1 text-xs font-bold text-steel-cyan">
                  {featuredEvent.status} · {featuredEvent.capacity}
                </span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <h2 className="text-xl font-black text-steel-ink">{featuredEvent.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-steel-muted">
                    {featuredEvent.date} · {featuredEvent.place} · {featuredEvent.category}
                  </p>
                </div>
                <a
                  href={`#/events/${featuredEvent.slug}`}
                  className="inline-flex rounded-full border border-steel-line px-5 py-3 text-sm font-black text-steel-gold transition hover:border-steel-gold"
                >
                  查看赛程
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
