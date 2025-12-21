export default function ClientLogos() {
    const clients = [
      { name: "Bento", opacity: "opacity-50" },
      { name: "Zerod", opacity: "opacity-50" },
      { name: "MINTY", opacity: "opacity-50" },
      { name: "abillion", opacity: "opacity-50" },
      { name: "Limabuz", opacity: "opacity-50" },
      { name: "Pirantz", opacity: "opacity-50" },
    ];
  
    return (
      <section className="py-10 bg-background border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 grayscale">
            {/* Using text placeholders for logos as I don't have the SVGs */}
            {clients.map((client, index) => (
                <div key={index} className={`text-2xl font-bold text-white ${client.opacity} hover:opacity-100 transition-opacity cursor-default`}>
                    {client.name}
                </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
