import { AnnouncementCard } from '../components/AnnouncementCard';
import { ClubUpdateCard } from '../components/ClubUpdateCard';
import { CommunityPhoto } from '../components/CommunityPhoto';
import { LandingHero } from '../components/LandingHero';
import { Leaderboard } from '../components/Leaderboard';
import { Section } from '../components/Section';
import { announcements, clubUpdates, events, homePortals, playerLoop, safetyNotes, visualAssets } from '../data/site';

export function HomePage() {
  const featuredEvent = events[0];

  return (
    <main className="min-h-screen bg-steel-black pb-20 text-steel-ink xl:pb-0">
      <LandingHero />

      <Section eyebrow="QUICK ENTRY" title="选择你的下一步" description="从赛事、装备、榜单到报名入口，像进入机甲擂台控制台一样开始行动。">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homePortals.map((portal) => (
            <a key={portal.title} href={portal.href} className="hud-panel group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-steel-cyan/60">
              <div className="scanline relative mb-5 h-28 overflow-hidden rounded-2xl border border-steel-line bg-steel-black/36">
                <img src={portal.image} alt={`${portal.title}真实现场`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-black/72 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-[0.22em] text-steel-cyan">{portal.kicker}</span>
              </div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-steel-gold">{portal.kicker}</p>
              <h3 className="mt-5 text-2xl font-black text-steel-ink group-hover:text-steel-cyan">{portal.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel-muted">{portal.description}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section eyebrow="THIS WEEK" title="本周主推赛事" description="锁定时间、地点和名额，下一场擂台赛正在开放。">
        <div className="hud-panel grid gap-6 rounded-[2rem] p-6 lg:grid-cols-[0.75fr_1fr_0.75fr] lg:items-center">
          <CommunityPhoto
            src={visualAssets.community.eventCloseup}
            alt="观锋周末擂台赛现场"
            className="min-h-64"
            imageClassName="h-64 object-[55%_center]"
          />
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-steel-gold px-3 py-1 text-xs font-black text-steel-black">{featuredEvent.status}</span>
              <span className="rounded-full border border-steel-line px-3 py-1 text-xs font-bold text-steel-cyan">{featuredEvent.category}</span>
            </div>
            <h3 className="mt-5 text-3xl font-black text-steel-ink sm:text-4xl">{featuredEvent.title}</h3>
            <p className="mt-4 max-w-2xl leading-8 text-steel-muted">{featuredEvent.description}</p>
          </div>
          <dl className="grid gap-3 text-sm text-steel-muted sm:grid-cols-2">
            <div className="rounded-2xl border border-steel-line bg-white/[0.04] p-4"><dt>时间</dt><dd className="mt-1 font-bold text-steel-ink">{featuredEvent.date}</dd></div>
            <div className="rounded-2xl border border-steel-line bg-white/[0.04] p-4"><dt>地点</dt><dd className="mt-1 font-bold text-steel-ink">{featuredEvent.place}</dd></div>
            <div className="rounded-2xl border border-steel-line bg-white/[0.04] p-4"><dt>名额</dt><dd className="mt-1 font-bold text-steel-ink">{featuredEvent.capacity}</dd></div>
            <a href="#/events" className="gold-cta rounded-2xl p-4 text-center font-black">进入赛事大厅</a>
          </dl>
        </div>
      </Section>

      <Section eyebrow="CLUB SIGNAL" title="最新战报与公告" description="报名开放、战报更新和武器工坊都在这里刷新。">
        <CommunityPhoto
          src={visualAssets.community.eventArenaWide}
          alt="观锋俱乐部赛事现场全景"
          className="mb-6"
          imageClassName="h-64 object-[50%_center] sm:h-80"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {announcements.map((announcement) => <AnnouncementCard key={announcement.title} {...announcement} />)}
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {clubUpdates.map((update) => <ClubUpdateCard key={update.title} {...update} />)}
        </div>
      </Section>

      <Section eyebrow="PILOT LOOP" title="每次到场都有新的挑战目标" description="训练、对战、复盘和升级连成一个持续成长的赛季循环。">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {playerLoop.map((step, index) => (
            <div key={step} className="hud-panel rounded-3xl p-5 text-center">
              <p className="text-sm font-black text-steel-cyan">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-4 text-xl font-black text-steel-ink">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="SEASON RANK" title="战力榜正在刷新" description="积分、连胜和徽章会把每一次上场记录下来。">
        <Leaderboard />
      </Section>

      <Section eyebrow="ARENA RULES" title="安全上场，按规则开战" description="竞技感可以很强，但上场规则必须清楚。">
        <div className="grid gap-4 md:grid-cols-3">
          {safetyNotes.map((note) => (
            <div key={note} className="hud-panel rounded-3xl p-5 text-sm leading-7 text-steel-muted">{note}</div>
          ))}
        </div>
      </Section>
    </main>
  );
}
