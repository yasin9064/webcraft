import HomeHero from '@/components/HomeHero';
import ServicesList from '@/components/ServicesList';
import WorkShowcase from '@/components/WorkShowcase';
import Testimonials from '@/components/Testimonials';
import Journal from '@/components/Journal';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero />
      <ServicesList />
      <WorkShowcase />
      <Testimonials />
      <Journal />
      <CTA />
    </div>
  );
}
