import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[350px] md:h-[500px] bg-gray-800 rounded-sm grayscale hover:grayscale-0 transition duration-700 overflow-hidden border border-white/10"
        >
          <img 
            src="https://i.postimg.cc/Wh92wZvk/1.jpg" 
            alt="Yassir Benhaddi" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover high-quality-img"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-display font-bold tracking-tight mb-8 text-white">The Person Behind the Lens</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              I am a <span className="text-white font-semibold">Junior</span> at <span className="text-white font-semibold">Al Akhawayn University</span> majoring in Communication Studies and serving as a <span className="text-white font-semibold">World Bank Liaison Officer</span>. I believe passion is the fuel for happiness, which is why I've dedicated my life to traveling, writing, and filmmaking.
            </p>
            <p>
              My journey is marked by significant milestones, including building a community of <span className="text-white font-semibold">150k+ followers</span> in just 3 months through educational storytelling. I also developed a <span className="text-white font-semibold">Software Automation project for accounting</span>, showcasing my ability to blend creative strategy with technical problem-solving.
            </p>
            <p>
              From starting small businesses at 17 to managing content for corporate clients, I thrive on change and growth. My approach combines technical precision with a strategic understanding of social algorithms.
            </p>
            
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm uppercase tracking-widest text-white">
              <div className="space-y-2">
                <div>• Arabic (Native)</div>
                <div>• English (Fluent)</div>
                <div>• French (Fluent)</div>
                <div>• Content Strategy</div>
              </div>
              <div className="space-y-2 text-gray-400 lowercase tracking-normal">
                <div className="flex items-center gap-2">
                  <span className="text-white uppercase tracking-widest text-xs">• Email:</span>
                  <a href="mailto:benhaddiyassir@gmail.com" className="hover:text-white transition-colors">benhaddiyassir@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white uppercase tracking-widest text-xs">• LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/yassir-benhaddi-79929a216/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Yassir Benhaddi</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
