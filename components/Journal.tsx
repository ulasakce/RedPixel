
import React from 'react';

const Journal: React.FC = () => {
  const logs = [
    { id: "042", title: "OPTIMIZING_UE5_RENDERS", date: "24.05.24", tag: "TECHNICAL" },
    { id: "041", title: "THE_FUTURE_OF_DYNAMICS", date: "18.05.24", tag: "VFX_LOG" },
    { id: "040", title: "PIXEL_PERFECTION_WORKFLOW", date: "12.05.24", tag: "STUDIO" }
  ];

  return (
    <section className="py-32 px-6 lg:px-16 bg-[#D6D6D6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <div className="font-pixel text-[10px] text-red-600 mb-6 uppercase tracking-widest">Technical_Logs</div>
             <h2 className="text-4xl lg:text-5xl font-pixel uppercase tracking-tighter leading-tight mb-8">
               STUDIO <br /> <span className="text-white drop-shadow-[4px_4px_0px_black]">JOURNAL</span>
             </h2>
             <p className="font-pixel-body text-2xl text-black/50 uppercase font-bold max-w-xs leading-none">
               SHARING DATA FROM OUR R&D LAB AND PRODUCTION PIPELINE.
             </p>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-4">
             {logs.map((log) => (
               <div key={log.id} className="group flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 border-4 border-black bg-white/40 hover:bg-black hover:text-white transition-all cursor-pointer">
                  <div className="flex items-center gap-6">
                     <span className="font-pixel text-[8px] text-red-600 group-hover:text-red-400">LOG_{log.id}</span>
                     <h3 className="font-pixel text-xl lg:text-2xl uppercase tracking-tighter">{log.title}</h3>
                  </div>
                  <div className="flex items-center gap-8 mt-4 lg:mt-0">
                     <span className="font-pixel text-[10px] opacity-30">{log.tag}</span>
                     <span className="font-pixel text-[10px]">{log.date}</span>
                     <div className="w-10 h-10 border-2 border-black group-hover:border-white flex items-center justify-center font-pixel text-xs">
                        ->
                     </div>
                  </div>
               </div>
             ))}
             <button className="mt-8 font-pixel text-[8px] text-black/40 hover:text-black uppercase tracking-widest text-left">
               ACCESS_ALL_ARCHIVES.EXE
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
