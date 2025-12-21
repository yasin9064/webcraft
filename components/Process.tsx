import { Check } from 'lucide-react';

const steps = [
  {
    step: "1. Discovery",
    description: "We learn what makes you and your product unique."
  },
  {
    step: "2. Conceptualize",
    description: "Where creativity meets strategy. Color palette exploration."
  },
  {
    step: "3. Build the System",
    description: "Polishing every touchpoint. Mockups & asset templates."
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Our Brand Design Process</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.step}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
