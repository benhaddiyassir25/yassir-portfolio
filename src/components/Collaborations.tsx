import { motion } from "motion/react";

export default function Collaborations() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-24 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-gray-500">Global Collaborations</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">ADHDoers Collaboration</h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Worked as a <span className="text-white font-semibold">Content Creator and Editor</span> for ADHDoers, managing and producing high-impact content across Instagram, YouTube, and X (Twitter).
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/adhdoers/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest border-b border-white/20 hover:border-white transition-colors pb-1"
            >
              View Page
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden border border-white/10 flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-50" />
          <div className="relative z-10 text-center p-8">
            <h4 className="text-2xl font-display font-bold mb-2">ADHDoers</h4>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Multi-Platform Content Strategy</p>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
