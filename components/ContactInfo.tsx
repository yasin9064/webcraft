import { Instagram, Facebook, Youtube, X } from 'lucide-react';
import { MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Where to Find Us</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
             <h3 className="font-bold text-lg mb-4">Studio HQ</h3>
             <p className="text-gray-600 text-sm leading-relaxed">
                 Kishanganj, Bihar, India, 855107 (By appointment only)
             </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
             <h3 className="font-bold text-lg mb-4">Remote Teams</h3>
             <p className="text-gray-600 text-sm leading-relaxed">
                 We work with clients in 12+ timezones (EST to GMT+5:30).
             </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
             <h3 className="font-bold text-lg mb-4">Follow us</h3>
             <div className="flex justify-center gap-4">
                 <a href="#" className="hover:text-gray-600"><Instagram className="w-5 h-5" /></a>
                 <a href="#" className="hover:text-gray-600"><Facebook className="w-5 h-5" /></a>
                 <a href="#" className="hover:text-gray-600"><Youtube className="w-5 h-5" /></a>
                 <a href="#" className="hover:text-gray-600"><X className="w-5 h-5" /></a>
             </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-gray-200 h-[400px] relative bg-gray-100">
            {/* Map Placeholder */}
            <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Map Location" 
                className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
                     <MapPin className="text-accent fill-current w-5 h-5" />
                     <span className="font-bold">Washington</span>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
}
