import Link from 'next/link';

export default function HomeHero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block mb-6">
            <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border border-white/10">
                WEB & APP DESIGN AGENCY
            </span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
          Where Stunning Design Meets <br/>
          <span className="text-gray-400">Flawless Functionality</span>
        </h1>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          We craft high-performing websites, apps, and brands for startups, agencies, and businesses that strive for real growth.
        </p>
        
        <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
              Get Started
            </Link>
        </div>

        {/* Hero Image */}
        <div className="mt-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl mx-auto max-w-5xl">
            <div className="aspect-[16/9] relative bg-gray-900">
               <img 
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                    alt="Agency Workspace" 
                    className="w-full h-full object-cover opacity-80"
                />
            </div>
        </div>
      </div>
    </div>
  );
}
