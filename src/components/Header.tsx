import { navItems } from '../data/site';

const mobileItems = navItems.filter((item) => item.mobileLabel);

function isActive(href: string) {
  const hash = window.location.hash || '#/';
  return href === '#/' ? hash === '#/' || hash === '#' : hash.startsWith(href);
}

export function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-steel-line bg-steel-black/72 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-steel-cyan font-black text-steel-black shadow-glow">观</span>
            <span>
              <span className="block text-sm font-black tracking-[0.18em] text-steel-ink">观锋俱乐部</span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-steel-gold">GUANFENG ARENA</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-bold text-steel-muted lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition hover:text-steel-cyan ${isActive(item.href) ? 'text-steel-cyan' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a href="#/join" className="gold-cta rounded-full px-4 py-2 text-sm font-black transition hover:scale-[1.02] sm:px-5">
            立即加入
          </a>
        </nav>
      </header>
      <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-5 rounded-3xl border border-steel-line bg-steel-black/86 p-2 text-center text-[11px] font-bold text-steel-muted shadow-hard backdrop-blur-xl lg:hidden">
        {mobileItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`rounded-2xl px-2 py-3 transition hover:bg-steel-cyan/10 hover:text-steel-cyan ${isActive(item.href) ? 'bg-steel-cyan/10 text-steel-cyan' : ''}`}
          >
            {item.mobileLabel}
          </a>
        ))}
      </nav>
    </>
  );
}
