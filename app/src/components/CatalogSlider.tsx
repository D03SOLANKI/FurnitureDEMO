import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const CatalogSlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const items = [
    {
      id: 'toma-cabinet',
      title: 'Toma Cabinet',
      category: 'SHELVES',
      image: '/assets/toma-cabinet.jpg',
      aspect: 'aspect-[4/5]',
    },
    {
      id: 'riva-lamp',
      title: 'Riva Lamp',
      category: 'LAMP',
      image: '/assets/riva-lamp.jpg',
      aspect: 'aspect-[4/5]',
    },
    {
      id: 'alden-chair',
      title: 'Alden Chair',
      category: 'CHAIR',
      image: '/assets/alden-chair.jpg',
      aspect: 'aspect-[4/5] lg:aspect-[3/4]',
    },
    {
      id: 'onda-chair',
      title: 'Onda Chair',
      category: 'CHAIR',
      image: '/assets/onda-view-1.jpg',
      aspect: 'aspect-[4/5]',
    },
    {
      id: 'voss-lounge',
      title: 'Voss Lounge Bench',
      category: 'SOFAS',
      image: '/assets/cat-sofas.jpg',
      aspect: 'aspect-[4/5]',
    },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section
      id="catalog"
      className="relative w-full bg-[#FAF9F6] text-[#392615] pt-16 pb-16 px-6 md:px-12 overflow-hidden border-t border-[#392615]/10"
    >
      <div className="max-w-[1620px] mx-auto">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight"
          >
            Not just furniture.{' '}
            <span className="font-serif-accent text-[#956e4b] italic font-normal">
              It's tactile architecture
            </span>{' '}
            for your home.
          </motion.h2>
        </div>

        {/* Product Cards Slider Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex-none w-[300px] sm:w-[360px] md:w-[420px] snap-start group"
            >
              {/* Card Surface */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-sm border border-[#392615]/5 mb-4">
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-white/90 backdrop-blur-md text-[#392615] shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Card Image */}
                <div className={`w-full ${item.aspect} overflow-hidden bg-[#F0EDE8]`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title & Micro-detail */}
              <div className="flex items-center justify-between px-1">
                <h3 className="font-display text-lg font-medium tracking-tight text-[#392615]">
                  {item.title}
                </h3>
                <span className="text-xs text-[#736557] font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  View piece →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar: Complete furnishing info + Slider Arrows */}
        <div className="mt-8 pt-8 border-t border-[#392615]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-sm text-[#736557] font-normal tracking-wide">
            We will provide you with complete furnishing
          </p>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border border-[#392615]/20 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'hover:bg-[#392615] hover:text-white cursor-pointer hover:border-[#392615]'
                  : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Previous item"
            >
              <span className="text-lg leading-none">←</span>
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border border-[#392615]/20 flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'hover:bg-[#392615] hover:text-white cursor-pointer hover:border-[#392615]'
                  : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Next item"
            >
              <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </div>

        {/* Section 03 Bottom Status */}
        <div className="w-full pt-8 flex items-center justify-between text-xs text-[#736557] uppercase tracking-wider">
          <span className="font-mono font-medium text-sm text-[#392615]">03</span>
          <span className="font-medium">Our works</span>
        </div>
      </div>
    </section>
  );
};
