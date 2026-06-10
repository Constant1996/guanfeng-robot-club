# SteelSoul 格斗机器人社群网站设计与原型 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一个可演示的「钢魂格斗机器人俱乐部」高质感网站原型，突出金属质感机器人、俱乐部社群、赛事约战、武器成长与购买入会转化。

**Architecture:** 当前目录没有前端工程，先建立一个轻量 Vite + React + TypeScript + Tailwind 的静态可演示原型。页面数据用本地 TypeScript 配置文件驱动，图片资产预留在 `public/assets/robots/`，表单首版用前端状态模拟提交成功，后续再接入 Supabase 或表格系统。

**Tech Stack:** Vite, React, TypeScript, Tailwind CSS, CSS variables, local static data, responsive CSS, optional Playwright/manual browser verification.

---

## File Structure

- Create: `package.json` — npm scripts and dependencies.
- Create: `index.html` — Vite root HTML.
- Create: `vite.config.ts` — Vite React config.
- Create: `tsconfig.json` — TypeScript config.
- Create: `postcss.config.js` — Tailwind PostCSS config.
- Create: `tailwind.config.ts` — Tailwind theme tokens for SteelSoul visual system.
- Create: `src/main.tsx` — React entry.
- Create: `src/App.tsx` — page composition and routing-by-section prototype.
- Create: `src/styles.css` — global styles, metal grid, glow, responsive rules.
- Create: `src/data/site.ts` — all events, weapons, rankings, flow steps, product specs.
- Create: `src/components/Header.tsx` — sticky desktop/mobile navigation.
- Create: `src/components/Hero.tsx` — cinematic homepage hero with robot render and CTA.
- Create: `src/components/Section.tsx` — reusable section heading wrapper.
- Create: `src/components/MetricCard.tsx` — product/spec/benefit cards.
- Create: `src/components/EventCard.tsx` — event card component.
- Create: `src/components/WeaponCard.tsx` — weapon card component.
- Create: `src/components/Leaderboard.tsx` — ranking table/card component.
- Create: `src/components/LeadForm.tsx` — purchase/join/event form simulation.
- Create: `src/components/Footer.tsx` — CTA footer.
- Create: `public/assets/robots/README.md` — render asset usage map and image naming rules.
- Create: `docs/design/render-asset-prompts.md` — 12 realistic metallic robot render prompts for 莎莎/Seedream.
- Modify: `建站SPEC.md` only if later design decisions must be reflected back into the spec.

---

## Task 1: Create Frontend Project Skeleton

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.js`
- Create: `tailwind.config.ts`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles.css`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "steelsoul-robot-community-site",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "tsc && vite build",
    "preview": "vite preview --host 0.0.0.0"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "typescript": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "latest",
    "postcss": "latest",
    "autoprefixer": "latest",
    "lucide-react": "latest"
  },
  "devDependencies": {}
}
```

- [ ] **Step 2: Create `index.html`**

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="钢魂格斗机器人俱乐部：3D打印格斗机器人、社群约战、赛事积分与武器升级。" />
    <title>钢魂格斗机器人俱乐部 SteelSoul Robotics Club</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Create TypeScript and Vite configs**

`vite.config.ts`:

```ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
});
```

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": []
}
```

- [ ] **Step 4: Create Tailwind configs**

`postcss.config.js`:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

`tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          black: '#050912',
          navy: '#07111F',
          panel: '#0C1726',
          line: '#1D344A',
          blue: '#00AEEF',
          cyan: '#3DF6FF',
          gold: '#D6A23A',
          orange: '#FF8A00',
          red: '#E74C3C',
          green: '#2ECC71',
        },
      },
      boxShadow: {
        glow: '0 0 36px rgba(0,174,239,0.28)',
        gold: '0 0 28px rgba(214,162,58,0.22)',
      },
      fontFamily: {
        display: ['"Arial Black"', '"Microsoft YaHei"', 'sans-serif'],
        body: ['"Microsoft YaHei"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
```

- [ ] **Step 5: Create initial React entry**

`src/main.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

`src/App.tsx`:

```tsx
export default function App() {
  return <main className="min-h-screen bg-steel-black text-white">SteelSoul Robotics Club</main>;
}
```

`src/styles.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
  background: #050912;
}

