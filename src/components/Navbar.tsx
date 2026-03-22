import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "/#work", isExternal: false },
    { name: "Photography", href: "/photography", isExternal: false },
    { name: "About", href: "/#about", isExternal: false },
    { name: "Contact", href: "/#contact", isExternal: false },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/5"
      >
        <Link to="/" className="text-xl font-bold tracking-tighter uppercase z-50">
          YB<span className="text-red-600">.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="space-x-8 text-sm uppercase tracking-widest hidden md:flex">
          <a href="#work" className="hover:text-red-500 transition-colors">Work</a>
          <Link to="/photography" className="hover:text-red-500 transition-colors">Photography</Link>
          <a href="#about" className="hover:text-red-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {link.href.startsWith("/#") ? (
                  <a 
                    href={link.href.substring(1)} 
                    className="text-3xl font-display font-bold tracking-tighter hover:text-red-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href} 
                    className="text-3xl font-display font-bold tracking-tighter hover:text-red-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
