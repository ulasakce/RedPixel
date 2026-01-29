
import React, { useState, useEffect } from 'react';

// ==========================================
// 🚀 PROJE VERİ GİRİŞ ALANI (BURAYI DÜZENLE)
// ==========================================
// Resimler için: public/ klasörüne resim atıp "/resim-adi.jpg" yazabilir 
// veya doğrudan Instagram/Bulut linki verebilirsin.
const MY_PROJECTS_DATA = [
  {
    title: "PROJECT_01_NAME",
    category: "CGI_ANIMATION",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200", // Buraya kendi resim linkini koy
    tag: '#MyProject',
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "---", engine: "UNREAL_5", renderTime: "---", status: "STABLE" }
  },
  {
    title: "PROJECT_02_NAME",
    category: "VFX_SIMULATION",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    tag: '#MyProject',
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "---", engine: "HOUDINI", renderTime: "---", status: "STABLE" }
  },
  {
    title: "PROJECT_03_NAME",
    category: "PRODUCT_VISUAL",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200",
    tag: '#MyProject',
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "---", engine: "OCTANE", renderTime: "---", status: "STABLE" }
  },
  // Yeni projeleri buraya aynı formatta ekleyebilirsin...
];

const WorkGrid: React.FC = () => {
  const [isSyncing, setIsSyncing] = useState(true);
  const [selected, setSelected] = useState<typeof MY_PROJECTS_DATA[0] | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSyncing(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="work" className="bg-[#FFFFFF] py-40 border-t-8 border-black/5 relative min-h-[800px]">
      <div className="container">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
           <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 ${isSyncing ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`}></div>
                <span className="font-pixel text-[9px] text-black/40 tracking-[0.4em] font-bold uppercase">
                  {isSyncing ? 'ACCESSING_LOCAL_ARCHIVE...' : 'PORTFOLIO_LOADED_SUCCESSFULLY'}
                </span>
              </div>
              <h2 className="text-6xl lg:text-8xl font-bold uppercase tracking-tighter leading-none text-black">
                Featured <br />
                <span className="text-[#C02033]">Portfolio.</span>
              </h2>
           </div>
        </div>

        {isSyncing ? (
          <div className="py-40 flex flex-col items-center justify-center gap-12">
             <div className="w-24 h-24 border-8 border-black border-t-[#C02033] rounded-none animate-spin"></div>
             <p className="font-pixel text-[12px] text-black/40 uppercase tracking-[0.6em] animate-pulse">Initializing_Assets...</p>
          </div>
        ) : (
          <div className="row g-5 lg:g-6">
             {MY_PROJECTS_DATA.map((item, i) => (
               <div key={i} className="col-12 col-md-6 col-lg-4">
                  <div 
                    onClick={() => setSelected(item)}
                    className="group relative cursor-pointer overflow-hidden tech-card rounded-2xl p-4 bg-white"
                  >
                     <div className="aspect-square overflow-hidden bg-[#E5E5E5] border-4 border-black rounded-xl relative">
                        <img 
                          src={item.image} 
                          className="w-full h-full object-cover transition-all duration-[1s] group-hover:scale-105" 
                          alt={item.title} 
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                           <span className="font-pixel text-[8px] text-white mb-4 tracking-widest uppercase">View_Details</span>
                        </div>
                     </div>

                     <div className="pt-8 px-2">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-2xl font-bold uppercase tracking-tighter text-black group-hover:text-[#C02033] transition-colors leading-none">{item.title}</h3>
                          <span className="font-pixel text-[8px] text-[#C02033] font-bold">{item.tag}</span>
                        </div>
                        <p className="font-pixel text-[6px] text-black/30 uppercase tracking-widest">{item.category}</p>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        )}

        <div className="mt-40 p-20 border-8 border-dashed border-black/5 rounded-[3rem] text-center">
           <a 
             href="https://instagram.com/redpixelcgi" 
             target="_blank" 
             className="inline-block bg-[#C02033] text-white font-pixel text-[12px] py-8 px-20 border-4 border-black hover:bg-black transition-all shadow-[15px_15px_0px_rgba(0,0,0,0.1)] uppercase font-bold"
           >
             Follow_RedPixel_on_IG
           </a>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 lg:p-20">
           <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" onClick={() => setSelected(null)}></div>
           
           <div className="relative w-full max-w-6xl bg-[#FFFFFF] border-8 border-black shadow-[40px_40px_0px_rgba(0,0,0,0.2)] flex flex-col lg:flex-row overflow-hidden max-h-[90vh]">
              <div className="w-full lg:w-1/2 h-[40vh] lg:h-auto relative bg-black border-r-8 border-black">
                 <img src={selected.image} className="w-full h-full object-cover" alt="Detail" />
              </div>

              <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col">
                 <div className="flex justify-between items-start mb-12">
                    <div>
                       <span className="font-pixel text-[9px] text-[#C02033] mb-4 block uppercase font-bold tracking-[0.4em]">PROJECT_ANALYSIS // {selected.tag}</span>
                       <h2 className="text-5xl font-bold uppercase leading-none text-black tracking-tighter">{selected.title}</h2>
                    </div>
                    <button onClick={() => setSelected(null)} className="text-black/20 hover:text-[#C02033] transition-all font-pixel text-[14px]">[X]</button>
                 </div>
                 <div className="pt-16 mt-auto border-t-4 border-black/5">
                    <a 
                       href={selected.igLink}
                       target="_blank"
                       className="w-full bg-black text-white font-bold text-xl py-6 text-center border-4 border-black shadow-[10px_10px_0px_#C02033] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase block"
                    >
                       View_On_Instagram
                    </a>
                 </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

export default WorkGrid;
