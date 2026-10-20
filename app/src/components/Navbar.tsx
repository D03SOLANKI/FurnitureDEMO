import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = (window as any).__lenis?.scroll ?? window.scrollY;
      setScrolled(scrollPos > 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.on('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lenis) {
        lenis.off('scroll', handleScroll);
      }
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(element, { offset: -60 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { num: '01', label: 'Works', id: 'catalog' },
    { num: '02', label: 'What We Do', id: 'categories' },
    { num: '03', label: 'Architecture', id: 'catalog' },
    { num: '04', label: 'Onda Spotlight', id: 'spotlight' },
    { num: '05', label: 'Be Inspired', id: 'projects' },
    { num: '06', label: 'Our Services', id: 'services' },
    { num: '07', label: 'How We Work', id: 'process' },
    { num: '08', label: 'Testimonials', id: 'testimonials' },
    { num: '09', label: 'Our Team', id: 'team' },
    { num: '10', label: 'Get In Touch', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 pointer-events-none ${
          scrolled ? 'text-[#392615]' : 'text-white'
        } pt-6 md:pt-8 pb-4 px-6 md:px-12`}
      >
        <div className="max-w-[1620px] mx-auto flex items-center justify-between pointer-events-auto">
          {/* Left Brand + 6-dot menu icon */}
          <div className="flex items-center gap-4">
            <span
              onClick={() => scrollTo('hero')}
              className="font-display font-medium text-base tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
            >
              Graft studio
            </span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 rounded flex flex-col justify-center gap-[3px] hover:opacity-75 transition-opacity group cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <div className="grid grid-cols-2 gap-[3px]">
                <span className="w-[3px] h-[3px] rounded-full bg-current transition-transform group-hover:scale-125" />
                <span className="w-[3px] h-[3px] rounded-full bg-current transition-transform group-hover:scale-125" />
                <span className="w-[3px] h-[3px] rounded-full bg-current transition-transform group-hover:scale-125" />
                <span className="w-[3px] h-[3px] rounded-full bg-current transition-transform group-hover:scale-125" />
                <span className="w-[3px] h-[3px] rounded-full bg-current transition-transform group-hover:scale-125" />
                <span className="w-[3px] h-[3px] rounded-full bg-current transition-transform group-hover:scale-125" />
              </div>
            </button>
          </div>

          {/* Center Address & Quote (only visible at top, collapses on scroll) */}
          <div
            className={`hidden lg:flex items-center gap-14 text-[13px] leading-snug transition-all duration-500 ${
              scrolled
                ? 'opacity-0 scale-95 pointer-events-none w-0 overflow-hidden'
                : 'opacity-85 text-white/90'
            }`}
          >
            <div className="max-w-[180px] font-normal tracking-wide">
              Strada di Montegiano<br />
              42, 60030 Marche, Italia
            </div>
            <div className="max-w-[280px] font-normal tracking-wide text-white/80">
              We don't make mass furniture. We make tables where kids will grow up
            </div>
          </div>

          {/* Right CTA Button */}
          <div>
            <button
              onClick={() => scrollTo('contact')}
              className={`group flex items-center gap-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                scrolled
                  ? 'border border-[#392615]/30 hover:border-[#392615] bg-white/60 hover:bg-[#392615] hover:text-white px-5 py-2 text-[#392615] backdrop-blur-md shadow-xs'
                  : 'border border-white/40 hover:border-white bg-black/10 hover:bg-black/20 px-6 py-2.5 text-white backdrop-blur-sm'
              }`}
            >
              <span>Get in touch</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                →
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#392615] text-[#FAF9F6] flex flex-col justify-between p-8 md:p-16 backdrop-blur-xl"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between max-w-[1620px] w-full mx-auto">
              <span className="font-display font-medium text-xl tracking-tight text-white/90">
                Graft studio
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Menu Links Grid */}
            <div className="max-w-[1620px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 my-auto py-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                >
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="group flex items-baseline gap-4 text-left w-full cursor-pointer py-2 border-b border-white/10 hover:border-[#956e4b] transition-colors"
                  >
                    <span className="text-xs font-mono text-[#DBC0A9] tracking-wider">
                      {link.num}
                    </span>
                    <span className="font-display text-2xl md:text-3xl font-normal text-white/80 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#956e4b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ml-auto opacity-0 group-hover:opacity-100" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Bottom Meta in Menu */}
            <div className="max-w-[1620px] w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-sm text-[#C2BBB5] pt-6 border-t border-white/10 font-normal">
              <div>
                <p className="text-white font-medium mb-1">Workshop &amp; Studio</p>
                <p>Strada di Montegiano 42, 60030 Marche, Italia</p>
                <p>+47 973 46 128</p>
              </div>
              <div className="text-xs text-[#C2BBB5]/70">
                Scandinavian &amp; Italian tactile craft furniture · © Graft Studio
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
