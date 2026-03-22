import { motion } from "motion/react";
import { Volume2 } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playIntro = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('./welcomeToPortfolio.mp3');
    }
    
    audioRef.current.play().catch(error => {
      console.error("Audio playback failed:", error.message || error);
      if (error.name === 'NotAllowedError') {
        console.warn("Autoplay blocked: User interaction required.");
      } else if (error.name === 'NotFoundError') {
        console.error("Audio file not found at ./welcomeToPortfolio.mp3");
      }
    });
  };

  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-gray-500"
      >
        Communication Student @ AUI
      </motion.h2>
      
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl sm:text-6xl md:text-9xl font-display font-bold tracking-tighter gradient-text leading-[1.1] md:leading-tight"
      >
        Yassir <br /> Benhaddi
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 md:mt-8 max-w-lg text-gray-400 text-base md:text-lg leading-relaxed"
      >
        Filmmaker, Writer, and Digital Strategist. Built a community of <span className="text-white">150k+ followers</span> in 3 months through educational storytelling.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 md:mt-12 flex flex-wrap gap-4 sm:gap-6"
      >
        <button 
          onClick={playIntro}
          className="flex items-center gap-2 px-8 py-3 border-[0.5px] border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-xs md:text-sm uppercase tracking-widest text-center animate-pulse-border"
        >
          <Volume2 size={16} />
          Play Intro
        </button>
        <a 
          href="#work" 
          className="px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300 text-xs md:text-sm uppercase tracking-widest text-center"
        >
          View Work
        </a>
        <a 
          href="https://www.linkedin.com/in/yassir-benhaddi-79929a216/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition text-xs md:text-sm uppercase tracking-widest text-center"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
