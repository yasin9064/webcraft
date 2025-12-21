export default function Features() {
  return (
    <section className="py-20 bg-white text-black border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Brand Strategy" 
                className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-12">Brand Design Differentiators</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-bold mb-2">Strategic Storytelling</h3>
                <p className="text-gray-600 leading-relaxed">
                  We go beyond surface-level visuals to uncover and shape your brand's unique narrative—turning your story into a strategic asset.
                </p>
              </div>
              
              <div className="w-full h-px bg-gray-200"></div>

              <div>
                <h3 className="text-lg font-bold mb-2">System Thinking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every brand asset we create is built to scale—consistent, adaptable, and ready to perform across all channels.
                </p>
              </div>

              <div className="w-full h-px bg-gray-200"></div>

              <div>
                <h3 className="text-lg font-bold mb-2">Culture Coding</h3>
                <p className="text-gray-600 leading-relaxed">
                  We translate your company's values, beliefs, and personality into a distinct visual identity. The result? A brand that feels authentic from the inside out.
                </p>
              </div>
              
              <div className="w-full h-px bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
