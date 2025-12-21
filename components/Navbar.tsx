import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/Logo.png" 
              alt="Web Rocket Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <span className="text-xl font-bold tracking-wider text-white">WEB ROCKET</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">Home</Link>
              <div className="group relative">
                <button className="text-sm font-medium hover:text-accent transition-colors">Services</button>
                <div className="absolute top-full left-0 w-48 bg-card border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                        <Link href="/services/brand-design" className="block px-4 py-2 text-sm hover:bg-white/5 hover:text-accent">Brand Design</Link>
                        <Link href="/services/ui-ux-design" className="block px-4 py-2 text-sm hover:bg-white/5 hover:text-accent">UI/UX Design</Link>
                    </div>
                </div>
              </div>
              <Link href="/portfolio" className="text-sm font-medium hover:text-accent transition-colors">Portfolio</Link>
              <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <Link href="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent transition-colors">
              Schedule a Call Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
