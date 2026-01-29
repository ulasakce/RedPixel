import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const RedAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Neural connection stable. I am Red_AI. How can I facilitate your vision today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are RED_AI, the sophisticated neural assistant of RedPixel Studio. You are elegant, minimal, and speak like a high-end concierge. Avoid robotic or pixel slang. Use terms like 'Synthesizing', 'Visual Pipeline', and 'High-Fidelity'.",
        },
      });
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "Signal interrupted." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Re-establishing neural link..." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[200]">
      {/* Neural Sphere Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-24 h-24 rounded-full glass-panel flex items-center justify-center shadow-2xl transition-all duration-700 group ${isOpen ? 'rotate-90 scale-75' : 'hover:scale-110'}`}
      >
        <div className={`w-4 h-4 rounded-full transition-all duration-700 shadow-[0_0_20px_#E31E24] ${isOpen ? 'bg-black' : 'bg-[#E31E24] animate-pulse'}`}></div>
        <div className="absolute inset-0 bg-[#E31E24]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>

      {/* Modern Interface with Red Accents */}
      {isOpen && (
        <div className="absolute bottom-32 right-0 w-[420px] h-[650px] glass-panel rounded-[50px] shadow-[-30px_60px_100px_rgba(227,30,36,0.1)] flex flex-col overflow-hidden border border-[#E31E24]/20">
          <div className="p-10 border-b border-[#E31E24]/10 flex justify-between items-center bg-white/40">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-[#E31E24] rounded-full shadow-[0_0_8px_#E31E24]"></div>
               <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E31E24]">Red_AI_Neural_v3</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[10px] font-bold opacity-30 hover:opacity-100 hover:text-[#E31E24] uppercase tracking-widest">Close</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-10 scrollbar-hide bg-gradient-to-b from-transparent to-[#E31E24]/5">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <span className={`text-[9px] font-bold opacity-20 mb-3 uppercase tracking-widest ${m.role === 'ai' ? 'text-[#E31E24]' : 'text-black'}`}>{m.role === 'ai' ? 'Studio_Core' : 'Client'}</span>
                <div className={`p-8 rounded-[35px] text-lg font-medium leading-relaxed uppercase tracking-tight ${m.role === 'user' ? 'bg-[#E31E24] text-white shadow-lg shadow-[#E31E24]/20' : 'bg-white/70 text-black shadow-sm border border-[#E31E24]/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-[10px] font-bold text-[#E31E24] opacity-50 animate-pulse tracking-[0.5em] ml-2">SYNTHESIZING...</div>}
          </div>

          <div className="p-10 bg-white/80 backdrop-blur-md">
            <div className="flex gap-4 items-center bg-[#E31E24]/5 p-4 rounded-full focus-within:bg-[#E31E24]/10 transition-all border border-transparent focus-within:border-[#E31E24]/20">
               <input 
                 autoFocus
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                 placeholder="Communicate with Red_AI..."
                 className="bg-transparent border-none outline-none text-lg font-bold uppercase flex-1 px-4 placeholder:text-[#E31E24]/20"
               />
               <button onClick={handleSend} className="w-12 h-12 rounded-full bg-[#E31E24] text-white flex items-center justify-center text-xl transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#E31E24]/30">↑</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RedAI;