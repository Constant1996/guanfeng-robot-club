import { FormEvent, useState } from 'react';

const fieldClass = 'rounded-2xl border border-steel-line bg-steel-black/50 px-4 py-3 text-steel-ink outline-none transition placeholder:text-steel-muted/55 focus:border-steel-cyan focus:ring-4 focus:ring-steel-cyan/10';

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="hud-panel rounded-3xl p-8 text-center">
        <p className="text-3xl font-black text-steel-cyan">申请已收到</p>
        <p className="mt-4 text-steel-muted">观锋俱乐部会尽快联系你，说明近期活动、装备准备和入会流程。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="hud-panel grid gap-4 rounded-3xl p-6 sm:grid-cols-2">
      <div className="rounded-2xl border border-steel-gold/25 bg-steel-gold/10 p-4 text-sm leading-6 text-steel-muted sm:col-span-2">
        <p className="font-bold text-steel-gold">报名咨询说明</p>
        <p className="mt-1">提交不代表付款。信息仅用于购买咨询、入会沟通和赛事通知，手机号与未成年人信息不会在前台公开展示。</p>
      </div>

      <label className="grid gap-2 text-sm font-bold text-steel-ink">
        联系人姓名
        <input required name="parentName" autoComplete="name" className={fieldClass} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-steel-ink">
        手机号
        <input required name="phone" type="tel" inputMode="tel" pattern="^1[3-9]\\d{9}$" placeholder="请输入 11 位手机号" className={fieldClass} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-steel-ink">
        参赛者年龄
        <input required name="pilotAge" type="number" min="5" max="18" inputMode="numeric" placeholder="推荐 7-14 岁" className={fieldClass} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-steel-ink">
        所在城市
        <input required name="city" autoComplete="address-level2" className={fieldClass} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-steel-ink sm:col-span-2">
        装备状态
        <select name="gear" className={fieldClass}>
          <option>还没有战车，想先了解装备</option>
          <option>已经有机器人，想加入战队</option>
          <option>机构/学校想批量合作</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-steel-ink sm:col-span-2">
        感兴趣内容
        <select name="interest" className={fieldClass}>
          <option>购买装备 + 加入战队</option>
          <option>报名下一场比赛</option>
          <option>机构/课程合作</option>
          <option>武器升级与兑换</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-steel-ink sm:col-span-2">
        备注
        <textarea name="note" rows={4} maxLength={300} className={fieldClass} />
      </label>
      <label className="flex items-start gap-3 text-sm leading-6 text-steel-muted sm:col-span-2">
        <input required type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-1 h-4 w-4 accent-steel-cyan" />
        <span>我同意观锋俱乐部为购买咨询、赛事报名和入会沟通使用以上信息，并理解这些信息不会在公开页面展示。</span>
      </label>
      <button disabled={!consent} className="gold-cta rounded-full px-7 py-4 font-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-45 sm:col-span-2">
        提交报名咨询
      </button>
    </form>
  );
}
