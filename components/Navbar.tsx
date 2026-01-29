import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-8 lg:px-20 flex justify-between items-center pointer-events-none ${isScrolled ? 'py-4 bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm' : 'py-10 bg-transparent'}`}>
      
      {/* Precision Logo Recreation */}
      <div 
        className="pointer-events-auto group cursor-pointer flex items-center" 
        onClick={() => scrollTo('home')}
      >
        <div className="relative">
          <div className="bg-[#C02033] pl-6 pr-12 py-3 relative shadow-[4px_4px_0px_rgba(0,0,0,0.1)] group-hover:shadow-none transition-all group-hover:translate-x-1 group-hover:translate-y-1" 
               style={{ clipPath: 'polygon(0% 0%, 88% 0%, 100% 100%, 0% 100%)' }}>
            <div className="flex flex-col items-start">
               <span className="font-pixel text-white text-[16px] leading-none tracking-tight font-bold">REDPIXEL</span>
               <div className="mt-1 flex items-center gap-2">
                <div className="w-1 h-1 bg-white/40 animate-pulse"></div>
                <span className="font-pixel text-white text-[5px] opacity-70 uppercase tracking-[0.2em]">CORE_SYSTEMS</span>
               </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-3 h-[2px] bg-white/30"></div>
        </div>
      </div>

      {/* Center Nav */}
      <div className={`hidden lg:flex items-center gap-12 pointer-events-auto transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-100'}`}>
        {['home', 'about', 'services', 'work', 'contact'].map(link => (
          <button 
            key={link}
            onClick={() => scrollTo(link)}
            className="group relative text-[9px] font-pixel text-black/40 uppercase tracking-widest hover:text-black transition-all font-bold"
          >
            {link}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
          </button>
        ))}
      </div>

      {/* Right Action */}
      <div className="flex items-center gap-6 pointer-events-auto">
        <div className="hidden xl:flex flex-col items-end mr-4">
           <span className="font-pixel text-[5px] text-black/30 uppercase font-bold tracking-widest mb-1">NETWORK_STATUS</span>
           <div className="flex items-center gap-2">
              <span className="font-pixel text-[7px] font-bold">STABLE_V4</span>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
           </div>
        </div>
        <button 
          onClick={() => scrollTo('contact')}
          className="bg-black text-white font-pixel text-[9px] py-4 px-8 border border-black shadow-[6px_6px_0px_#C02033] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase font-bold"
        >
          Project_Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;