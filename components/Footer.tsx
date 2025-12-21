import { Rocket, Instagram, Facebook, Linkedin, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="h-6 w-6 text-black" />
              <span className="text-xl font-bold tracking-wider">WebCraft & Co</span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              We craft high-performance digital experiences that drive real business results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <X className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Brand Design</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-black transition-colors">No-Code Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Get the Latest Inspiration</h4>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email *" 
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-black transition-colors"
              />
              <button className="w-full bg-black text-white py-3 rounded-md text-sm font-bold hover:bg-gray-800 transition-colors">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
          Copyright © 2025 Agency All rights reserved
        </div>
      </div>
    </footer>
  );
}
