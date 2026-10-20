import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="categories"
      className="relative w-full bg-[#FAF9F6] text-[#392615] pt-24 pb-16 px-6 md:px-12 overflow-hidden border-t border-[#392615]/5"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col justify-between min-h-[750px]">
        {/* Top Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="font-display text-base md:text-lg text-[#736557] font-normal tracking-tight">
            We will create for you
          </span>
        </motion.div>

        {/* Giant Staggered Typography + Pill Capsules */}
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4 my-auto select-none">
          {/* Row 1: Sofas + Square Thumbnail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActiveCategory('sofas')}
            onMouseLeave={() => setActiveCategory(null)}
            className="flex items-center gap-4 md:gap-8 group cursor-pointer"
          >
            <h2
              className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight transition-colors duration-300 ${
                activeCategory === 'sofas' ? 'text-[#392615]' : 'text-[#736557]/80 group-hover:text-[#392615]'
              }`}
            >
              Sofas
            </h2>
            <motion.div
              animate={{
                scale: activeCategory === 'sofas' ? 1.08 : 1,
                rotate: activeCategory === 'sofas' ? 2 : 0,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#392615]/10 shrink-0"
            >
              <img
                src="/assets/cat-sofas.jpg"
                alt="Sofas craftsmanship"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>

          {/* Row 2: Capsule Pill + Sidetables */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActiveCategory('sidetables')}
            onMouseLeave={() => setActiveCategory(null)}
            className="flex items-center gap-4 md:gap-8 group cursor-pointer -ml-4 sm:-ml-12"
          >
            <motion.div
              animate={{
                scale: activeCategory === 'sidetables' ? 1.08 : 1,
                rotate: activeCategory === 'sidetables' ? -2 : 0,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-28 h-16 sm:w-36 sm:h-20 md:w-48 md:h-28 rounded-full overflow-hidden shadow-lg border border-[#392615]/10 shrink-0"
            >
              <img
                src="/assets/cat-sidetables.jpg"
                alt="Sidetables design"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
            <h2
              className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight transition-colors duration-300 ${
                activeCategory === 'sidetables' ? 'text-[#392615]' : 'text-[#736557]/80 group-hover:text-[#392615]'
              }`}
            >
              Sidetables
            </h2>
          </motion.div>

          {/* Row 3: Chairs (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActiveCategory('chairs')}
            onMouseLeave={() => setActiveCategory(null)}
            className="group cursor-pointer"
          >
            <h2
              className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight transition-colors duration-300 ${
                activeCategory === 'chairs' ? 'text-[#392615]' : 'text-[#736557]/80 group-hover:text-[#392615]'
              }`}
            >
              Chairs
            </h2>
          </motion.div>

          {/* Row 4: Tables + Capsule Pill */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActiveCategory('tables')}
            onMouseLeave={() => setActiveCategory(null)}
            className="flex items-center gap-4 md:gap-8 group cursor-pointer -mr-6 sm:-mr-16"
          >
            <h2
              className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight transition-colors duration-300 ${
                activeCategory === 'tables' ? 'text-[#392615]' : 'text-[#736557]/80 group-hover:text-[#392615]'
              }`}
            >
              Tables
            </h2>
            <motion.div
              animate={{
                scale: activeCategory === 'tables' ? 1.08 : 1,
                rotate: activeCategory === 'tables' ? 2 : 0,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-32 h-16 sm:w-44 sm:h-22 md:w-56 md:h-28 rounded-full overflow-hidden shadow-lg border border-[#392615]/10 shrink-0"
            >
              <img
                src="/assets/cat-tables.jpg"
                alt="Tables craftsmanship"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>

          {/* Row 5: Dressing Room */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActiveCategory('dressing-room')}
            onMouseLeave={() => setActiveCategory(null)}
            className="group cursor-pointer"
          >
            <h2
              className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight transition-colors duration-300 ${
                activeCategory === 'dressing-room' ? 'text-[#392615]' : 'text-[#736557]/80 group-hover:text-[#392615]'
              }`}
            >
              Dressing Room
            </h2>
          </motion.div>

          {/* Row 6: Circle Pill + Beds */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActiveCategory('beds')}
            onMouseLeave={() => setActiveCategory(null)}
            className="flex items-center gap-4 md:gap-8 group cursor-pointer -ml-8 sm:-ml-20"
          >
            <motion.div
              animate={{
                scale: activeCategory === 'beds' ? 1.08 : 1,
                rotate: activeCategory === 'beds' ? -3 : 0,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg border border-[#392615]/10 shrink-0"
            >
              <img
                src="/assets/cat-beds.jpg"
                alt="Beds and bedrooms"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
            <h2
              className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight transition-colors duration-300 ${
                activeCategory === 'beds' ? 'text-[#392615]' : 'text-[#736557]/80 group-hover:text-[#392615]'
              }`}
            >
              Beds
            </h2>
          </motion.div>
        </div>

        {/* Section 02 Bottom Status Bar */}
        <div className="w-full pt-10 border-t border-[#392615]/10 flex items-center justify-between text-xs text-[#736557] uppercase tracking-wider mt-12">
          <span className="font-mono font-medium text-sm text-[#392615]">02</span>
          <span className="font-medium">What we do</span>
        </div>
      </div>
    </section>
  );
};
