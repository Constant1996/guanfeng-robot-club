import { ProductSection } from '../components/ProductSection';
import { PageShell } from '../components/PageShell';

export function RobotPage() {
  return (
    <PageShell eyebrow="ROBOT GARAGE" title="装备车库" description="这不是摆在桌上的模型，而是可以操控、拆装、升级，并进入俱乐部赛事体系的入门战车。">
      <ProductSection />
    </PageShell>
  );
}
