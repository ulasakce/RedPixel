import React, { useState, useEffect, useRef } from 'react';

interface IGProject {
  id: string;
  type: 'REEL' | 'POST';
  label: string;
  category: string;
}

const WorkItem: React.FC<{ item: IGProject }> = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.01,
        rootMargin: '400px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="luxury-card aspect-[3/4] relative group bg-black/5">
      {isVisible ? (
        <div className="w-full h-full scale-[1.05] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
           <iframe 
              src={`https://www.instagram.com/p/${item.id}/embed/`}
              className="w-full h-full border-0"
              scrolling="no"
              loading="lazy"
              title={item.label}
           ></iframe>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
           <div className="flex flex-col items-center gap-3">
              <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-[7px] font-bold text-black/10 uppercase tracking-[0.5em]">Buffering_Asset</span>
           </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      <div className="absolute bottom-8 left-8 z-30 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
         <span className="text-[9px] font-bold text-white uppercase tracking-[0.3em] block mb-1.5">{item.label}</span>
         <span className="text-[7px] font-bold text-white/50 uppercase tracking-[0.5em]">{item.category}</span>
      </div>
    </div>
  );
};

const WorkGrid: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const initialProjects: IGProject[] = [
    { id: "DPDXW9uk-EQ", type: 'REEL', label: "PHYS_SIM_v1", category: "PHYSICS" },
    { id: "DOnnkfeEzNo", type: 'REEL', label: "ENV_ARCH_v2", category: "ENVIRONMENT" },
    { id: "DOLBIkCE-qs", type: 'REEL', label: "HW_LOGIC_v3", category: "HARD SURFACE" },
    { id: "DN2a8bKZorH", type: 'REEL', label: "KINETIC_FLOW", category: "MOTION" },
    { id: "DNun08e5nqf", type: 'REEL', label: "NEON_FLUID", category: "VFX" },
    { id: "DGCl_S1zmG8", type: 'REEL', label: "CORE_RENDER", category: "STILLS" }
  ];

  const [igProjects, setIgProjects] = useState<IGProject[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('redpixel_ig_feed');
    setIgProjects(saved ? JSON.parse(saved) : initialProjects);
    if ((window as any).instgrm) (window as any).instgrm.Embeds.process();
  }, []);

  const handleUpload = () => {
    const parts = newUrl.split('/');
    const id = parts.find((p, i, a) => a[i - 1] === 'p' || a[i - 1] === 'reel');
    if (!id) return;
    setIsUploading(true);
    setTimeout(() => {
      const type: 'REEL' | 'POST' = newUrl.includes('/reel/') ? 'REEL' : 'POST';
      const newProject: IGProject = {
        id, type,
        label: `SYNC_UNIT_${Math.floor(Math.random() * 999)}`,
        category: "EXTERNAL_DATA"
      };
      const updatedList = [newProject, ...igProjects];
      setIgProjects(updatedList);
      localStorage.setItem('redpixel_ig_feed', JSON.stringify(updatedList));
      setIsUploading(false);
      setShowAddModal(false);
      setNewUrl('');
      if ((window as any).instgrm) (window as any).instgrm.Embeds.process();
    }, 1500);
  };

  return (
    <section id="work" className="bg-white py-40 px-6 lg:px-16 border-t border-black/5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
           <div>
              <div className="flex items-center gap-3 mb-8 overflow-hidden">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                <span className="text-[9px] font-bold tracking-[0.5em] text-black/30 uppercase">Selected_Archive // v9.0</span>
              </div>
              <h2 className="text-[8vw] lg:text-[6vw] font-bold uppercase tracking-tighter leading-[0.85] text-black">
                SELECTED<br />
                <span className="text-red-600">OUTPUTS.</span>
              </h2>
           </div>
           
           <button 
              onClick={() => setShowAddModal(true)}
              className="px-8 py-4 bg-[#F5F5F5] hover:bg-black hover:text-white transition-all duration-700 text-[9px] font-bold uppercase tracking-widest rounded-full"
           >
              [ + ] Sync_Asset
           </button>
        </div>

        <div className="row g-4">
           {igProjects.map((item, i) => (
             <div key={`${item.id}-${i}`} className="col-12 col-md-6 col-xl-4">
                <WorkItem item={item} />
             </div>
           ))}
        </div>

        {showAddModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-8 bg-white/95 backdrop-blur-3xl">
             <div className="w-full max-w-2xl text-center">
                <button onClick={() => setShowAddModal(false)} className="absolute top-10 right-10 text-4xl font-light hover:rotate-90 transition-transform">✕</button>
                <div className="mb-8 inline-block px-5 py-1.5 border border-black/10 rounded-full">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-40">Datalink_Protocol</span>
                </div>
                <h3 className="text-5xl font-bold tracking-tighter uppercase mb-12">Archive_Sync</h3>
                <input 
                   type="text" 
                   value={newUrl}
                   onChange={(e) => setNewUrl(e.target.value)}
                   placeholder="PASTE_ASSET_URL"
                   className="w-full bg-transparent border-b border-black/10 py-6 text-2xl lg:text-4xl font-bold uppercase text-center focus:border-red-600 outline-none transition-all placeholder:opacity-5"
                />
                <button 
                   onClick={handleUpload}
                   disabled={isUploading}
                   className="mt-12 px-16 py-8 bg-black text-white font-bold uppercase tracking-[0.5em] text-[10px] rounded-full hover:bg-red-600 transition-all shadow-xl"
                >
                   {isUploading ? 'Synchronizing...' : 'Sync to Archive'}
                </button>
             </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGrid;