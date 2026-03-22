import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera } from "lucide-react";

const photos = [
  { id: 1, url: "https://i.postimg.cc/Wh92wZvk/1.jpg" },
  { id: 2, url: "https://i.postimg.cc/svfjWctB/17.jpg" },
  { id: 3, url: "https://i.postimg.cc/N5GsX4W2/4.jpg" },
  { id: 4, url: "https://i.postimg.cc/SJQS9rwc/BW-Soft-contrast.jpg" },
  { id: 5, url: "https://i.postimg.cc/Yjz2jVy0/Cat-Pic.jpg" },
  { id: 6, url: "https://i.postimg.cc/CdsMdt6h/Desert-pic-2.jpg" },
  { id: 7, url: "https://i.postimg.cc/svnV4Wrq/high-saturation.jpg" },
  { id: 8, url: "https://i.postimg.cc/w179fBxq/IMG-0844.avif" },
  { id: 9, url: "https://i.postimg.cc/z3FD3MPD/IMG-0849-2.avif" },
  { id: 10, url: "https://i.postimg.cc/Lh34h7QG/IMG-0855-2.avif" },
  { id: 11, url: "https://i.postimg.cc/bsYynTKx/IMG-4489-2.avif" },
  { id: 12, url: "https://i.postimg.cc/237j3JXY/IMG-4553-2.avif" }
];

export default function Photography() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="fixed w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 group text-sm uppercase tracking-widest">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter">
          PHOTOGRAPHY<span className="text-red-600">.</span>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 md:px-24">
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">Visual Stories</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A collection of moments captured through my lens. From the heights of the sky to the silence of the desert, each frame tells a story of freedom and observation.
          </p>
        </motion.div>

        {/* Gallery - Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo) => (
            <motion.div 
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="break-inside-avoid mb-6 relative group overflow-hidden rounded-sm shadow-2xl border border-white/5 bg-zinc-900"
            >
              <img 
                src={photo.url} 
                alt={`Photography ${photo.id}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover high-quality-img grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer-like CTA */}
      <section className="py-24 px-6 md:px-24 border-t border-white/5 text-center">
        <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight mb-8">Want to see more?</h2>
        <a 
          href="https://www.linkedin.com/in/yassir-benhaddi-79929a216/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
        >
          Connect on LinkedIn
        </a>
      </section>
    </div>
  );
}
