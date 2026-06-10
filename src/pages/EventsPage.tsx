import { CommunityPhoto } from '../components/CommunityPhoto';
import { EventCard } from '../components/EventCard';
import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { events, safetyNotes, visualAssets } from '../data/site';

export function EventsPage() {
  const featuredEvent = events[0];
  const chips = ['全部', '新手赛', '积分赛', '武器挑战'];

  return (
    <PageShell eyebrow="EVENTS" title="赛事大厅" description="从新手友谊战到赛季积分赛，每场比赛都有明确规则、现场检查和赛后复盘。选一场适合的比赛，带着战车上场。">
      <Section eyebrow="FEATURED" title="主推赛事" description="当前最值得关注的开放赛程。">
        <div className="hud-panel grid gap-6 rounded-[2rem] p-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <CommunityPhoto
            src={visualAssets.community.eventArenaWide}
            alt="观锋赛事大厅擂台现场"
            className="min-h-72"
            imageClassName="h-72 object-[50%_center]"
          />
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-steel-gold px-3 py-1 text-xs font-black text-steel-black">{featuredEvent.status}</span>
              <span className="rounded-full border border-steel-line px-3 py-1 text-xs font-bold text-steel-cyan">{featuredEvent.category}</span>
            </div>
            <h2 className="mt-5 text-3xl font-black text-steel-ink">{featuredEvent.title}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-steel-muted">{featuredEvent.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-steel-line bg-white/[0.04] p-4"><p className="text-steel-muted">时间</p><p className="mt-1 font-bold text-steel-ink">{featuredEvent.date}</p></div>
              <div className="rounded-2xl border border-steel-line bg-white/[0.04] p-4"><p className="text-steel-muted">地点</p><p className="mt-1 font-bold text-steel-ink">{featuredEvent.place}</p></div>
              <div className="rounded-2xl border border-steel-line bg-white/[0.04] p-4"><p className="text-steel-muted">名额</p><p className="mt-1 font-bold text-steel-ink">{featuredEvent.capacity}</p></div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="SCHEDULE" title="正在开放的擂台赛" description="报名中的比赛都在这里。看时间、抢名额、拿奖励，准备开战。">
        <div className="mb-6 flex flex-wrap gap-3">
          {chips.map((chip) => <span key={chip} className="rounded-full border border-steel-line bg-white/[0.04] px-4 py-2 text-sm font-bold text-steel-muted">{chip}</span>)}
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {events.map((event) => <EventCard key={event.title} {...event} />)}
        </div>
      </Section>

      <Section eyebrow="RULES" title="上场前确认规则" description="装备、场地和安全检查通过后再开赛。">
        <div className="grid gap-4 md:grid-cols-3">
          {safetyNotes.map((note) => <div key={note} className="hud-panel rounded-3xl p-5 text-sm leading-7 text-steel-muted">{note}</div>)}
        </div>
      </Section>
    </PageShell>
  );
}
