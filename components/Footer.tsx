import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-black/5">
      <div className="container px-6 lg:px-16">
        <div className="row g-10 mb-24">
           <div className="col-12 col-lg-7">
              <div className="flex items-center gap-3 mb-10">
                 <div className="w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_8px_rgba(192,32,51,0.5)]"></div>
                 <span className="text-[9px] font-bold text-black/30 uppercase tracking-[0.5em]">Global_Network_Active</span>
              </div>
              <h2 className="text-5xl lg:text-[5vw] font-bold uppercase mb-10 leading-[0.95] tracking-tighter text-black">
                CRAFTING THE <br /> <span className="text-red-600">IMPOSSIBLE.</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                 <a href="mailto:redpixelcgi@gmail.com" className="text-2xl lg:text-3xl font-bold text-black hover:text-red-600 transition-all uppercase tracking-tighter border-b border-black hover:border-red-600 pb-1.5">
                   REDPIXELCGI@GMAIL.COM
                 </a>
              </div>
           </div>

           <div className="col-12 col-lg-5 flex flex-col justify-end lg:items-end text-left lg:text-right">
              <div className="row g-4 lg:g-10 w-full justify-content-lg-end">
                 <div className="col-6 col-lg-auto">
                    <h4 className="text-[9px] font-bold text-red-600 mb-6 uppercase tracking-widest">Navigation</h4>
                    <ul className="list-unstyled space-y-3 font-bold text-lg uppercase text-black/30">
                       <li><a href="#about" className="hover:text-black transition-all">About</a></li>
                       <li><a href="#work" className="hover:text-black transition-all">Work</a></li>
                       <li><a href="#services" className="hover:text-black transition-all">Studio</a></li>
                    </ul>
                 </div>
                 <div className="col-6 col-lg-auto lg:ml-12">
                    <h4 className="text-[9px] font-bold text-red-600 mb-6 uppercase tracking-widest">Connect</h4>
                    <ul className="list-unstyled space-y-3 font-bold text-lg uppercase text-black/30">
                       <li><a href="https://instagram.com/redpixelcgi" className="hover:text-black transition-all">Instagram</a></li>
                       <li><a href="#" className="hover:text-black transition-all">Behance</a></li>
                       <li><a href="#" className="hover:text-black transition-all">Vimeo</a></li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-6">
           <span className="text-[9px] font-bold text-black/20 uppercase tracking-[0.4em]">
             © 2024 REDPIXEL_STUDIOS // SYNCED
           </span>
           <div className="flex gap-10 text-[9px] font-bold text-black/20 uppercase tracking-widest">
              <a href="#" className="hover:text-black">Terms</a>
              <a href="#" className="hover:text-black">Privacy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;