import { Leaderboard } from '../components/Leaderboard';
import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { rankings, visualAssets } from '../data/site';

const podiumImages = visualAssets.rankingRobots;

export function RankingsPage() {
  const topThree = rankings.slice(0, 3);

  return (
    <PageShell eyebrow="RANKINGS" title="赛季榜单" description="积分、连胜和徽章会把每一次上场记录下来。下一次登顶，也许就是你的战车。">
      <Section eyebrow="TOP PILOTS" title="本周前三" description="当前赛季表现最强的机师。">
        <div className="grid gap-5 lg:grid-cols-3">
          {topThree.map((row) => (
            <article key={row.rank} className="hud-panel rounded-3xl p-6 text-center">
              <div className="scanline relative mb-5 h-32 overflow-hidden rounded-2xl border border-steel-line bg-steel-black/36">
                <img src={podiumImages[row.rank - 1]} alt={`${row.robot} 机器人实物照`} className="h-full w-full object-cover object-[50%_58%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-black/72 via-transparent to-transparent" />
              </div>
              <p className="text-5xl font-black text-steel-gold">#{row.rank}</p>
              <h3 className="mt-5 text-2xl font-black text-steel-ink">{row.pilot}</h3>
              <p className="mt-2 font-bold text-steel-cyan">{row.robot}</p>
              <p className="mt-3 text-sm text-steel-muted">{row.record} · {row.streak}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="SEASON BOARD" title="完整战力榜" description="积分赛、主题挑战和连胜纪录都会进入赛季排行。">
        <Leaderboard />
      </Section>

      <Section eyebrow="HOW TO SCORE" title="如何获得积分" description="参加积分赛、完成主题挑战、保持连胜、完成赛后复盘，都能推动你的排名。">
        <a href="#/events" className="gold-cta inline-flex rounded-full px-7 py-4 font-black">参加下一场积分赛</a>
      </Section>
    </PageShell>
  );
}
