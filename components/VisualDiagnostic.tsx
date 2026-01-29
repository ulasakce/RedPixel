
import React, { useState, useEffect } from 'react';

type Question = {
  id: number;
  text: string;
  options: { label: string; value: string; weight: string }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "DEFINE_PROJECT_MOOD:",
    options: [
      { label: "DARK_CYBERPUNK", value: "cyber", weight: "VFX_HEAVY" },
      { label: "CLEAN_MINIMALIST", value: "minimal", weight: "PRODUCT_VIS" },
      { label: "HYPER_REALISTIC", value: "real", weight: "UE5_ENV" }
    ]
  },
  {
    id: 2,
    text: "TARGET_AUDIENCE_IMPACT:",
    options: [
      { label: "EMOTIONAL_STORY", value: "story", weight: "CINEMATIC" },
      { label: "TECHNICAL_PRECISION", value: "tech", weight: "ANATOMY" },
      { label: "BRAND_DOMINANCE", value: "brand", weight: "MOTION" }
    ]
  },
  {
    id: 3,
    text: "CORE_PLATFORM_FOCUS:",
    options: [
      { label: "CINEMA_FILM", value: "film", weight: "HIGH_POLY" },
      { label: "WEB_INTERACTIVE", value: "web", weight: "REAL_TIME" },
      { label: "IMMERSIVE_SOCIAL", value: "social", weight: "GLITCH" }
    ]
  }
];

const VisualDiagnostic: React.FC = () => {
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [finalResult, setFinalResult] = useState<string | null>(null);

  const handleOption = (weight: string) => {
    const newResults = [...results, weight];
    setResults(newResults);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      runDiagnostic(newResults);
    }
  };

  const runDiagnostic = (finalWeights: string[]) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setFinalResult(finalWeights[Math.floor(Math.random() * finalWeights.length)]);
    }, 2500);
  };

  const reset = () => {
    setStep(0);
    setResults([]);
    setFinalResult(null);
  };

  return (
    <section className="py-32 px-6 lg:px-16 bg-[#D6D6D6]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
           <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-blue-600 border-2 border-black animate-pulse"></div>
              <h2 className="text-2xl lg:text-4xl font-pixel uppercase tracking-tighter">VISUAL_CORE_DIAGNOSTIC</h2>
           </div>
           <div className="font-pixel text-[8px] opacity-40">STEP_0{step + 1} / 03</div>
        </div>

        <div className="bg-[#0a0a0a] border-8 border-black p-8 lg:p-12 relative min-h-[500px] flex flex-col justify-center shadow-[20px_20px_0px_rgba(0,0,0,0.1)]">
           {/* CRT Overlays */}
           <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
           
           {!isAnalyzing && !finalResult && (
             <div className="relative z-20">
               <p className="text-green-500 font-pixel text-xs mb-8 opacity-60">SYSTEM_PROMPT {'>'}</p>
               <h3 className="text-white font-pixel text-xl lg:text-3xl mb-12 leading-tight uppercase tracking-widest">
                 {questions[step].text}
               </h3>
               <div className="grid grid-cols-1 gap-4">
                 {questions[step].options.map((opt) => (
                   <button 
                     key={opt.value}
                     onClick={() => handleOption(opt.weight)}
                     className="text-left border-2 border-green-500/20 p-6 font-pixel text-[10px] text-green-500 hover:bg-green-500 hover:text-black transition-all group flex justify-between items-center"
                   >
                     <span>[ {opt.label} ]</span>
                     <span className="opacity-0 group-hover:opacity-100">{'>'}{'>'}</span>
                   </button>
                 ))}
               </div>
             </div>
           )}

           {isAnalyzing && (
             <div className="flex flex-col items-center justify-center relative z-20">
                <div className="w-24 h-24 border-8 border-t-blue-500 border-r-transparent border-b-blue-800 border-l-transparent rounded-full animate-spin mb-8"></div>
                <p className="font-pixel text-blue-400 text-xs animate-pulse">ANALYZING_CREATIVE_STRATA...</p>
                <div className="mt-8 font-pixel text-[6px] text-blue-900 grid grid-cols-2 gap-x-12 gap-y-2">
                   <span>SCRAPPING_META_DATA...</span>
                   <span>CALCULATING_POLY_COUNT...</span>
                   <span>OPTIMIZING_SHADER_FLOW...</span>
                   <span>STABILIZING_PIXELS...</span>
                 </div>
             </div>
           )}

           {finalResult && (
             <div className="relative z-20 text-center flex flex-col items-center">
                <div className="mb-8 p-4 border-2 border-red-600 inline-block bg-red-600/10">
                   <span className="font-pixel text-[10px] text-red-500">DIAGNOSTIC_COMPLETE</span>
                </div>
                <h3 className="text-white font-pixel text-2xl lg:text-5xl mb-6 uppercase tracking-tighter">
                   YOUR_PROFILE: <br />
                   <span className="text-blue-500">{finalResult}</span>
                </h3>
                <p className="text-green-500/60 font-pixel-body text-xl max-w-md mb-12 uppercase font-bold">
                   Our algorithms suggest a focus on {finalResult.toLowerCase().replace('_', ' ')} for maximum audience retention and visual impact.
                </p>
                <div className="flex gap-4">
                   <button 
                     onClick={reset}
                     className="bg-white/10 text-white font-pixel text-[8px] px-8 py-4 border-2 border-white/20 hover:bg-white hover:text-black transition-all"
                   >
                     RE_SCAN
                   </button>
                   <a 
                     href="#contact"
                     className="bg-blue-600 text-white font-pixel text-[8px] px-8 py-4 border-2 border-black shadow-[4px_4px_0px_white] hover:translate-y-1 hover:shadow-none transition-all"
                   >
                     INITIALIZE_PROJECT_WITH_DNA
                   </a>
                </div>
             </div>
           )}
        </div>

        <div className="mt-8 flex justify-between font-pixel text-[6px] text-black/30 uppercase tracking-widest">
           <span>REDPIXEL_VIRTUAL_LABS // 2024</span>
           <span>SECURE_SESSION_ID: RP-{Math.floor(Math.random() * 9000) + 1000}</span>
        </div>
      </div>
    </section>
  );
};

export default VisualDiagnostic;
