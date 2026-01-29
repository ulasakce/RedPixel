import React from 'react';

const Journal: React.FC = () => {
  const logs = [
    { id: "042", title: "OPTIMIZING_UE5_RENDERS", date: "24.05.24", tag: "TECHNICAL" },
    { id: "041", title: "THE_FUTURE_OF_DYNAMICS", date: "18.05.24", tag: "VFX_LOG" },
    { id: "040", title: "PIXEL_PERFECTION_WORKFLOW", date: "12.05.24", tag: "STUDIO" }
  ];

  return (
    <section className="py-48 px-6 lg:px-20 bg-[#EFEFEF] border-t border-black/5">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-red-600"></div>
                <span className="font-pixel text-[8px] text-red-600 uppercase tracking-[0.4em] font-bold">R&D_LAB_LOGS</span>
             </div>
             <h2 className="text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12 text-black">
               STUDIO <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px #000' }}>JOURNAL.</span>
             </h2>
             <p className="text-2xl text-black/40 uppercase font-bold max-w-sm leading-tight tracking-tight">
               DOCUMENTING OUR ARCHITECTURAL BREAKTHROUGHS IN REAL-TIME VISUALIZATION AND CINEMATIC PIPELINES.
             </p>
          </div>
          
          <div className="lg:col-span-7 flex flex-col">
             {logs.map((log) => (
               <div key={log.id} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-black/10 hover:px-8 transition-all duration-500 cursor-pointer">
                  <div className="flex items-center gap-10">
                     <span className="font-pixel text-[9px] text-black/20 group-hover:text-red-600 transition-colors">[{log.id}]</span>
                     <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">{log.title}</h3>
                  </div>
                  <div className="flex items-center gap-12 mt-6 md:mt-0">
                     <div className="flex flex-col items-end">
                        <span className="font-pixel text-[7px] text-black/30 mb-1 uppercase tracking-widest">{log.tag}</span>
                        <span className="font-pixel text-[7px] font-bold">{log.date}</span>
                     </div>
                     <div className="w-14 h-14 border border-black/10 group-hover:bg-black group-hover:text-white transition-all duration-500 flex items-center justify-center font-pixel text-xs">
                        {"->"}
                     </div>
                  </div>
               </div>
             ))}
             <div className="mt-16 flex justify-between items-center">
                <button className="font-pixel text-[8px] text-black/30 hover:text-red-600 transition-all uppercase tracking-[0.3em] font-bold">
                  ACCESS_ALL_ARCHIVES.EXE
                </button>
                <div className="flex gap-2">
                   <div className="w-2 h-2 bg-black/5"></div>
                   <div className="w-2 h-2 bg-black/10"></div>
                   <div className="w-2 h-2 bg-black/20"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;