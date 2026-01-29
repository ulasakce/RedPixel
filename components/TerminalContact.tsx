
import React, { useState } from 'react';

const TerminalContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeLine, setActiveLine] = useState(0);

  return (
    <section id="contact" className="py-32 px-6 lg:px-16 bg-[#D6D6D6]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
           <div className="w-4 h-4 brand-red-bg border-2 border-black"></div>
           <h2 className="text-3xl lg:text-5xl font-pixel uppercase tracking-tighter">INITIATE_CONTACT</h2>
        </div>

        <div className="bg-black text-green-500 font-pixel-body p-8 border-8 border-black shadow-[15px_15px_0px_#C02033] relative overflow-hidden min-h-[450px]">
           {/* Terminal Header */}
           <div className="absolute top-0 left-0 right-0 bg-white/10 h-8 flex items-center px-4 gap-2 border-b-2 border-white/5">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="ml-4 font-pixel text-[6px] text-white/50">REDPIXEL_COMMS_V1.0.exe</span>
           </div>

           <div className="mt-6 space-y-6 text-xl lg:text-2xl font-bold uppercase tracking-wider">
              <div>
                 <p className="text-white/40 mb-2 font-pixel text-[8px]">-- SYSTEM_INPUT_01: ENTER_NAME</p>
                 <div className="flex items-center gap-4">
                    <span className="text-red-500">{'>'}</span>
                    <input 
                       type="text" 
                       placeholder="NAME_HERE..."
                       className="bg-transparent border-none outline-none text-green-400 placeholder:text-green-900 w-full"
                       onFocus={() => setActiveLine(0)}
                    />
                 </div>
              </div>

              <div>
                 <p className="text-white/40 mb-2 font-pixel text-[8px]">-- SYSTEM_INPUT_02: ENTER_EMAIL</p>
                 <div className="flex items-center gap-4">
                    <span className="text-red-500">{'>'}</span>
                    <input 
                       type="email" 
                       placeholder="EMAIL_ADDRESS..."
                       className="bg-transparent border-none outline-none text-green-400 placeholder:text-green-900 w-full"
                       onFocus={() => setActiveLine(1)}
                    />
                 </div>
              </div>

              <div>
                 <p className="text-white/40 mb-2 font-pixel text-[8px]">-- SYSTEM_INPUT_03: TRANSMIT_MESSAGE</p>
                 <div className="flex items-start gap-4">
                    <span className="text-red-500 mt-1">{'>'}</span>
                    <textarea 
                       placeholder="WRITE_YOUR_PROJECT_BRIEF..."
                       rows={4}
                       className="bg-transparent border-none outline-none text-green-400 placeholder:text-green-900 w-full resize-none"
                       onFocus={() => setActiveLine(2)}
                    />
                 </div>
              </div>

              <div className="pt-8">
                 <button className="bg-green-500 text-black px-12 py-4 font-pixel text-[10px] hover:bg-white transition-all shadow-[6px_6px_0px_rgba(255,255,255,0.2)] active:translate-y-1 active:shadow-none uppercase">
                    EXECUTE_TRANSMISSION
                 </button>
              </div>
           </div>

           {/* Terminal Scanline Overlay */}
           <div className="absolute inset-0 pointer-events-none opacity-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 font-pixel text-[8px] opacity-40 uppercase tracking-widest">
           <div className="flex items-center gap-4">
              <span className="text-red-600 font-bold">[!]</span>
              <span>ENCRYPTED_CONNECTION: AES-256</span>
           </div>
           <div className="flex items-center gap-4 justify-end">
              <span>STATUS: LISTENING_FOR_PACKETS</span>
              <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalContact;
