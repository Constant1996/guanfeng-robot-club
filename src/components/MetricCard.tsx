type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <article className="hud-panel rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-steel-cyan/60">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-steel-cyan">{label}</p>
      <h3 className="mt-4 text-2xl font-black text-steel-ink">{value}</h3>
      <p className="mt-3 text-sm leading-6 text-steel-muted">{detail}</p>
    </article>
  );
}
