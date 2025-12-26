 'use client';
 import Link from 'next/link';
 import Image from 'next/image';
 import { Menu, X } from 'lucide-react';
 import { useState } from 'react';
 
 export default function Navbar() {
   const [open, setOpen] = useState(false);
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
            <span className="text-xl font-bold tracking-wider text-white">WebCraft & Co</span>
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
 
          <div className="hidden md:block">
            <Link href="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent transition-colors">
              Schedule a Call Now
            </Link>
          </div>
          
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/10 text-white hover:text-accent"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {open && (
          <div className="md:hidden bg-card border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5" onClick={() => setOpen(false)}>Home</Link>
              <div>
                <div className="px-3 py-2 text-sm font-medium">Services</div>
                <div className="ml-3 space-y-1">
                  <Link href="/services/brand-design" className="block px-3 py-2 rounded-md text-sm hover:bg-white/5" onClick={() => setOpen(false)}>Brand Design</Link>
                  <Link href="/services/ui-ux-design" className="block px-3 py-2 rounded-md text-sm hover:bg-white/5" onClick={() => setOpen(false)}>UI/UX Design</Link>
                </div>
              </div>
              <Link href="/portfolio" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5" onClick={() => setOpen(false)}>Portfolio</Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5" onClick={() => setOpen(false)}>Contact</Link>
              <Link href="/contact" className="block mt-2 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-accent" onClick={() => setOpen(false)}>
                Schedule a Call Now
              </Link>
            </div>
          </div>
        )}
       </div>
     </nav>
   );
 }
