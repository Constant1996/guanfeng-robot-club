import { CommunityPhoto } from '../components/CommunityPhoto';
import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { events, safetyNotes } from '../data/site';

type EventDetailPageProps = {
  slug: string;
};

export function EventDetailPage({ slug }: EventDetailPageProps) {
  const event = events.find((item) => item.slug === slug) ?? events[0];

  return (
    <PageShell eyebrow="EVENT DETAIL" title={event.title} description={event.description}>
      <Section eyebrow="MATCH INFO" title="赛程信息" description="确认时间、地点、名额和上场要求。">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="hud-panel rounded-[2rem] p-6">
            <CommunityPhoto src={event.image} alt={`${event.title}赛事现场`} className="mb-5 rounded-2xl p-2" imageClassName="h-56 rounded-xl object-[52%_center] sm:h-64" />
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-steel-gold px-3 py-1 text-xs font-black text-steel-black">{event.status}</span>
              <span className="rounded-full border border-steel-line px-3 py-1 text-xs font-bold text-steel-cyan">{event.category}</span>
              <span className="rounded-full border border-steel-line px-3 py-1 text-xs font-bold text-steel-muted">{event.capacity}</span>
            </div>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-steel-line bg-white/[0.04] p-4"><dt className="text-sm text-steel-muted">时间</dt><dd className="mt-1 font-bold text-steel-ink">{event.date}</dd></div>
              <div className="rounded-2xl border border-steel-line bg-white/[0.04] p-4"><dt className="text-sm text-steel-muted">地点</dt><dd className="mt-1 font-bold text-steel-ink">{event.place}</dd></div>
              <div className="rounded-2xl border border-steel-line bg-white/[0.04] p-4"><dt className="text-sm text-steel-muted">年龄</dt><dd className="mt-1 font-bold text-steel-ink">{event.age}</dd></div>
              <div className="rounded-2xl border border-steel-line bg-white/[0.04] p-4"><dt className="text-sm text-steel-muted">奖励</dt><dd className="mt-1 font-bold text-steel-ink">{event.prize}</dd></div>
            </dl>
            <p className="mt-6 rounded-2xl border border-steel-gold/25 bg-steel-gold/10 p-4 text-sm leading-7 text-steel-muted">{event.signupNote}</p>
            <a href="#/join" className="gold-cta mt-6 inline-flex rounded-full px-7 py-4 font-black">报名咨询</a>
          </div>

          <div className="hud-panel rounded-[2rem] p-6">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-steel-cyan">Schedule</p>
            <div className="mt-5 grid gap-3">
              {event.schedule.map((step, index) => (
                <div key={step} className="rounded-2xl border border-steel-line bg-white/[0.04] p-4">
                  <p className="text-xs font-black text-steel-gold">{String(index + 1).padStart(2, '0')}</p>
                  <p className="mt-2 font-bold text-steel-ink">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="ARENA RULES" title="上场规则" description="先通过检查，再进入擂台。">
        <div className="grid gap-4 md:grid-cols-3">
          {[...event.rules, ...safetyNotes].slice(0, 3).map((rule) => (
            <div key={rule} className="hud-panel rounded-3xl p-5 text-sm leading-7 text-steel-muted">{rule}</div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
