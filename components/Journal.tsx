import Link from 'next/link';

const articles = [
  {
    title: "How We Boosted Client Conversions 150% With Smarter UI/UX",
    category: "UI/UX Design",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Why Your Logo Colors Are Driving Away Your Ideal Customers",
    category: "Branding",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "WordPress vs Webflow – Our Developer's Settle The Debate",
    category: "Web Development",
    date: "Nov 15, 2024",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
  }
];

export default function Journal() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">The Studio Journal</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="rounded-lg overflow-hidden mb-4 relative aspect-video">
                <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex gap-4 text-xs text-gray-500 mb-2">
                  <span className="font-bold text-black uppercase">{article.category}</span>
                  <span>{article.date}</span>
              </div>
              <h3 className="font-bold text-lg leading-tight group-hover:text-gray-600 transition-colors">
                  {article.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