body {
  margin: 0;
  font-family: "Microsoft YaHei", sans-serif;
  background: #050912;
}
```

- [ ] **Step 6: Install dependencies**

Run: `npm install`

Expected: dependencies install successfully and `package-lock.json` is created.

- [ ] **Step 7: Build smoke test**

Run: `npm run build`

Expected: TypeScript and Vite build succeed, `dist/` is created.

---

## Task 2: Build Data Model and Content Config

**Files:**
- Create: `src/data/site.ts`

- [ ] **Step 1: Create site data file**

```ts
export const navItems = [
  { label: '首页', href: '#home' },
  { label: '格斗机器人', href: '#robot' },
  { label: '俱乐部', href: '#club' },
  { label: '赛事中心', href: '#events' },
  { label: '约战广场', href: '#challenges' },
  { label: '武器工坊', href: '#weapons' },
  { label: '排行榜', href: '#rankings' },
  { label: '加入我们', href: '#join' },
];

export const productSpecs = [
  { label: '驱动系统', value: '双 TT 马达', detail: '稳定轮式驱动，适合推铲和冲撞' },
  { label: '武器执行', value: 'MG996 舵机', detail: '支持翻斗臂、推铲等前置武器结构' },
  { label: '无线通信', value: 'ESP-NOW', detail: 'ESP8266 遥控板与接收板低延迟通信' },
  { label: '机身结构', value: '3D 打印外壳', detail: '可更换外壳、武器和装甲件' },
];

export const experienceSteps = [
  '购买机器人',
  '加入钢魂俱乐部',
  '创建机器人档案',
  '发布或响应约战',
  '参加周末擂台赛',
  '获得积分与徽章',
  '兑换限定武器',
  '升级后继续挑战',
];

export const events = [
  {
    title: '钢魂城市擂台赛 · 第一季',
    status: '报名中',
    date: '本周六 14:00',
    place: '钢魂训练场 A 区',
    age: '7-14 岁',
    capacity: '18/24',
    prize: '冠军限定金属推铲 + 钢魂徽章',
  },
  {
    title: '新手机师挑战赛',
    status: '即将开始',
    date: '下周日 10:30',
    place: '创客教室 2F',
    age: '7-12 岁',
    capacity: '10/16',
    prize: '新手机师认证 + 50 积分',
  },
  {
    title: '武器限定挑战：翻斗臂',
    status: '招募中',
    date: '6 月赛季',
    place: '俱乐部擂台',
    age: '9-14 岁',
    capacity: '8/12',
    prize: '冠军限定外壳兑换资格',
  },
];

export const weapons = [
  { name: '破阵推铲', type: '冲撞/推出', points: 180, tag: '新手推荐', description: '低角度金属质感推铲，适合抢占底盘优势。' },
  { name: '翻斗臂', type: '翻转', points: 260, tag: '战术武器', description: '利用舵机前臂顶起对手，需要精准时机。' },
  { name: '重装护甲', type: '防御', points: 220, tag: '抗冲撞', description: '增强正面对抗能力，适合稳健型机师。' },
  { name: '尖锋冲角', type: '突击', points: 300, tag: '高速突击', description: '强化前端攻击角度，适合主动进攻。' },
  { name: '冠军限定外壳', type: '荣誉外观', points: 600, tag: '赛季限定', description: '赛事冠军和高积分会员可兑换。' },
];

export const rankings = [
  { rank: 1, pilot: '蓝焰机师', robot: 'Azure Fang', level: 'Lv.5 擂台冠军', points: 1860, record: '21胜 / 4负' },
  { rank: 2, pilot: '钢甲小队长', robot: 'Iron Cub', level: 'Lv.4 战术改装师', points: 1320, record: '16胜 / 6负' },
  { rank: 3, pilot: '闪电推铲', robot: 'Volt Ram', level: 'Lv.4 战术改装师', points: 1180, record: '14胜 / 5负' },
  { rank: 4, pilot: '红角挑战者', robot: 'Red Horn', level: 'Lv.3 钢魂驾驶员', points: 760, record: '9胜 / 7负' },
];

export const challenges = [
  { title: '周五放学后 1v1 推铲训练', robot: 'Iron Cub', level: 'Lv.2-Lv.4', time: '周五 17:30', place: '俱乐部小擂台', status: '招募中' },
  { title: '新手机师友谊战', robot: 'Blue Rookie', level: 'Lv.1-Lv.2', time: '周六 10:00', place: '创客教室', status: '已匹配' },
  { title: '翻斗臂专项挑战', robot: 'Flip Blade', level: 'Lv.3+', time: '周日 15:00', place: '钢魂训练场 A 区', status: '招募中' },
];
```

- [ ] **Step 2: Run type check through build**

Run: `npm run build`

Expected: PASS.

---

## Task 3: Implement Visual System and Layout Components

**Files:**
- Create: `src/components/Section.tsx`
- Create: `src/components/MetricCard.tsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Create reusable section wrapper**

