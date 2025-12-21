'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How many revisions are included",
    answer: "All projects include 2 rounds of revisions at key milestones. Need more? Additional revisions are billed at $150/hour (we'll always get your approval first)."
  },
  {
    question: "What are your charges?",
    answer: "Our pricing varies based on the scope of the project. We offer fixed pricing for defined scopes and hourly rates for ongoing support. Contact us for a detailed quote."
  },
  {
    question: "What is your MVP process?",
    answer: "We focus on the core value proposition, rapid prototyping, and user testing to get your product to market quickly while maintaining high quality standards."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50 text-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          Your Guide to Common<br />Questions & Solutions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-gray-400" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
