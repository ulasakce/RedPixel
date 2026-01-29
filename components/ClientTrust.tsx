
import React from 'react';

const ClientTrust: React.FC = () => {
  const clients = ["GLOBAL_MEDIA", "TECH_CORE", "VFX_HUB", "NEO_DESIGN", "PIXEL_LOGIC", "CYBER_MEDIA"];

  return (
    <section className="bg-[#D6D6D6] py-12 border-y-4 border-black/10 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-20 px-10">
            {clients.map((client) => (
              <div key={client} className="flex items-center gap-4 group cursor-crosshair">
                <div className="w-2 h-2 bg-red-600"></div>
                <span className="font-pixel text-[12px] text-black/30 group-hover:text-black transition-colors">
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
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientTrust;