`src/components/Section.tsx`:

```tsx
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-steel-gold">{eyebrow}</p>
        <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
```

- [ ] **Step 2: Create metric card**

`src/components/MetricCard.tsx`:

```tsx
type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <article className="group rounded-3xl border border-steel-line bg-white/[0.045] p-6 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-steel-cyan/70">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-steel-cyan">{label}</p>
      <h3 className="mt-4 font-display text-2xl font-black text-white">{value}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{detail}</p>
    </article>
  );
}
```

- [ ] **Step 3: Expand global CSS**

Append to `src/styles.css`:

```css
html {
  scroll-behavior: smooth;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 18% 12%, rgba(0, 174, 239, 0.18), transparent 32rem),
    radial-gradient(circle at 78% 22%, rgba(214, 162, 58, 0.16), transparent 30rem),
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: auto, auto, 42px 42px, 42px 42px;
  mask-image: linear-gradient(to bottom, black, rgba(0,0,0,0.86), transparent 92%);
}

.metal-panel {
  background:
    linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.025)),
    linear-gradient(90deg, rgba(0,174,239,0.08), rgba(214,162,58,0.06));
  border: 1px solid rgba(61, 246, 255, 0.18);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 24px 70px rgba(0,0,0,0.36);
}

.scanline {
  position: relative;
  overflow: hidden;
}

.scanline::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 0%, rgba(61,246,255,0.14) 48%, transparent 58%);
  transform: translateX(-120%);
  animation: scan 5.8s ease-in-out infinite;
}

@keyframes scan {
  0%, 62% { transform: translateX(-120%); }
  100% { transform: translateX(120%); }
}
```

- [ ] **Step 4: Build check**

Run: `npm run build`

Expected: PASS.

---

## Task 4: Implement Header and Hero

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create header**

`src/components/Header.tsx`:

```tsx
import { navItems } from '../data/site';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-steel-black/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-steel-blue font-black text-steel-black shadow-glow">S</span>
          <span>
            <span className="block font-display text-sm font-black tracking-[0.22em] text-white">STEELSOUL</span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-steel-gold">Robotics Club</span>
          </span>
        </a>
        <div className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-steel-cyan">
              {item.label}
            </a>
          ))}
        </div>
        <a href="#join" className="rounded-full bg-steel-blue px-5 py-2 text-sm font-bold text-steel-black shadow-glow transition hover:bg-steel-cyan">
          加入俱乐部
        </a>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Copy current product image into public asset path**

Run: `mkdir -p public/assets/robots && cp 格斗机器人产品图.png public/assets/robots/hero-current-product.png`

Expected: `public/assets/robots/hero-current-product.png` exists.

- [ ] **Step 3: Create hero**

`src/components/Hero.tsx`:

```tsx
import { productSpecs } from '../data/site';
import { MetricCard } from './MetricCard';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-steel-gold/40 bg-steel-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-steel-gold">
            SteelSoul Robotics Club
          </p>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            加入钢魂<br />开启第一场<br /><span className="text-steel-cyan">机器人擂台战</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-300">
            3D 打印机身、双马达驱动、舵机武器系统、ESP-NOW 遥控通信。购买的不只是一台机器人，而是一整套约战、改装、赛事和奖励体验。
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#join" className="rounded-full bg-steel-blue px-7 py-4 text-center font-black text-steel-black shadow-glow transition hover:bg-steel-cyan">立即加入俱乐部</a>
            <a href="#events" className="rounded-full border border-white/20 px-7 py-4 text-center font-bold text-white transition hover:border-steel-gold hover:text-steel-gold">查看下一场比赛</a>
          </div>
        </div>
        <div className="scanline metal-panel relative rounded-[2rem] p-4">
          <img src="/assets/robots/hero-current-product.png" alt="钢魂格斗机器人产品图" className="relative z-10 w-full rounded-[1.5rem] object-cover shadow-2xl" />
          <div className="absolute -bottom-5 left-8 right-8 z-20 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {productSpecs.map((spec) => (
              <div key={spec.label} className="rounded-2xl border border-white/10 bg-steel-black/88 p-3 backdrop-blur">
                <p className="text-[10px] text-steel-gold">{spec.label}</p>
                <p className="mt-1 text-xs font-black text-white">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-4 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        {productSpecs.map((spec) => <MetricCard key={spec.label} {...spec} />)}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Wire App**

