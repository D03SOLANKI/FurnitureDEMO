import React from 'react';
import { motion } from 'framer-motion';

export const ServicesProcess: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Custom Furniture Design',
      desc: 'Bespoke designs shaped around your architecture, everyday rituals, and spatial flow.',
    },
    {
      num: '02',
      title: 'Made-to-Order Pieces',
      desc: 'Signature studio tables, chairs, and consoles hand-crafted to individual dimensions.',
    },
    {
      num: '03',
      title: 'Wood Finishing & Restoration',
      desc: 'Specialized natural plant-based oils, open-pore waxing, and tactile hand smoothing.',
    },
    {
      num: '04',
      title: 'Space & Object Styling',
      desc: 'Harmonizing furniture with lighting, textiles, and ceramic sculpture for calm living.',
    },
    {
      num: '05',
      title: 'Limited Series Production',
      desc: 'Numbered small-batch releases celebrating unique European timber grain patterns.',
    },
    {
      num: '06',
      title: 'Design Consultations',
      desc: 'Material sampling, architectural layout planning, and 3D spatial previews.',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'You reach out',
      desc: "Tell us about your space, what you're looking for, or which piece caught your eye. We're here to help shape the idea.",
    },
    {
      step: '2',
      title: 'We design it',
      desc: 'Based on your request, we sketch a concept, choose the materials, and refine the form until it feels just really right.',
    },
    {
      step: '3',
      title: 'Crafting begins',
      desc: 'Your piece is made by hand in our workshop in Italy, with patience, precision, and attention to texture.',
    },
    {
      step: '4',
      title: 'Delivery & care',
      desc: "Once ready, we pack and ship your item with care. We'll also include some tips for keeping it beautiful for years to come.",
    },
  ];

  return (
    <>
      {/* SECTION 06: Creating your idea / Services */}
      <section
        id="services"
        className="relative w-full bg-[#FAF9F6] text-[#392615] pt-20 pb-16 px-6 md:px-12 overflow-hidden border-t border-[#392615]/10"
      >
        <div className="max-w-[1620px] mx-auto">
          {/* Centered Graphic Headline with Pill Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 text-center my-12"
          >
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-medium tracking-tight text-[#392615]">
              Creating your
            </h2>
            <div className="w-24 sm:w-36 md:w-44 h-12 sm:h-16 md:h-20 rounded-full overflow-hidden shadow-lg border border-[#392615]/10 shrink-0">
              <img
                src="/assets/riva-lamp.jpg"
                alt="Craft idea"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-medium tracking-tight text-[#392615]">
              idea
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 rounded-2xl bg-white border border-[#392615]/10 shadow-sm hover:border-[#956e4b]/40 hover:shadow-md transition-all group cursor-pointer"
              >
                <span className="text-xs font-mono text-[#956e4b] font-medium tracking-wider block mb-4">
                  {svc.num}
                </span>
                <h3 className="font-display text-xl font-medium text-[#392615] tracking-tight mb-2 group-hover:text-[#956e4b] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#736557] leading-relaxed font-normal">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Section 06 Bottom Status */}
          <div className="w-full pt-8 border-t border-[#392615]/10 flex items-center justify-between text-xs text-[#736557] uppercase tracking-wider">
            <span className="font-mono font-medium text-sm text-[#392615]">06</span>
            <span className="font-medium">Our services</span>
          </div>
        </div>
      </section>

      {/* SECTION 07: How we work / 4-step craft process */}
      <section
        id="process"
        className="relative w-full bg-[#FAF9F6] text-[#392615] pt-16 pb-20 px-6 md:px-12 overflow-hidden border-t border-[#392615]/10"
      >
        <div className="max-w-[1620px] mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#392615]">
              How we work
            </h2>
          </div>

          {/* Workshop Photo + Progressive Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Workshop image */}
            <div className="lg:col-span-6">
              <div className="w-full h-[400px] sm:h-[500px] md:h-[580px] rounded-3xl overflow-hidden shadow-lg border border-[#392615]/10 bg-[#EFECE6]">
                <img
                  src="/assets/craft-hands.jpg"
                  alt="Craftsman hand sanding wood"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>
            </div>

            {/* 4 Steps Timeline */}
            <div className="lg:col-span-6 space-y-8">
              {steps.map((st, i) => (
                <motion.div
                  key={st.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-6 pb-6 border-b border-[#392615]/10 last:border-b-0"
                >
                  <div className="w-10 h-10 rounded-full bg-[#392615] text-white flex items-center justify-center font-mono text-sm font-medium shrink-0 shadow-sm">
                    {st.step}
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[#392615] mb-1.5">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#736557] leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 07 Bottom Status */}
          <div className="w-full pt-8 border-t border-[#392615]/10 flex items-center justify-between text-xs text-[#736557] uppercase tracking-wider">
            <span className="font-mono font-medium text-sm text-[#392615]">07</span>
            <span className="font-medium">How we work</span>
          </div>
        </div>
      </section>
    </>
  );
};
