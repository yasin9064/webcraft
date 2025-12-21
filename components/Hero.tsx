import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-gray-800/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Brand Design
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Your brand is more than a logo — it's your competitive edge. We develop comprehensive visual identities including logo systems, typography, hierarchies, and design languages that communicate your unique value.
            </p>
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
              Let's Rebrand
            </button>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
             {/* Placeholder for Hero Image */}
             <div className="aspect-video bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span className="text-sm">Hero Image Placeholder</span>
                </div>
                 {/* Simulate the image content with CSS shapes/colors if needed, but a placeholder is safer */}
                <img 
                    src="https://images.unsplash.com/photo-1558655146-d09347e0d7a8?q=80&w=2070&auto=format&fit=crop" 
                    alt="Brand Design Workspace" 
                    className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
