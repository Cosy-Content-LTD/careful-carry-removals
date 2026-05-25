import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Coverage", href: "#coverage" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-black text-lg">C</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-black text-white text-base tracking-tight">Careful Carry</span>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Removals</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-bold text-white/80 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:0234567891"
            className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors duration-300"
          >
            <Phone size={16} className="text-primary" />
            0234 567 891
          </a>
          <a
            href="#contact"
            className="bg-primary text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-xl text-white hover:text-primary transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-bold text-white/80 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-primary text-white text-sm font-bold px-6 py-4 rounded-full text-center shadow-lg"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
