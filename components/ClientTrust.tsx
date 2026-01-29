import React from 'react';

const ClientTrust: React.FC = () => {
  const clients = ["GLOBAL_MEDIA", "TECH_CORE", "VFX_HUB", "NEO_DESIGN", "PIXEL_LOGIC", "CYBER_MEDIA"];

  return (
    <section className="bg-white py-16 border-y border-black/5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-32 px-16">
            {clients.map((client) => (
              <div key={client} className="flex items-center gap-6 group cursor-crosshair">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-[11px] font-bold text-black/20 group-hover:text-black transition-colors tracking-[0.5em]">
                  {client}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientTrust;