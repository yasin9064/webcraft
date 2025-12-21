import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-32 bg-background relative overflow-hidden text-center">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-800/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-8 border-2 border-white/20">
           <img 
                src="/images/profile.png" 
                alt="Lead Designer" 
                className="w-full h-full object-cover"
            />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet the Minds Behind the Magic</h2>
        <p className="text-gray-400 mb-10">
          Get a free 30-minute strategy session with our lead designer.
        </p>
        
        <Link href="#" className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity mb-12">
          Book a Free Call
        </Link>
        
        <div>
          <p className="text-sm text-gray-500 mb-2">Prefer Email?</p>
          <a href="mailto:paradox8269@gmail.com" className="font-bold border-b border-white hover:text-accent hover:border-accent transition-colors">
            paradox8269@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
