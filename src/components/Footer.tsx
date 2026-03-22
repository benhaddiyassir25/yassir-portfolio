export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer id="contact" className="relative py-20 md:py-32 px-6 md:px-8 border-t border-white/10 text-center overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.pinimg.com/originals/8d/d7/e9/8dd7e91ae4c73f27054ca0fb43bc80e3.gif" 
          alt="" 
          className="w-full h-full object-cover opacity-10 md:opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70 md:bg-black/60 backdrop-blur-[1px] md:backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl md:text-5xl font-display font-bold tracking-tight mb-8 md:mb-12">Let's create something meaningful.</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 md:mb-16 text-gray-400">
          <a href="mailto:benhaddiyassir@gmail.com" className="hover:text-white transition-colors text-sm md:text-base">Email</a>
          <a href="https://www.tiktok.com/@yassirbenhaddi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm md:text-base">TikTok</a>
          <a href="https://www.instagram.com/Yasser.mov/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm md:text-base">Instagram</a>
          <a href="https://www.linkedin.com/in/yassir-benhaddi-79929a216/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm md:text-base">LinkedIn</a>
        </div>
        <p className="text-xs text-gray-600 uppercase tracking-widest">
          &copy; {year} Yassir Benhaddi. Crafted with Precision.
        </p>
      </div>
    </footer>
  );
}
