import Link from 'next/link';

const portfolioItems = [
  {
    title: "Branding",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-1"
  },
  {
    title: "No-code Development",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-1"
  },
  {
    title: "UX Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-1"
  }
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-background pt-32 pb-20 text-center">
         <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">Crafted Works, Bold Results</h1>
         <p className="text-gray-400">Showcasing creative projects that deliver impact and inspire growth.</p>
      </div>

      <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4 text-black">Explore Our Creative Work and <br/> Success Stories</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                      Browse through a curated selection of our finest projects across industries. Each design showcases our commitment to innovation, strategy, and excellence.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {portfolioItems.map((item, index) => (
                      <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-6">
                              <h3 className="text-white font-bold text-lg">{item.title}</h3>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
      
      {/* Reusing CTA from Brand Design for consistency */}
      <div className="bg-background py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-8 border-2 border-white/20">
            <img 
                    src="/images/profile.png" 
                    alt="Lead Designer" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Meet the Minds Behind the Magic</h2>
            <p className="text-gray-400 mb-10">
            Get a free 30-minute strategy session with our lead designer.
            </p>
            
            <Link href="/contact" className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity mb-12">
            Book a Free Call
            </Link>
            
            <div>
            <p className="text-sm text-gray-500 mb-2">Prefer Email?</p>
            <a href="mailto:paradox8269@gmail.com" className="font-bold text-white border-b border-white hover:text-accent hover:border-accent transition-colors">
                paradox8269@gmail.com
            </a>
            </div>
        </div>
      </div>
    </div>
  );
}
