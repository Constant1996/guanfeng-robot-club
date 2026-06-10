import { AnnouncementCard } from '../components/AnnouncementCard';
import { ClubUpdateCard } from '../components/ClubUpdateCard';
import { CommunityPhoto } from '../components/CommunityPhoto';
import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { announcements, challengePreviews, clubBenefits, clubUpdates, visualAssets } from '../data/site';

const benefitImages = [
  visualAssets.community.eventArenaWide,
  visualAssets.community.clubTraining,
  visualAssets.community.trainingGuidance,
  visualAssets.community.rewardsKit,
];

export function ClubPage() {
  return (
    <PageShell eyebrow="CLUB" title="俱乐部动态" description="训练、约战、工坊、排行榜和赛季奖励，让每一次到场都有新的挑战目标。">
      <Section eyebrow="NOTICE" title="活动公告" description="本周开放的擂台、训练和武器挑战都在这里。锁定时间，准备上场。">
        <div className="grid gap-5 lg:grid-cols-3">
          {announcements.map((announcement) => <AnnouncementCard key={announcement.title} {...announcement} />)}
        </div>
      </Section>

      <Section eyebrow="BATTLE LOG" title="最新战报与工坊动态" description="冠军、试战记录和武器上新会持续刷新。">
        <div className="mb-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <CommunityPhoto
            src={visualAssets.community.workshopGuidance}
            alt="观锋工坊调试现场"
            imageClassName="h-72 object-[55%_center]"
          />
          <CommunityPhoto
            src={visualAssets.community.garageParts}
            alt="观锋装备与配件展示"
            imageClassName="h-72 object-[50%_center]"
          />
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {clubUpdates.map((update) => <ClubUpdateCard key={update.title} {...update} />)}
        </div>
      </Section>

      <Section eyebrow="MATCH UP" title="约战入口" description="先从约战入口开始，实际匹配由现场老师或管理员确认，保证规则和秩序。">
        <div className="grid gap-4 md:grid-cols-2">
          {challengePreviews.map((challenge, index) => (
            <article key={challenge.title} className="hud-panel rounded-3xl p-6">
              <CommunityPhoto
                src={index === 0 ? visualAssets.community.matchTraining : visualAssets.community.matchFlipper}
                alt="观锋约战入口现场"
                className="mb-5 rounded-2xl p-2"
                imageClassName="h-36 rounded-xl object-[52%_center]"
              />
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-black text-steel-ink">{challenge.title}</h3>
                <span className="shrink-0 rounded-full bg-steel-cyan/10 px-3 py-1 text-xs font-bold text-steel-cyan">{challenge.status}</span>
              </div>
              <p className="mt-3 text-sm text-steel-muted">{challenge.time} · {challenge.place}</p>
              <a href="#/join" className="mt-6 inline-flex rounded-full border border-steel-line px-5 py-3 text-sm font-black text-steel-gold transition hover:border-steel-gold">咨询约战</a>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="WHY JOIN" title="进入一个持续开赛的机器人社群" description="这里不是只买一台机器，而是加入赛事、队友、规则和赛季目标组成的俱乐部。">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clubBenefits.map((benefit, index) => (
            <article key={benefit.title} className="hud-panel rounded-3xl p-6">
              <div className="scanline relative mb-5 h-28 overflow-hidden rounded-2xl border border-steel-line bg-steel-black/36">
                <img src={benefitImages[index]} alt={`${benefit.title}现场配图`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-black/70 via-transparent to-transparent" />
              </div>
              <p className="text-sm font-black text-steel-cyan">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-5 text-xl font-black text-steel-ink">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel-muted">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
