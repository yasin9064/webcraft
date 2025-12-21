import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Branding That Demands Attention</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Your brand is more than a logo—it's your story. We build memorable visual identities from the ground up, including logos, color systems, typography, and style guides. Our strategic approach ensures your brand stands out, resonates with your audience, and scales seamlessly as you grow.
        </p>
        
        <div className="rounded-3xl overflow-hidden mb-12 border border-white/5 relative aspect-[16/9]">
            <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                alt="Branding Showcase" 
                className="w-full h-full object-cover"
            />
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-accent h-5 w-5" />
            <span className="font-medium">Fixed Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-accent h-5 w-5" />
            <span className="font-medium">2-Week Shipment</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-accent h-5 w-5" />
            <span className="font-medium">Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
