
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-8 lg:px-20 flex justify-between items-center pointer-events-none ${isScrolled ? 'py-4 bg-white/90 backdrop-blur-xl border-b-2 border-black/10 shadow-sm' : 'py-10 bg-transparent'}`}>
      
      {/* Precision Logo Recreation: Red Trapezoid Block */}
      <div 
        className="pointer-events-auto group cursor-pointer flex items-center" 
        onClick={() => scrollTo('home')}
      >
        <div className="relative">
          {/* The Trapezoid Base */}
          <div className="bg-[#C02033] pl-4 pr-10 py-2 relative border-b-4 border-black/20" 
               style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)' }}>
            <div className="flex flex-col items-start">
               <span className="font-pixel text-white text-[14px] leading-none tracking-tight">REDPIXEL</span>
               {/* Subtitle Bar */}
               <div className="mt-1 bg-white/10 px-1 py-0.5">
                <span className="font-pixel text-white text-[4px] opacity-90 uppercase tracking-[0.1em]">CGI / VFX</span>
               </div>
            </div>
          </div>
          {/* Little notch detail from image */}
          <div className="absolute top-0 left-0 w-2 h-1 bg-white/20"></div>
        </div>
      </div>

      {/* Center Nav */}
      <div className={`hidden lg:flex items-center gap-10 pointer-events-auto bg-black/5 backdrop-blur-md px-10 py-3 rounded-full border border-black/5 transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
        {['home', 'about', 'services', 'work', 'contact'].map(link => (
          <button 
            key={link}
            onClick={() => scrollTo(link)}
            className="text-[8px] font-pixel text-black/50 uppercase tracking-widest hover:text-red-600 transition-all font-bold"
          >
            {link}
          </button>
        ))}
      </div>

      {/* Right Action */}
      <div className="flex items-center gap-4 pointer-events-auto">
        <button 
          onClick={() => scrollTo('contact')}
          className="bg-black text-white font-pixel text-[8px] py-4 px-8 border-2 border-black shadow-[6px_6px_0px_#C02033] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase font-bold"
        >
          Project_Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
