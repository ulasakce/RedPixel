import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-white relative">
      <div className="container px-6 lg:px-16">
        <div className="row justify-content-center">
           <div className="col-12 col-xl-10">
              <div className="flex items-center gap-4 mb-12">
                 <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                 <span className="text-[9px] font-bold tracking-[0.5em] text-black/30 uppercase">Initiate_Dialogue</span>
              </div>
              
              <div className="row g-5">
                 <div className="col-12 col-lg-5">
                    <h2 className="text-5xl lg:text-[5vw] font-bold uppercase tracking-tighter leading-[0.9] mb-12">
                       Let's Build <br /><span className="text-outline">The Future.</span>
                    </h2>
                    <p className="text-xl text-black/40 font-bold uppercase leading-snug max-w-xs">
                       Available for global creative deployments and high-end visualization.
                    </p>
                 </div>
                 
                 <div className="col-12 col-lg-7">
                    <div className="space-y-10">
                       <div className="row g-4">
                          <div className="col-md-6 border-b border-black/10 pb-4 focus-within:border-black transition-all">
                             <label className="text-[9px] font-bold text-black/20 uppercase tracking-widest mb-2 block">Full_Name</label>
                             <input type="text" className="w-full bg-transparent border-none outline-none text-xl font-bold uppercase placeholder:text-black/5" placeholder="John_Doe" />
                          </div>
                          <div className="col-md-6 border-b border-black/10 pb-4 focus-within:border-black transition-all">
                             <label className="text-[9px] font-bold text-black/20 uppercase tracking-widest mb-2 block">Email_Address</label>
                             <input type="email" className="w-full bg-transparent border-none outline-none text-xl font-bold uppercase placeholder:text-black/5" placeholder="Sync@Domain.com" />
                          </div>
                       </div>
                       <div className="border-b border-black/10 pb-4 focus-within:border-black transition-all">
                          <label className="text-[9px] font-bold text-black/20 uppercase tracking-widest mb-2 block">Project_Brief</label>
                          <textarea className="w-full bg-transparent border-none outline-none text-xl font-bold uppercase placeholder:text-black/5 min-h-[120px] resize-none" placeholder="Describe_Your_Vision"></textarea>
                       </div>
                       
                       <button className="group relative w-full py-10 bg-black text-white font-bold uppercase tracking-[0.5em] text-[10px] rounded-full overflow-hidden transition-all hover:bg-red-600 shadow-lg">
                          <span className="relative z-10">Transmit_Inquiry</span>
                          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;