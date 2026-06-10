import { CalendarClock, MapPin, Radio, ShieldCheck, Users } from 'lucide-react';
import { CommunityPhoto } from '../components/CommunityPhoto';
import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { matchRequests, safetyNotes, visualAssets } from '../data/site';

export function BattlePage() {
  const matchImages = [
    visualAssets.community.clubTraining,
    visualAssets.community.eventCloseup,
    visualAssets.community.eventArenaWide,
  ];

  return (
    <PageShell
      eyebrow="MATCH SQUARE"
      title="约战入口"
      description="观锋俱乐部的日常训练入口。机师可以选择训练局、主题挑战或双人协作赛，现场由老师确认规则与安全边界。"
    >
      <Section eyebrow="OPEN MATCHES" title="正在招募的约战" description="先选一个适合等级的训练局，再到现场完成战车检查。">
        <div className="grid gap-5 lg:grid-cols-3">
          {matchRequests.map((match, index) => (
            <article key={match.title} className="hud-panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-steel-cyan/60">
              <CommunityPhoto
                src={matchImages[index] ?? visualAssets.community.clubTraining}
                alt={match.title}
                className="mb-5 rounded-2xl p-2"
                imageClassName="h-40 rounded-xl object-[52%_center]"
              />
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full bg-steel-cyan/10 px-3 py-1 text-xs font-black text-steel-cyan">{match.level}</span>
                <span className="rounded-full border border-steel-line px-3 py-1 text-xs font-bold text-steel-muted">{match.seats}</span>
              </div>
              <h3 className="text-2xl font-black text-steel-ink">{match.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel-muted">{match.rule}</p>
              <dl className="mt-6 grid gap-3 text-sm text-steel-muted">
                <div className="flex items-center gap-3"><Users size={18} className="text-steel-gold" />发起人：{match.host}</div>
                <div className="flex items-center gap-3"><CalendarClock size={18} className="text-steel-cyan" />{match.time}</div>
                <div className="flex items-center gap-3"><MapPin size={18} className="text-steel-orange" />{match.place}</div>
              </dl>
              <a href="#/join" className="mt-7 inline-flex rounded-full border border-steel-line px-5 py-3 text-sm font-black text-steel-gold transition hover:border-steel-gold">
                申请加入这一局
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="MATCH FLOW" title="约战怎么进行" description="不是随便撞一撞，而是有训练目标、有规则、有复盘的俱乐部活动。">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <CommunityPhoto src={visualAssets.community.clubTraining} alt="观锋俱乐部约战训练现场" imageClassName="h-[420px] object-[52%_center]" />
          <div className="grid gap-4">
            {[
              { icon: Radio, title: '发布挑战', text: '选择时间、场地、武器限制和训练目标。' },
              { icon: ShieldCheck, title: '赛前检查', text: '确认电池、外壳、武器模块和遥控连接。' },
              { icon: Users, title: '分组对战', text: '按年龄和操控经验安排友好对战。' },
              { icon: CalendarClock, title: '赛后复盘', text: '记录胜负原因，决定下一次改装方向。' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="hud-panel rounded-3xl p-5">
                  <div className="flex gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-steel-cyan/10 text-steel-cyan">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-steel-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-steel-muted">{item.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section eyebrow="SAFETY" title="约战前必须确认" description="越有竞技感，越要有清楚的安全边界。">
        <div className="grid gap-4 md:grid-cols-3">
          {safetyNotes.map((note) => (
            <div key={note} className="hud-panel rounded-3xl p-5 text-sm leading-7 text-steel-muted">{note}</div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
