import { useState } from 'react';

type WeaponCardProps = {
  name: string;
  type: string;
  points: number;
  tag: string;
  image?: string;
  description: string;
};

const weaponShapes: Record<string, string> = {
  破阵推铲: 'polygon(8% 68%, 92% 68%, 78% 36%, 22% 36%)',
  翻斗臂: 'polygon(18% 70%, 72% 70%, 86% 42%, 64% 28%, 46% 52%, 18% 52%)',
  重装护甲: 'polygon(14% 32%, 86% 32%, 92% 72%, 8% 72%)',
  尖锋冲角: 'polygon(50% 26%, 94% 74%, 6% 74%)',
  冠军限定外壳: 'polygon(18% 34%, 82% 34%, 94% 56%, 70% 76%, 30% 76%, 6% 56%)',
};

export function WeaponCard({ name, type, points, tag, image, description }: WeaponCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(image) && !imageFailed;

  return (
    <article className="hud-panel rounded-3xl p-5 transition hover:-translate-y-1 hover:border-steel-gold/70">
      <div className="weapon-surface mb-5 grid h-40 place-items-center overflow-hidden rounded-2xl border border-steel-line">
        {showImage ? (
          <img src={image} alt={`${name}渲染图`} className="h-full w-full object-cover" onError={() => setImageFailed(true)} />
        ) : (
          <div className="relative h-24 w-32">
            <div className="absolute inset-x-4 bottom-3 h-8 rounded-full bg-black/50 blur-md" />
            <div
              className="absolute inset-0 border border-steel-cyan/45 bg-gradient-to-br from-steel-blue/70 via-slate-300/25 to-steel-gold/55 shadow-glow"
              style={{ clipPath: weaponShapes[name] ?? weaponShapes['重装护甲'] }}
            />
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel-gold shadow-gold" />
          </div>
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold text-steel-cyan">{type}</p>
          <h3 className="mt-1 text-2xl font-black text-steel-ink">{name}</h3>
        </div>
        <span className="rounded-full bg-steel-gold/15 px-3 py-1 text-xs font-bold text-steel-gold">{tag}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-steel-muted">{description}</p>
      <p className="mt-5 text-sm font-bold text-steel-ink"><span className="text-steel-gold">{points}</span> 积分兑换</p>
    </article>
  );
}
