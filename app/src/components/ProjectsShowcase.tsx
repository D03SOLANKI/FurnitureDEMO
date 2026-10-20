import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  task: string;
  solution: string;
  thumbImage: string;
  mainImage: string;
  client: {
    name: string;
    quote: string;
    avatar: string;
    rating: number;
  };
}

export const ProjectsShowcase: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'loft-30',
      title: 'Furnishing a 30 sqm loft',
      task: 'The client requested to make the interior modern and bright to visually enlarge the space.',
      solution:
        'We paid special attention to material selection and tactile qualities, combining natural wood, soft textiles, and warm finishes to create a calm and inviting atmosphere.\n\nEach piece was designed to balance functionality and visual lightness, ensuring the space feels open while still providing enough storage and comfort for everyday living.',
      thumbImage: '/assets/project-loft-kitchen.jpg',
      mainImage: '/assets/project-loft-main.jpg',
      client: {
        name: 'Tina Maro',
        quote:
          'Every piece fits perfectly into the layout, and the custom furniture made the loft feel truly ours.',
        avatar: '/assets/team-maja.jpg',
        rating: 5,
      },
    },
    {
      id: 'family-loft',
      title: 'Compact family loft with natural light focus',
      task: 'The family needed a functional yet warm interior that would accommodate everyday life, shared dinners, and quiet evenings.',
      solution:
        'We designed a custom kitchen table and a set of chairs specifically for the open-plan layout, ensuring comfort, flow, and visual lightness.\n\nWe also considered all lighting scenarios to support different moments of the day, from bright functional daylight to softer evening ambience.',
      thumbImage: '/assets/project-family-kitchen.jpg',
      mainImage: '/assets/project-family-main.jpg',
      client: {
        name: 'Nick Hingle',
        quote: 'The space feels calm, balanced, and much more spacious than before.',
        avatar: '/assets/team-anton.jpg',
        rating: 5,
      },
    },
    {
      id: 'minimal-bedroom',
      title: 'Warm minimal bedroom for compact living',
      task: 'The goal was to design a calm and functional sleeping area with built-in storage that would feel warm and free of visual clutter.',
      solution:
        'We developed a custom bedroom layout with integrated wardrobes and shelving, using natural wood tones and concealed lighting to create depth and atmosphere.',
      thumbImage: '/assets/project-bedroom-wardrobe.jpg',
      mainImage: '/assets/project-bedroom-main.jpg',
      client: {
        name: 'Stacy Ofen',
        quote: 'The bedroom feels incredibly peaceful and well-organized.',
        avatar: '/assets/team-lint.jpg',
        rating: 5,
      },
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full bg-[#FAF9F6] text-[#392615] pt-16 pb-20 px-6 md:px-12 overflow-hidden border-t border-[#392615]/10"
    >
      <div className="max-w-[1620px] mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#956e4b] font-medium block mb-2">
            Inspiration &amp; Case Studies
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight">
            Our new projects in full interior furnishing for apartments
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: idx * 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Left Column: Project Editorial Copy & Detail Card */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <span className="text-xs font-mono text-[#736557] uppercase tracking-wider block mb-2">
                  Project Description
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-6">
                  {proj.title}
                </h3>

                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase text-[#736557] tracking-wider mb-2">
                    Task:
                  </h4>
                  <p className="text-sm text-[#392615] font-normal leading-relaxed">
                    {proj.task}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start mt-2">
                  {/* Small Detail Photo */}
                  <div className="w-full sm:w-44 h-56 rounded-2xl overflow-hidden shrink-0 shadow-md border border-[#392615]/5">
                    <img
                      src={proj.thumbImage}
                      alt={`${proj.title} detail`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Solution Text */}
                  <div className="flex-1">
                    <h4 className="text-xs font-mono uppercase text-[#736557] tracking-wider mb-2">
                      We Made:
                    </h4>
                    <p className="text-xs sm:text-sm text-[#736557] leading-relaxed whitespace-pre-line font-normal">
                      {proj.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Large Architectural Image + Floating Testimonial */}
              <div className="lg:col-span-7 relative group">
                <div className="w-full h-[450px] sm:h-[540px] md:h-[620px] rounded-3xl overflow-hidden shadow-lg border border-[#392615]/10 bg-[#EFECE6]">
                  <img
                    src={proj.mainImage}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                </div>

                {/* Floating Testimonial Glass Badge */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="absolute bottom-6 right-6 max-w-xs sm:max-w-sm p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/80"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <img
                      src={proj.client.avatar}
                      alt={proj.client.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#956e4b]/30"
                    />
                    <div>
                      <span className="text-xs font-medium text-[#392615] block">
                        {proj.client.name}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#736557] leading-snug italic mb-2.5">
                    "{proj.client.quote}"
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(proj.client.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#956e4b] text-[#956e4b]" />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 05 Bottom Status */}
        <div className="w-full pt-16 border-t border-[#392615]/10 flex items-center justify-between text-xs text-[#736557] uppercase tracking-wider mt-16">
          <span className="font-mono font-medium text-sm text-[#392615]">05</span>
          <span className="font-medium">Be inspired</span>
        </div>
      </div>
    </section>
  );
};
