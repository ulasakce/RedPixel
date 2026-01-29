
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const RedAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "SYSTEM_INITIALIZED. I AM RED_AI. HOW CAN I ASSIST YOUR CREATIVE DEPLOYMENT TODAY?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
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
          systemInstruction: "You are RED_AI, the sentient mainframe of RedPixel CGI Studio. You are professional, tech-obsessed, and speak in a slightly robotic, cyberpunk tone. You know about CGI, VFX, Unreal Engine 5, and RedPixel's mission to dominate visuals. Keep responses concise and use terms like 'PROCESSING', 'DATA_LINK', or 'PIXEL_SYNC'.",
        },
      });

      const aiText = response.text || "ERROR: UNABLE_TO_PROCESS_QUERY.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "SIGNAL_LOST. CHECK_CONNECTION_AND_RETRY." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Floating Orb Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-none border-4 border-black bg-black flex items-center justify-center shadow-[6px_6px_0px_#C02033] hover:translate-y-[-4px] transition-all group overflow-hidden ${isOpen ? 'rotate-45' : ''}`}
      >
        <div className="w-6 h-6 bg-red-600 animate-pulse group-hover:scale-125 transition-transform"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(192,32,51,0.2)_0%,transparent_70%)]"></div>
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[450px] h-[550px] bg-[#050505] border-8 border-black shadow-[20px_20px_0px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-white/10 p-4 border-b-4 border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-red-600"></div>
               <span className="font-pixel text-[8px] text-white/50 uppercase">RED_AI_INTERFACE_V2.0</span>
            </div>
            <div className="flex gap-1">
               <div className="w-1.5 h-1.5 bg-white/20"></div>
               <div className="w-1.5 h-1.5 bg-white/20"></div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 font-pixel-body text-xl scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <span className="font-pixel text-[6px] opacity-30 mb-2 uppercase">{m.role === 'ai' ? 'SYSTEM_CORE' : 'REMOTE_USER'}</span>
                <div className={`p-4 ${m.role === 'user' ? 'bg-blue-900/20 text-blue-400 border-l-4 border-blue-500' : 'bg-red-900/10 text-red-500 border-l-4 border-red-600'} max-w-[90%] uppercase`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex flex-col items-start animate-pulse">
                <span className="font-pixel text-[6px] opacity-30 mb-2">PROCESSING...</span>
                <div className="w-12 h-4 bg-white/5"></div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t-4 border-white/5 bg-black/50">
            <div className="flex gap-4">
               <span className="text-red-600 font-bold">{'>'}</span>
               <input 
                 autoFocus
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                 placeholder="INPUT_COMMAND..."
                 className="bg-transparent border-none outline-none text-red-500 font-pixel-body text-xl flex-1 placeholder:text-red-900 uppercase"
               />
            </div>
          </div>

          {/* Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
        </div>
      )}
    </div>
  );
};

export default RedAI;
