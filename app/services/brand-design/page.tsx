import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function BrandDesignPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Process />
      <Features />
      <FAQ />
      <CTA />
    </div>
  );
}
