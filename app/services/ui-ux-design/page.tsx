import { CheckCircle2, Check } from 'lucide-react';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function UIUXPage() {
  return (
    <div className="flex flex-col min-h-screen">
       {/* Hero Section */}
       <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
                  UI/UX Design
                </h1>
                <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                  We craft user experiences that drive action, not just admiration. Whether it's a conversion-focused SaaS dashboard or a mobile app that users can't put down, our process blends behavioral psychology with pixel-perfect execution.
                </p>
                <button className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                  Get a Free Audit
                </button>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                 <div className="aspect-video bg-gray-800 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" 
                        alt="UI/UX Design Workspace" 
                        className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
              </div>
            </div>
          </div>
       </section>

       {/* Design That Works Section */}
       <section className="py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Design That Works as Hard as You Do</h2>
            <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            We craft user-centric interfaces that blend aesthetics with functionality. Turning complex workflows into intuitive experiences. Through wireframing, prototyping, and usability testing, we design digital products that reduce friction, boost engagement, and drive conversions—whether it's a SaaS dashboard, mobile app, or e-commerce platform.
            </p>
            
            <div className="rounded-3xl overflow-hidden mb-12 border border-gray-100 relative aspect-[16/9]">
                <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                    alt="UI/UX Showcase" 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-black">
            <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent h-5 w-5 fill-black text-white" />
                <span className="font-medium">Fixed Pricing</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent h-5 w-5 fill-black text-white" />
                <span className="font-medium">2-Week Shipment</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent h-5 w-5 fill-black text-white" />
                <span className="font-medium">Money Back Guarantee</span>
            </div>
            </div>
        </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50 text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-16">Our UI/UX Design Process</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                {[
                    { step: "1. Discover & Define", desc: "We start by learning your business - its ambitions & challenges." },
                    { step: "2. Ideate & Prototype", desc: "Transforming insights into tangible designs - Accelerate your growth." },
                    { step: "3. Refine & Validate", desc: "Perfecting every pixel with real user feedback & user surveys." }
                ].map((item, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.step}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </section>

        {/* Superpowers Section */}
        <section className="py-20 bg-white text-black border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop" 
                        alt="Design Superpowers" 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <div>
                    <h2 className="text-3xl font-bold mb-12">Our UI/UX Design<br/> Superpowers</h2>
                    
                    <div className="space-y-10">
                    <div>
                        <h3 className="text-lg font-bold mb-2">Psychology-Driven Design</h3>
                        <p className="text-gray-600 leading-relaxed">
                        We apply proven principles from behavioral science to create designs that guide user behavior, reduce friction, and drive better outcomes.
                        </p>
                    </div>
                    
                    <div className="w-full h-px bg-gray-200"></div>

                    <div>
                        <h3 className="text-lg font-bold mb-2">Real-User Testing</h3>
                        <p className="text-gray-600 leading-relaxed">
                        We validate every prototype with 5-10 real users from target audience, uncovering actionable insights before a single line of code is written.
                        </p>
                    </div>

                    <div className="w-full h-px bg-gray-200"></div>

                    <div>
                        <h3 className="text-lg font-bold mb-2">Dev-Ready Handoffs</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Developers receive clean, pixel-perfect Figma files complete with auto-generated specs, assets, and documentation.
                        </p>
                    </div>
                    
                    <div className="w-full h-px bg-gray-200"></div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <FAQ />
        <CTA />
    </div>
  );
}
