import { rankings } from '../data/site';

const rankTone: Record<number, string> = {
  1: 'border-steel-gold/45 bg-steel-gold/10 shadow-gold',
  2: 'border-slate-300/25 bg-white/5',
  3: 'border-orange-400/35 bg-orange-400/10',
};

export function Leaderboard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-steel-line bg-steel-panel/50 shadow-hud backdrop-blur">
      {rankings.map((row) => (
        <div key={row.rank} className={`grid gap-3 border-b border-steel-line p-5 last:border-b-0 sm:grid-cols-[80px_1fr_1fr_160px] sm:items-center ${rankTone[row.rank] ?? ''}`}>
          <div className="text-3xl font-black text-steel-gold">#{row.rank}</div>
          <div>
            <p className="font-bold text-steel-ink">{row.pilot}</p>
            <p className="text-sm text-steel-muted">{row.level}</p>
          </div>
          <div>
            <p className="font-bold text-steel-cyan">{row.robot}</p>
            <p className="text-sm text-steel-muted">{row.record}</p>
          </div>
          <div>
            <p className="text-xl font-black text-steel-ink">{row.points} pts</p>
            <span className="mt-2 inline-flex rounded-full bg-steel-cyan/10 px-3 py-1 text-xs font-bold text-steel-cyan">{row.streak}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
