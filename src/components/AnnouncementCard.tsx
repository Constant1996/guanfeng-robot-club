type AnnouncementCardProps = {
  tag: string;
  title: string;
  date: string;
  summary: string;
  href: string;
};

export function AnnouncementCard({ tag, title, date, summary, href }: AnnouncementCardProps) {
  return (
    <article className="hud-panel rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-steel-cyan/60">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-steel-cyan/10 px-3 py-1 text-xs font-bold text-steel-cyan">{tag}</span>
        <span className="text-xs font-bold text-steel-muted">{date}</span>
      </div>
      <h3 className="mt-5 text-xl font-black leading-8 text-steel-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-steel-muted">{summary}</p>
      <a href={href} className="mt-6 inline-flex text-sm font-black text-steel-gold transition hover:text-steel-cyan">
        查看详情 →
      </a>
    </article>
  );
}
