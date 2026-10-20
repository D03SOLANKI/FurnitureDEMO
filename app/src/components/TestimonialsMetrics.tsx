import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TestimonialsMetrics: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      author: 'LUCAS BERGMAN',
      role: 'Architect & Collector, Stockholm',
      text: 'From the first sketch to the final installation, the process was smooth and professional. The quality of craftsmanship is outstanding, and the atmosphere they created is both modern and very warm.',
    },
    {
      author: 'EMMA LARSSON',
      role: 'Private Residence, Milan',
      text: 'The team transformed our apartment beyond expectations. Every detail feels considered, and the custom furniture fits the space perfectly. It finally feels like a home designed just for us.',
    },
    {
      author: 'SOFIA NILSSON',
      role: 'Interior Stylist, Oslo',
      text: 'We needed smart storage without losing light and openness — and they delivered exactly that. The space feels balanced, functional, and beautifully finished. Highly recommended.',
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#FAF9F6] text-[#392615] pt-16 pb-20 px-6 md:px-12 overflow-hidden border-t border-[#392615]/10"
    >
      <div className="max-w-[1620px] mx-auto">
        {/* Organic 3D Sculptural Wood Header Banner */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden mb-16 shadow-md border border-[#392615]/10 bg-[#E8DFD3]">
          <img
            src="/assets/sculpture-wood.jpg"
            alt="Organic twisted wood sculpture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-8 md:p-12">
            <span className="font-display text-xl sm:text-2xl text-white/90 font-normal">
              People say…
            </span>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-white self-end">
              Testimonials
            </h2>
          </div>
        </div>

        {/* Metrics Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 py-8 border-y border-[#392615]/10">
          <div className="flex items-baseline gap-6">
            <span className="font-display text-7xl sm:text-8xl font-normal text-[#392615] tracking-tighter">
              21
            </span>
            <p className="text-sm sm:text-base text-[#736557] font-normal max-w-xs leading-snug">
              bespoke pieces created and hand-finished last year
            </p>
          </div>
          <div className="flex items-baseline gap-6">
            <span className="font-display text-7xl sm:text-8xl font-normal text-[#392615] tracking-tighter">
              16
            </span>
            <p className="text-sm sm:text-base text-[#736557] font-normal max-w-xs leading-snug">
              interiors and lofts fully furnished across Europe
            </p>
          </div>
        </div>

        {/* Testimonials Review Slider */}
        <div className="max-w-4xl mx-auto py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-[#392615] font-normal leading-relaxed tracking-tight">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#956e4b] font-medium block">
                  {testimonials[activeTestimonial].author}
                </span>
                <span className="text-xs text-[#736557] font-normal">
                  {testimonials[activeTestimonial].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Nav dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  activeTestimonial === idx
                    ? 'w-8 bg-[#392615]'
                    : 'bg-[#392615]/20 hover:bg-[#392615]/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Section 08 Bottom Status */}
        <div className="w-full pt-12 border-t border-[#392615]/10 flex items-center justify-between text-xs text-[#736557] uppercase tracking-wider mt-12">
          <span className="font-mono font-medium text-sm text-[#392615]">08</span>
          <span className="font-medium">Testimonials</span>
        </div>
      </div>
    </section>
  );
};