`src/App.tsx`:

```tsx
import { Header } from './components/Header';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <main className="min-h-screen bg-steel-black text-white">
      <Header />
      <Hero />
    </main>
  );
}
```

- [ ] **Step 5: Build check**

Run: `npm run build`

Expected: PASS.

---

## Task 5: Implement Content Sections

**Files:**
- Create: `src/components/EventCard.tsx`
- Create: `src/components/WeaponCard.tsx`
- Create: `src/components/Leaderboard.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create event card**

`src/components/EventCard.tsx`:

```tsx
type EventCardProps = {
  title: string;
  status: string;
  date: string;
  place: string;
  age: string;
  capacity: string;
  prize: string;
};

export function EventCard({ title, status, date, place, age, capacity, prize }: EventCardProps) {
  return (
    <article className="metal-panel rounded-3xl p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-steel-green/15 px-3 py-1 text-xs font-bold text-steel-green">{status}</span>
        <span className="text-xs text-slate-400">{capacity}</span>
      </div>
      <h3 className="font-display text-2xl font-black text-white">{title}</h3>
      <dl className="mt-5 space-y-3 text-sm text-slate-300">
        <div className="flex justify-between gap-5"><dt>时间</dt><dd className="text-white">{date}</dd></div>
        <div className="flex justify-between gap-5"><dt>地点</dt><dd className="text-white">{place}</dd></div>
        <div className="flex justify-between gap-5"><dt>年龄</dt><dd className="text-white">{age}</dd></div>
        <div><dt className="text-steel-gold">冠军奖励</dt><dd className="mt-1 text-white">{prize}</dd></div>
      </dl>
      <a href="#join" className="mt-6 inline-flex rounded-full bg-steel-gold px-5 py-3 text-sm font-black text-steel-black">报名参赛</a>
    </article>
  );
}
```

- [ ] **Step 2: Create weapon card**

`src/components/WeaponCard.tsx`:

```tsx
type WeaponCardProps = {
  name: string;
  type: string;
  points: number;
  tag: string;
  description: string;
};

export function WeaponCard({ name, type, points, tag, description }: WeaponCardProps) {
  return (
    <article className="rounded-3xl border border-steel-line bg-steel-panel/70 p-5 transition hover:-translate-y-1 hover:border-steel-gold/70">
      <div className="mb-5 h-40 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgba(0,174,239,.28),transparent_55%),linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.02))]" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold text-steel-cyan">{type}</p>
          <h3 className="mt-1 font-display text-2xl font-black text-white">{name}</h3>
        </div>
        <span className="rounded-full bg-steel-gold/15 px-3 py-1 text-xs font-bold text-steel-gold">{tag}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
      <p className="mt-5 text-sm font-bold text-white"><span className="text-steel-gold">{points}</span> 积分兑换</p>
    </article>
  );
}
```

- [ ] **Step 3: Create leaderboard**

`src/components/Leaderboard.tsx`:

```tsx
import { rankings } from '../data/site';

