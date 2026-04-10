import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import navItems from "@/data/navItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/60 backdrop-blur-xl`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center h-20">
          {/* Desktop: Logo + separator + icons centered */}
          <motion.div 
            className="hidden lg:flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-outfit font-bold text-xl text-white">DIRGED</span>
            <div className="w-px h-6 bg-white/30 mx-1" />
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                data-testid={`nav-${item.id}-link`}
                onClick={() => scrollToSection(item.id)}
                className={`group relative w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                  activeSection === item.id 
                    ? "text-[#FF007F] bg-[#FF007F]/10" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-black/90 px-2 py-1 rounded text-white pointer-events-none z-50">{item.label}</span>
              </motion.button>
            ))}
            <div className="w-px h-6 bg-white/30 ml-1" />
            <a href="https://ejef.tjmg.jus.br" target="_blank" rel="noopener noreferrer" className="ml-1">
              <img 
                src="https://customer-assets.emergentagent.com/job_dirged-portal/artifacts/x45fyd6l_logo%20ejef.png" 
                alt="EJEF | TJMG" 
                className="h-10 object-contain object-right hover:opacity-80 transition-opacity cursor-pointer"
              />
            </a>
          </motion.div>

          {/* Mobile: Logo left, menu button right */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="font-outfit font-bold text-xl text-white">DIRGED</span>
            </motion.div>
            <button 
              data-testid="mobile-menu-button"
              className="p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-testid={`mobile-nav-${item.id}-link`}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id 
                      ? "text-[#FF007F] bg-[#FF007F]/10" 
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
