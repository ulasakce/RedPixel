
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E5E5E5] pt-32 pb-10 border-t-8 border-black/5">
      <div className="container">
        <div className="row g-5 mb-24">
           
           <div className="col-12 col-lg-6">
              <div className="flex items-center gap-4 mb-10">
                 <div className="bg-[#C02033] p-3 border-2 border-black shadow-[4px_4px_0px_black]" style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)' }}>
                    <span className="font-pixel text-white text-[10px] uppercase font-bold">REDPIXEL</span>
                 </div>
                 <span className="font-pixel text-[8px] text-black/40 uppercase tracking-[0.4em]">Mainframe_Systems</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold uppercase mb-10 leading-none tracking-tighter text-black">
                BUILDING THE <br /> <span className="text-[#C02033]">FUTURE</span> WITH DATA.
              </h2>
              <div className="mb-8">
                 <div className="flex border-4 border-black max-w-sm bg-white overflow-hidden shadow-[8px_8px_0px_black]">
                    <input type="email" placeholder="ENTER_EMAIL..." className="bg-transparent p-4 font-bold text-lg outline-none flex-grow" />
                    <button className="bg-black text-white px-8 font-pixel text-[8px] hover:bg-[#C02033] transition-all uppercase">Sync</button>
                 </div>
              </div>
              <a href="mailto:redpixelcgi@gmail.com" className="text-2xl font-bold text-black hover:text-[#C02033] transition-all uppercase underline decoration-4 underline-offset-8">
                REDPIXELCGI@GMAIL.COM
              </a>
           </div>

           <div className="col-6 col-lg-3">
              <h4 className="font-pixel text-[10px] text-[#C02033] mb-8 uppercase font-bold tracking-widest">System_Map</h4>
              <ul className="list-unstyled space-y-6 font-bold text-xl uppercase text-black/50">
                 <li><a href="#" className="hover:text-black transition-all">Archive.dat</a></li>
                 <li><a href="#" className="hover:text-black transition-all">Abilities.exe</a></li>
                 <li><a href="#" className="hover:text-black transition-all">Interface.sys</a></li>
              </ul>
           </div>

           <div className="col-6 col-lg-3">
              <h4 className="font-pixel text-[10px] text-[#C02033] mb-8 uppercase font-bold tracking-widest">Connect</h4>
              <ul className="list-unstyled space-y-6 font-bold text-xl uppercase text-black/50">
                 <li><a href="https://instagram.com/redpixelcgi" className="hover:text-black transition-all">Instagram</a></li>
                 <li><a href="#" className="hover:text-black transition-all">Behance</a></li>
                 <li><a href="#" className="hover:text-black transition-all">Vimeo</a></li>
              </ul>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t-2 border-black/5 gap-6">
           <span className="font-pixel text-[7px] text-black/30 uppercase tracking-[0.3em]">
             © 2024 REDPIXEL_STUDIOS — REV_7.2_STABLE
           </span>
           <div className="flex gap-10 font-pixel text-[7px] text-black/30 uppercase tracking-widest">
              <a href="#" className="hover:text-black">Terms_Of_Service</a>
              <a href="#" className="hover:text-black">Privacy_Protocol</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
