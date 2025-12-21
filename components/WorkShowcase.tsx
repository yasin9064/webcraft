import Link from 'next/link';

const projects = [
  {
    title: "FinTech Startup - Growth Mode",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Growify - Social Engagement",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "LawLex - Webflow Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Queame - No-Code MVP for EdTech",
    category: "SaaS Product",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function WorkShowcase() {
  return (
    <section className="py-24 bg-background text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Showcase of Selected Work</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 relative aspect-[4/3]">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <div className="flex gap-2">
                <span className="text-xs font-medium px-3 py-1 bg-white/10 rounded-full text-gray-300">
                    {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
            <Link href="/portfolio" className="inline-block border border-white/20 px-8 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all">
                View All Case Studies
            </Link>
        </div>
      </div>
    </section>
  );
}
