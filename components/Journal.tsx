import React from 'react';

const Journal: React.FC = () => {
  const logs = [
    { id: "01", title: "OPTIMIZING_UE5_PIPELINES", date: "24.05.24", tag: "TECHNICAL" },
    { id: "02", title: "LUXURY_CGI_AESTHETICS", date: "18.05.24", tag: "INSIGHT" },
    { id: "03", title: "REALTIME_VOLUMETRICS", date: "12.05.24", tag: "STUDIO" }
  ];

  return (
    <section id="journal" className="py-40 px-6 lg:px-16 bg-[#EFEFEF] border-t border-black/5 overflow-hidden">
      <div className="container mx-auto">
        <div className="row g-5">
          <div className="col-12 col-xl-5 mb-16 xl:mb-0">
             <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-[1.2px] bg-red-600"></div>
                <span className="font-bold text-[10px] text-red-600 tracking-[0.4em] uppercase">R&D_LAB_LOGS</span>
             </div>
             <h2 className="text-[9vw] xl:text-[6.5vw] font-bold uppercase leading-[0.9] mb-12 tracking-tighter text-black">
               STUDIO<br />
               <span className="text-outline">JOURNAL.</span>
             </h2>
             <p className="text-xl xl:text-2xl text-black/30 font-bold uppercase leading-tight max-w-sm tracking-tight">
               DOCUMENTING OUR ARCHITECTURAL BREAKTHROUGHS IN REAL-TIME VISUALIZATION.
             </p>
          </div>
          
          <div className="col-12 col-xl-7">
             <div className="flex flex-col">
                {logs.map((log) => (
                  <div key={log.id} className="group relative py-12 border-b border-black/5 flex justify-between items-center cursor-pointer overflow-hidden">
                     <div className="absolute left-0 w-0 h-full bg-white/40 group-hover:w-full transition-all duration-700 ease-out z-0"></div>
                     
                     <div className="relative z-10 flex items-center gap-8 lg:gap-16">
                        <span className="text-[10px] font-bold text-black/15 group-hover:text-red-600 transition-colors">[{log.id}]</span>
                        <h3 className="text-3xl lg:text-4xl font-bold uppercase tracking-tighter group-hover:translate-x-6 transition-transform duration-1000 ease-in-out">{log.title}</h3>
                     </div>

                     <div className="relative z-10 flex flex-col items-end text-right">
                        <span className="font-bold text-[9px] text-black/20 tracking-[0.2em] mb-1">{log.tag}</span>
                        <span className="font-medium text-[9px] tracking-widest">{log.date}</span>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;