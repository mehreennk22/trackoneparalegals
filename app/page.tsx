import { Hero } from '@/components/home/hero';
import { Stats } from '@/components/home/stats';
import { ServicesEditorial } from '@/components/home/services-editorial';
import { SupportFinderWorkflow } from '@/components/home/support-finder-workflow';
import { WhyTrackOneEditorial } from '@/components/home/why-trackone-editorial';
import { ProcessWorkflow } from '@/components/home/process-workflow';
import { FinalCTA } from '@/components/home/final-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesEditorial />
      <SupportFinderWorkflow />
      <WhyTrackOneEditorial />
      <ProcessWorkflow />
      <FinalCTA />
    </>
  );
}
