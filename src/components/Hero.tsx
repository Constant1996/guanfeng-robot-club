import { events, visualAssets } from '../data/site';

const featuredEvent = events[0];

export function Hero() {
  return (
    <section id="home" className="arena-shell relative overflow-hidden px-5 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="relative z-10">
          <p className="mb-5 inline-flex rounded-full border border-steel-gold/35 bg-steel-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-steel-gold">
            GUANFENG 赛季开放
          </p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-steel-ink sm:text-6xl lg:text-7xl">
            加入擂台，<br />开启你的第一场<br /><span className="text-steel-cyan">机器人对决</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-steel-muted">
            选择武器模块，进入真实规则的机器人擂台。报名比赛、挑战对手、升级战车，把名字打上赛季榜单。
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#/events" className="gold-cta rounded-full px-7 py-4 text-center font-black">查看近期活动</a>
            <a href="#/join" className="rounded-full border border-steel-line bg-white/5 px-7 py-4 text-center font-bold text-steel-ink transition hover:border-steel-cyan hover:text-steel-cyan">立即加入</a>
          </div>
        </div>

        <div className="relative z-10 grid gap-5">
          <div className="hud-panel scanline rounded-[2rem] p-4">
            <img src={visualAssets.heroRobot} alt="观锋机器人产品图" className="hero-robot-glow w-full rounded-[1.5rem] object-cover" />
          </div>
          <article className="hud-panel rounded-[2rem] p-6">
            <span className="rounded-full bg-steel-gold px-3 py-1 text-xs font-black text-steel-black">下一场活动</span>
            <h2 className="mt-5 text-2xl font-black leading-8 text-steel-ink">{featuredEvent.title}</h2>
            <p className="mt-3 text-sm leading-6 text-steel-muted">{featuredEvent.date} · {featuredEvent.place} · {featuredEvent.capacity}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
