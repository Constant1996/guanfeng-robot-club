import { CommunityPhoto } from '../components/CommunityPhoto';
import { LeadForm } from '../components/LeadForm';
import { PageShell } from '../components/PageShell';
import { Section } from '../components/Section';
import { safetyNotes, visualAssets } from '../data/site';

export function JoinPage() {
  return (
    <PageShell eyebrow="JOIN" title="加入战队" description="留下联系方式，获取入会方式、装备准备和近期可报名活动。">
      <Section eyebrow="SIGN UP" title="提交报名咨询" description="准备装备、选择活动、进入下一场擂台赛。">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="grid gap-5">
            <CommunityPhoto
              src={visualAssets.community.rewardsKit}
              alt="观锋报名装备与奖励展示"
              imageClassName="h-72 object-[50%_center]"
            />
            <CommunityPhoto
              src={visualAssets.community.workshopGuidance}
              alt="观锋入门指导现场"
              imageClassName="h-64 object-[58%_center]"
            />
          </div>
          <LeadForm />
        </div>
      </Section>

      <Section eyebrow="SAFETY" title="上场前确认安全规则" description="竞技感可以很强，但上场规则必须清楚。">
        <div className="grid gap-4 md:grid-cols-3">
          {safetyNotes.map((note) => <div key={note} className="hud-panel rounded-3xl p-5 text-sm leading-7 text-steel-muted">{note}</div>)}
        </div>
      </Section>
    </PageShell>
  );
}
