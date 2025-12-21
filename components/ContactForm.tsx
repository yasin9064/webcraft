'use client';

export default function ContactForm() {
  return (
    <div className="bg-background text-white pt-32 pb-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16">
               <div>
                   <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                       Let's Build <br/>
                       Something <br/>
                       Awesome!
                   </h1>
                   <p className="text-gray-400 max-w-md leading-relaxed">
                       Got a project that needs pixel-perfect design or bulletproof code? Drop us a line—we reply within 24 hours.
                   </p>
               </div>

               <div className="bg-card p-8 rounded-2xl border border-white/10">
                   <form className="space-y-6">
                       <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                               <label className="text-sm font-bold">Your Name <span className="text-red-500">*</span></label>
                               <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-accent focus:outline-none transition-colors" />
                           </div>
                           <div className="space-y-2">
                               <label className="text-sm font-bold">Your Email <span className="text-red-500">*</span></label>
                               <input type="email" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-accent focus:outline-none transition-colors" />
                           </div>
                       </div>

                       <div className="space-y-2">
                           <label className="text-sm font-bold">Services you are looking for <span className="text-red-500">*</span></label>
                           <select className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-accent focus:outline-none transition-colors appearance-none">
                               <option>Select an option</option>
                               <option>UI/UX Design</option>
                               <option>Brand Design</option>
                               <option>Website Development</option>
                               <option>No-Code Development</option>
                           </select>
                       </div>

                       <div className="space-y-2">
                           <label className="text-sm font-bold">Your Message</label>
                           <textarea rows={4} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-accent focus:outline-none transition-colors"></textarea>
                       </div>

                       <button type="submit" className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-bold hover:opacity-90 transition-opacity w-full md:w-auto">
                           Submit Enquiry
                       </button>
                   </form>
               </div>
           </div>
       </div>
    </div>
  );
}
