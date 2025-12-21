import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We struggled with our drop-offs for months. WebCraft & Co redesigned our dashboard with intuitive workflows, and our retention skyrocketed by 40% in 30 days. They don't just 'do design', they solve business problems.",
    author: "Sarah K.",
    role: "CEO at SaaSFlow",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    quote: "Our old branding looked like every other tech startup. WebCraft & Co gave us a bold, edgy, tropical identity that helps us stand out. We've seen triple the leads since launch.",
    author: "David M.",
    role: "Founder at GreenTech",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">What Clients Say About Us</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
           {/* Summary Card */}
           <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center border border-gray-100">
                <div className="text-5xl font-bold mb-2">4.9</div>
                <div className="flex gap-1 mb-4 text-yellow-400">
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                </div>
                <p className="text-gray-500 text-sm">200+ Reviews</p>
                <div className="mt-6 font-bold text-sm">
                    Where Great <br/> Companies Design
                </div>
                <div className="mt-4 font-black text-xl text-gray-400">Clutch</div>
           </div>

           {/* Review Cards */}
           {testimonials.map((testimonial, index) => (
               <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                   <div className="flex gap-1 mb-6 text-yellow-400">
                        <Star className="fill-current w-4 h-4" />
                        <Star className="fill-current w-4 h-4" />
                        <Star className="fill-current w-4 h-4" />
                        <Star className="fill-current w-4 h-4" />
                        <Star className="fill-current w-4 h-4" />
                   </div>
                   <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                       "{testimonial.quote}"
                   </p>
                   <div className="flex items-center gap-4 mt-auto">
                       <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                           <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                       </div>
                       <div>
                           <div className="font-bold text-sm">{testimonial.author}</div>
                           <div className="text-xs text-gray-500">{testimonial.role}</div>
                       </div>
                   </div>
               </div>
           ))}
        </div>
      </div>
    </section>
  );
}
