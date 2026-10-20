import React from 'react';
import { motion } from 'framer-motion';

export const TeamMoodboard: React.FC = () => {
  const team = [
    {
      name: 'Erik Johansson',
      role: 'Founder & Master Craftsman',
      image: '/assets/team-erik.jpg',
    },
    {
      name: 'Maja Lindström',
      role: 'Furniture Designer',
      image: '/assets/team-maja.jpg',
    },
    {
      name: 'Anton Berg',
      role: 'Production Specialist',
      image: '/assets/team-anton.jpg',
    },
    {
      name: 'Lint Karlsson',
      role: 'Interior & Styling Consultant',
      image: '/assets/team-lint.jpg',
    },
  ];

  return (
    <section
      id="team"
      className="relative w-full bg-[#FAF9F6] text-[#392615] pt-16 pb-20 px-6 md:px-12 overflow-hidden border-t border-[#392615]/10"
    >
      <div className="max-w-[1620px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#956e4b] font-medium block mb-2">
              Designers, craftsmen, and thinkers shaping your spaces
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight">
              Meet our creators
            </h2>
          </div>

          {/* 26-person team pill badge */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-[#392615]/10 shadow-sm self-start sm:self-auto">
            <div className="flex -space-x-2">
              <img
                src="/assets/team-erik.jpg"
                alt="team"
                className="w-6 h-6 rounded-full object-cover border-2 border-white"
              />
              <img
                src="/assets/team-maja.jpg"
                alt="team"
                className="w-6 h-6 rounded-full object-cover border-2 border-white"
              />
              <img
                src="/assets/team-anton.jpg"
                alt="team"
                className="w-6 h-6 rounded-full object-cover border-2 border-white"
              />
            </div>
            <span className="text-xs font-medium text-[#392615]">26 person team</span>
          </div>
        </div>

        {/* 4 Team Portrait Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-[#392615]/10 flex flex-col cursor-pointer"
            >
              <div className="w-full aspect-[3/4] overflow-hidden bg-[#EAE6DF]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 bg-white flex flex-col justify-between flex-1">
                <h3 className="font-display text-lg font-medium tracking-tight text-[#392615]">
                  {member.name}
                </h3>
                <span className="text-xs text-[#736557] font-normal block mt-1">
                  {member.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Craftsmanship Moodboard Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-16">
          <div className="md:col-span-3">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#392615]/10">
              <img
                src="/assets/mood-bandsaw.jpg"
                alt="Band saw woodworking"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#392615]/10">
              <img
                src="/assets/mood-woodgrain.jpg"
                alt="Wood grain detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="md:col-span-3 px-4 text-center md:text-left">
            <p className="font-display text-base text-[#736557] leading-relaxed">
              Each detail is carefully considered before our production process begins.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#392615]/10">
              <img
                src="/assets/mood-sketch.jpg"
                alt="Architectural chair sketches"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="md:col-span-3 px-4 text-center md:text-left order-last md:order-none">
            <p className="font-display text-base text-[#736557] leading-relaxed">
              From first sketches to final installation, we focus on lasting craftsmanship.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#392615]/10">
              <img
                src="/assets/mood-driftwood.jpg"
                alt="Natural wood form"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#392615]/10">
              <img
                src="/assets/mood-chairdetail.jpg"
                alt="Woven chair seat and sunlight shadow"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Section 09 Bottom Status */}
        <div className="w-full pt-8 border-t border-[#392615]/10 flex items-center justify-between text-xs text-[#736557] uppercase tracking-wider">
          <span className="font-mono font-medium text-sm text-[#392615]">09</span>
          <span className="font-medium">Our team</span>
        </div>
      </div>
    </section>
  );
};
