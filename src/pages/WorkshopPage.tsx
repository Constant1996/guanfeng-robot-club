import { Gift, Medal, Wrench } from 'lucide-react';
import { CommunityPhoto } from '../components/CommunityPhoto';
import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { rewardLadder, visualAssets, weaponModules } from '../data/site';

export function WorkshopPage() {
  return (
    <PageShell
      eyebrow="WEAPON WORKSHOP"
      title="武器工坊"
      description="观锋俱乐部的复玩核心。参赛、训练和挑战获得积分，兑换武器模块、护甲和赛季限定外壳。"
    >
      <Section eyebrow="MODULES" title="可兑换武器模块" description="不同武器会改变打法：推、翻、防守、控场，每一次改装都是新的策略。">
        <div className="grid gap-5 lg:grid-cols-4">
          {weaponModules.map((weapon) => (
            <article key={weapon.name} className="hud-panel overflow-hidden rounded-[2rem] p-4 transition duration-300 hover:-translate-y-1 hover:border-steel-cyan/60">
              <CommunityPhoto src={weapon.image} alt={weapon.name} className="mb-5 rounded-2xl p-2" imageClassName="h-44 rounded-xl object-[52%_center]" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-steel-gold/12 px-3 py-1 text-xs font-black text-steel-gold">{weapon.type}</span>
                <span className="rounded-full border border-steel-line px-3 py-1 text-xs font-bold text-steel-muted">{weapon.difficulty}</span>
              </div>
              <h3 className="mt-4 text-2xl font-black text-steel-ink">{weapon.name}</h3>
              <p className="mt-2 text-sm font-black text-steel-cyan">{weapon.points}</p>
              <p className="mt-3 text-sm leading-7 text-steel-muted">{weapon.effect}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="REWARD LADDER" title="积分怎么换成成长" description="把比赛表现转化为徽章、武器和荣誉，让机师每次到场都有清晰目标。">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <CommunityPhoto src={visualAssets.community.rewardsKit} alt="观锋俱乐部积分奖励展示" imageClassName="h-[420px] object-[50%_center]" />
          <div className="grid gap-4">
            {rewardLadder.map((item) => (
              <article key={item.level} className="hud-panel rounded-3xl p-5">
                <div className="grid gap-4 sm:grid-cols-[120px_1fr_90px] sm:items-center">
                  <p className="text-sm font-black text-steel-cyan">{item.level}</p>
                  <p className="text-xl font-black text-steel-ink">{item.reward}</p>
                  <p className="rounded-full bg-steel-gold/12 px-3 py-2 text-center text-sm font-black text-steel-gold">{item.points}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="WHY MODULES" title="为什么武器系统重要" description="它让格斗机器人不只是一次性玩具，而是可以持续改、持续打、持续学习的工程项目。">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Wrench, title: '工程理解', text: '机师会真实感受到重心、结构强度、舵机角度和操控策略。' },
            { icon: Medal, title: '策略差异', text: '不同武器对应不同打法，每场比赛都需要重新判断进攻节奏。' },
            { icon: Gift, title: '复玩奖励', text: '积分兑换让训练、约战和赛事形成长期成长闭环。' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="hud-panel rounded-3xl p-6">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-steel-cyan/10 text-steel-cyan">
                  <Icon size={26} />
                </div>
                <h3 className="text-2xl font-black text-steel-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
      </Section>
    </PageShell>
  );
}
