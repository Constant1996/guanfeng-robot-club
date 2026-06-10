type EventCardProps = {
  title: string;
  status: string;
  category: string;
  image?: string;
  date: string;
  place: string;
  age: string;
  capacity: string;
  audience: string;
  prize: string;
  rules: string[];
  slug?: string;
};

const statusClass: Record<string, string> = {
  报名中: 'bg-steel-green/12 text-steel-green',
  即将开始: 'bg-steel-gold/12 text-steel-gold',
  招募中: 'bg-steel-cyan/12 text-steel-cyan',
};

export function EventCard({ title, status, category, image, date, place, age, capacity, audience, prize, rules, slug }: EventCardProps) {
  return (
    <article className="hud-panel rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-steel-cyan/60">
      <div className="scanline relative mb-5 h-40 overflow-hidden rounded-2xl border border-steel-line bg-steel-black/36">
        {image ? (
          <img src={image} alt={`${title}现场配图`} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.22),transparent_42%),linear-gradient(135deg,rgba(246,183,60,0.16),rgba(5,7,13,0.8))]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-steel-black/78 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-steel-cyan/40 bg-steel-black/62 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-steel-cyan backdrop-blur-md">Live Arena</span>
      </div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass[status] ?? 'bg-white/10 text-steel-muted'}`}>{status}</span>
          <span className="rounded-full bg-white/6 px-3 py-1 text-xs font-bold text-steel-muted">{category}</span>
        </div>
        <span className="text-xs font-bold text-steel-cyan">{capacity}</span>
      </div>
      <h3 className="text-2xl font-black leading-8 text-steel-ink">{title}</h3>
      <p className="mt-3 text-sm font-bold text-steel-gold">{audience}</p>
      <dl className="mt-5 space-y-3 text-sm text-steel-muted">
        <div className="grid gap-1 sm:grid-cols-[52px_1fr]"><dt>时间</dt><dd className="font-bold text-steel-ink sm:text-right">{date}</dd></div>
        <div className="grid gap-1 sm:grid-cols-[52px_1fr]"><dt>地点</dt><dd className="font-bold text-steel-ink sm:text-right">{place}</dd></div>
        <div className="grid gap-1 sm:grid-cols-[52px_1fr]"><dt>年龄</dt><dd className="font-bold text-steel-ink sm:text-right">{age}</dd></div>
        <div><dt className="text-steel-gold">活动奖励</dt><dd className="mt-1 font-bold text-steel-ink">{prize}</dd></div>
      </dl>
      <div className="mt-5 rounded-2xl border border-steel-line bg-steel-black/36 p-4">
        <p className="text-xs font-bold text-steel-cyan">上场规则</p>
        <ul className="mt-2 space-y-1 text-xs leading-5 text-steel-muted">
          {rules.slice(0, 3).map((rule) => <li key={rule}>• {rule}</li>)}
        </ul>
      </div>
      <a href={slug ? `#/events/${slug}` : '#/join'} className="mt-6 inline-flex rounded-full bg-steel-gold px-5 py-3 text-sm font-black text-steel-black shadow-gold">
        查看赛程
      </a>
    </article>
  );
}
