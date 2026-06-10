import { productSpecs, productVersions, safetyNotes, sellingPoints, visualAssets } from '../data/site';
import { MetricCard } from './MetricCard';
import { Section } from './Section';

export function ProductSection() {
  return (
    <Section eyebrow="ROBOT GARAGE" title="你的第一台擂台战车" description="观锋机器人是进入俱乐部赛事的入门装备：可操控、可拆装、可升级，也能在安全规则下参加真实对战。">
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hud-panel scanline rounded-[2rem] p-4">
          <div className="grid gap-4">
            <img src={visualAssets.heroRobot} alt="观锋机器人装备" className="hero-robot-glow w-full rounded-[1.5rem] object-cover" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="scanline overflow-hidden rounded-2xl border border-steel-line bg-steel-black/36">
                <img src={visualAssets.robotChassis} alt="观锋机器人底盘细节" className="h-36 w-full object-cover object-[50%_center]" />
              </div>
              <div className="scanline overflow-hidden rounded-2xl border border-steel-line bg-steel-black/36">
                <img src={visualAssets.community.garageParts} alt="观锋机器人遥控器与配件" className="h-36 w-full object-cover object-[50%_center]" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {sellingPoints.map((point) => (
            <article key={point.label} className="hud-panel rounded-3xl p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-steel-cyan">{point.label}</p>
              <h3 className="mt-3 text-xl font-black text-steel-ink">{point.value}</h3>
              <p className="mt-3 text-sm leading-6 text-steel-muted">{point.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
        <div className="hud-panel rounded-3xl p-6">
          <div className="scanline mb-5 overflow-hidden rounded-2xl border border-steel-line bg-steel-black/36">
            <img src={visualAssets.community.battleKits} alt="观锋武器模块与配件包" className="h-44 w-full object-cover object-[50%_center]" />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-steel-gold">Battle Kits</p>
          <div className="mt-5 grid gap-4">
            {productVersions.map((version) => (
              <article key={version.name} className="rounded-2xl border border-steel-line bg-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-black text-steel-ink">{version.name}</h3>
                  <span className="rounded-full bg-steel-gold/12 px-3 py-1 text-xs font-bold text-steel-gold">{version.price}</span>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-steel-muted sm:grid-cols-2">
                  {version.features.map((feature) => <li key={feature}>• {feature}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="hud-panel rounded-3xl p-6">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-steel-cyan">Arena Rules</p>
          <h3 className="mt-4 text-3xl font-black text-steel-ink">安全上场，按规则开战</h3>
          <p className="mt-4 leading-8 text-steel-muted">每场对战都在指定擂台进行。上场前检查电池、武器和外壳结构，禁止危险改装件，听从裁判指引。</p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-steel-muted">
            {safetyNotes.map((note) => <li key={note} className="rounded-2xl border border-steel-line bg-steel-black/36 p-3">{note}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {productSpecs.map((spec) => <MetricCard key={spec.label} {...spec} />)}
      </div>
    </Section>
  );
}
