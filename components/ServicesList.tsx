import Link from 'next/link';
import { PenTool, Layout, Monitor, Code } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Visually stunning designs that connect with your audience.",
    features: ["User Flows & Wireframing", "Mobile-First Design", "Prototyping"],
    link: "/services/ui-ux-design"
  },
  {
    icon: Layout,
    title: "Brand Design",
    description: "Visual identities that demand attention and build trust.",
    features: ["Logo Design & Systems", "Brand Guidelines", "Marketing Assets"],
    link: "/services/brand-design"
  },
  {
    icon: Monitor,
    title: "Website Development",
    description: "Pixel-perfect websites that are easy to manage and scale.",
    features: ["HTML/CSS", "JavaScript", "React"],
    link: "#"
  },
  {
    icon: Code,
    title: "No-Code Development",
    description: "Powerful apps built faster without traditional coding.",
    features: ["Bubble Development", "Automation", "API Integrations"],
    link: "#"
  }
];

export default function ServicesList() {
  return (
    <section className="py-24 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Services We Offer</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                 <h3 className="text-2xl font-bold">{index + 1}. {service.title}</h3>
                 <service.icon className="w-6 h-6 text-gray-400" />
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        {feature}
                    </li>
                ))}
              </ul>

              <Link href={service.link} className="inline-block text-sm font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
