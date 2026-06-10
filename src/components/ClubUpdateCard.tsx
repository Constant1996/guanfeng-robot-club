import { visualAssets } from '../data/site';

type ClubUpdateCardProps = {
  title: string;
  meta: string;
  summary: string;
};

function pickClubImage(title: string) {
  if (title.includes('冠军')) return visualAssets.community.rewardsKit;
  if (title.includes('兑换') || title.includes('护甲')) return visualAssets.community.battleKits;
  if (title.includes('体验') || title.includes('试战')) return visualAssets.community.matchTraining;
  return visualAssets.community.trainingGuidance;
}

export function ClubUpdateCard({ title, meta, summary }: ClubUpdateCardProps) {
  return (
    <article className="hud-panel rounded-3xl p-6">
      <div className="scanline relative mb-5 h-36 overflow-hidden rounded-2xl border border-steel-line bg-steel-black/36">
        <img src={pickClubImage(title)} alt={`${title}配图`} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-black/72 via-transparent to-transparent" />
      </div>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-steel-gold">{meta}</p>
      <h3 className="mt-4 text-xl font-black leading-8 text-steel-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-steel-muted">{summary}</p>
    </article>
  );
}