export function Leaderboard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-steel-line bg-white/[0.045]">
      {rankings.map((row) => (
        <div key={row.rank} className="grid gap-3 border-b border-white/10 p-5 last:border-b-0 sm:grid-cols-[80px_1fr_1fr_140px] sm:items-center">
          <div className="font-display text-3xl font-black text-steel-gold">#{row.rank}</div>
          <div>
            <p className="font-bold text-white">{row.pilot}</p>
            <p className="text-sm text-slate-400">{row.level}</p>
          </div>
          <div>
            <p className="font-bold text-steel-cyan">{row.robot}</p>
            <p className="text-sm text-slate-400">{row.record}</p>
          </div>
          <div className="text-xl font-black text-white">{row.points} pts</div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Compose page sections**

Replace `src/App.tsx` with:

```tsx
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { EventCard } from './components/EventCard';
import { WeaponCard } from './components/WeaponCard';
import { Leaderboard } from './components/Leaderboard';
import { events, experienceSteps, weapons, challenges } from './data/site';

export default function App() {
  return (
    <main className="min-h-screen bg-steel-black text-white">
      <Header />
      <Hero />

      <Section id="club" eyebrow="Club System" title="买到的不只是一台机器人" description="钢魂俱乐部把产品、赛事、约战、积分和武器升级连成一套长期体验。">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experienceSteps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-steel-line bg-white/[0.045] p-5">
              <p className="font-display text-4xl font-black text-steel-blue">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-5 text-lg font-bold text-white">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="events" eyebrow="Arena Events" title="定期擂台赛，让社群持续沸腾" description="首版重点展示报名中赛事、奖品和安全规则，让家长相信活动真实有组织。">
        <div className="grid gap-5 lg:grid-cols-3">
          {events.map((event) => <EventCard key={event.title} {...event} />)}
        </div>
      </Section>

      <Section id="challenges" eyebrow="Challenge Plaza" title="约战广场：找到下一位对手" description="MVP 先支持约战展示和报名，结果由管理员线下确认后录入。">
        <div className="grid gap-4 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <article key={challenge.title} className="rounded-3xl border border-steel-line bg-steel-panel/70 p-6">
              <span className="rounded-full bg-steel-blue/15 px-3 py-1 text-xs font-bold text-steel-cyan">{challenge.status}</span>
              <h3 className="mt-5 font-display text-2xl font-black text-white">{challenge.title}</h3>
              <p className="mt-4 text-sm text-slate-300">机器人：{challenge.robot}</p>
              <p className="mt-2 text-sm text-slate-300">等级：{challenge.level}</p>
              <p className="mt-2 text-sm text-slate-300">时间：{challenge.time}</p>
              <p className="mt-2 text-sm text-slate-300">地点：{challenge.place}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="weapons" eyebrow="Weapon Lab" title="武器工坊：把配件变成成长系统" description="每个武器都是战术选择、积分目标和复玩理由。">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {weapons.map((weapon) => <WeaponCard key={weapon.name} {...weapon} />)}
        </div>
      </Section>

      <Section id="rankings" eyebrow="Leaderboard" title="排行榜制造荣誉感" description="孩子需要一个看得见的目标：积分、胜场、徽章和赛季冠军。">
        <Leaderboard />
      </Section>
    </main>
  );
}
```

- [ ] **Step 5: Build check**

Run: `npm run build`

Expected: PASS.

---

## Task 6: Implement Conversion Form and Footer

**Files:**
- Create: `src/components/LeadForm.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create lead form**

`src/components/LeadForm.tsx`:

```tsx
import { FormEvent, useState } from 'react';

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="metal-panel rounded-3xl p-8 text-center">
        <p className="font-display text-3xl font-black text-steel-cyan">申请已收到</p>
        <p className="mt-4 text-slate-300">钢魂俱乐部工作人员会尽快联系你。准备好你的机器人，我们擂台见！</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="metal-panel grid gap-4 rounded-3xl p-6 sm:grid-cols-2">
      {[
        ['家长姓名', 'parentName'],
        ['手机号', 'phone'],
        ['孩子年龄', 'childAge'],
        ['所在城市', 'city'],
      ].map(([label, name]) => (
        <label key={name} className="grid gap-2 text-sm font-bold text-slate-200">
          {label}
          <input required name={name} className="rounded-2xl border border-white/10 bg-steel-black/70 px-4 py-3 text-white outline-none transition focus:border-steel-cyan" />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-bold text-slate-200 sm:col-span-2">
        感兴趣内容
        <select name="interest" className="rounded-2xl border border-white/10 bg-steel-black/70 px-4 py-3 text-white outline-none transition focus:border-steel-cyan">
          <option>购买产品 + 加入俱乐部</option>
          <option>报名下一场比赛</option>
          <option>机构/课程合作</option>
          <option>武器升级与兑换</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-slate-200 sm:col-span-2">
        备注
        <textarea name="note" rows={4} className="rounded-2xl border border-white/10 bg-steel-black/70 px-4 py-3 text-white outline-none transition focus:border-steel-cyan" />
      </label>
      <button className="rounded-full bg-steel-blue px-7 py-4 font-black text-steel-black shadow-glow transition hover:bg-steel-cyan sm:col-span-2">
        提交加入申请
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Create footer**

`src/components/Footer.tsx`:

```tsx
export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 text-center text-sm text-slate-400 sm:px-8 lg:px-10">
      <p className="font-display text-xl font-black tracking-[0.22em] text-white">STEELSOUL ROBOTICS CLUB</p>
      <p className="mt-3">让孩子亲手制造、亲自操控、真正上场战斗。</p>
      <p className="mt-6">© 2026 钢魂格斗机器人俱乐部</p>
    </footer>
  );
}
```

- [ ] **Step 3: Add join section to App**

Before closing `</main>` in `src/App.tsx`, add:

```tsx
      <Section id="join" eyebrow="Join SteelSoul" title="准备好进入钢魂擂台了吗？" description="提交咨询后，我们会协助你完成购买、入会、赛事报名或机构合作沟通。">
        <LeadForm />
      </Section>
      <Footer />
```

Also add imports:

```tsx
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
```

- [ ] **Step 4: Build check**

Run: `npm run build`

Expected: PASS.

---

## Task 7: Prepare Render Asset Package

**Files:**
- Create: `public/assets/robots/README.md`
- Create: `docs/design/render-asset-prompts.md`

- [ ] **Step 1: Create asset naming README**

`public/assets/robots/README.md`:

```md
# Robot Render Assets

Use this folder for SteelSoul robot render images.

Recommended filenames:

- `hero-metal-arena.png` — 首页首屏主视觉，16:10，机器人 3/4 角度，深色擂台背景。
- `product-blue-gold-front.png` — 产品详情页，正面低角度，蓝金机身。
- `product-exploded-view.png` — 产品结构展示，半拆解布局。
- `weapon-push-shovel.png` — 破阵推铲武器卡。
- `weapon-flip-arm.png` — 翻斗臂武器卡。
- `weapon-heavy-armor.png` — 重装护甲武器卡。
- `event-arena-battle.png` — 赛事中心背景，两台机器人对峙。
- `club-trophy-shot.png` — 俱乐部荣誉视觉，机器人 + 奖杯 + 徽章。

All images should preserve the recognizable low chassis, two rear wheels, front weapon zone, blue/gold metal identity, and 3D-printed mechanical structure.
```

- [ ] **Step 2: Create render prompt doc with 12 prompts**

`docs/design/render-asset-prompts.md` must include the exact 12 prompt set from the final design handoff. Each prompt must contain:

```md
只修改目标区域，其他保持100%不变。基于原始格斗机器人产品结构生成真实产品摄影级渲染图，保留低矮底盘、双后轮、前置武器区、顶部舵机/结构件识别度；强化金属蓝与香槟金材质，真实金属反射，精密螺丝，细腻边缘倒角，影棚灯光，深色机械背景，高端科创俱乐部质感。
```

Then add scene-specific additions for hero, product detail, weapon cards, arena, club trophy, exploded view, mobile poster, and social banner.

- [ ] **Step 3: Link prompts from `建站SPEC.md` only if requested**

No automatic modification to `建站SPEC.md` is required. If the user asks to keep all documentation in one file, append a short reference section.

---

## Task 8: Manual Verification

**Files:**
- No code files created unless fixing verification failures.

- [ ] **Step 1: Build verification**

Run: `npm run build`

Expected: PASS with no TypeScript errors.

- [ ] **Step 2: Start local server**

Run: `npm run dev`

Expected: Vite prints a local URL such as `http://localhost:5173/`.

- [ ] **Step 3: PC visual check**

Open the local URL at desktop width. Verify:

- Header is readable and sticky.
- Hero clearly communicates “钢魂格斗机器人俱乐部”.
- Product image is clear and not distorted.
- CTA buttons are visible above the fold.
- Events, challenges, weapons, ranking, join form all appear.
- Design feels metallic, refined, competitive, not cheap toy-like.

- [ ] **Step 4: Mobile visual check**

Resize to 390×844. Verify:

- No horizontal scroll.
- Hero title does not clip.
- Product image remains visible.
- Cards stack cleanly.
- Form fields are usable.
- Header CTA does not overlap logo.

- [ ] **Step 5: Form behavior check**

Fill required fields and submit.

Expected: success state appears with text `申请已收到`.

- [ ] **Step 6: Fix any failed checks and rebuild**

Run: `npm run build`

Expected: PASS.

---

## Scope Notes

This plan intentionally does not include online payment, real authentication, live database writes, instant messaging, admin dashboard, automated tournament bracket, or actual image generation API calls. Those are Phase 2+ after the visual prototype and first sales/club validation are accepted.

## Self-Review

- Spec coverage: The plan covers homepage, product positioning, club flow, events, challenges, weapons, rankings, conversion form, responsive visual system, and render asset package.
- Placeholder scan: No `TBD`, `TODO`, or vague implementation-only instructions remain.
- Type consistency: Data keys used in components match `src/data/site.ts` definitions.
- Known gap: Real Seedream image generation is not included because the current available tools do not expose an image-generation endpoint. The plan creates prompts and asset slots so generated images can be dropped in immediately.
