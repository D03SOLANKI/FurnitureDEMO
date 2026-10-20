import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 160]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0.4]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(el, { offset: -60 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[720px] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image with subtle cinematic scale and scroll parallax */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 bg-cover bg-center will-change-transform"
        style={{
          y: yBg,
          backgroundImage: `url('/assets/hero-bg.jpg')`,
        }}
      >
        {/* Soft Vignette and dark gradient at bottom for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Spacer for top navbar */}
      <div className="h-28" />

      {/* Center / Lower Content Grid with smooth scroll fade */}
      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-10 max-w-[1620px] w-full mx-auto px-6 md:px-12 flex-1 flex flex-col justify-end pb-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Big Brand Title: Graft */}
          <div className="lg:col-span-7 select-none">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium text-white tracking-[-0.04em] leading-[0.85] text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px]"
            >
              Graft
            </motion.h1>
          </div>

          {/* Right Teaser Component: Meet our featured work + Onda Chair Card */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between gap-6 pb-6"
            >
              {/* Text teaser */}
              <div className="flex-1 space-y-4">
                <div className="w-full h-[1px] bg-white/30" />
                <h2 className="font-display text-white text-lg md:text-xl font-normal tracking-tight">
                  Meet our featured work
                </h2>
                <div>
                  <button
                    onClick={() => scrollTo('spotlight')}
                    className="group inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-white tracking-wider uppercase font-medium cursor-pointer"
                  >
                    <span>Read more</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
                <div className="w-full h-[1px] bg-white/30" />
              </div>

              {/* Floating Onda Chair Preview Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={() => scrollTo('spotlight')}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-white/90 backdrop-blur-md p-2 shadow-2xl flex items-center justify-center cursor-pointer overflow-hidden border border-white/50 group shrink-0"
              >
                <img
                  src="/assets/onda-preview.png"
                  alt="Onda Chair Featured"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Section 01 Bottom Status Bar & Anchors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full pt-6 border-t border-white/20 flex flex-wrap items-center justify-between text-xs text-white/80 tracking-wider uppercase"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-white font-medium text-sm">01</span>
          </div>

          <div className="flex items-center gap-8 md:gap-14">
            <button
              onClick={() => scrollTo('catalog')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Our works
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Inspiration
            </button>
            <button
              onClick={() => scrollTo('team')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Team
            </button>
          </div>

          <button
            onClick={() => scrollTo('categories')}
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Explore studio</span>
            <span>↓</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
