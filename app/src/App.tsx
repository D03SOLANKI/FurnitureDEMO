import React from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { CatalogSlider } from './components/CatalogSlider';
import { Onda3DSpotlight } from './components/Onda3DSpotlight';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ServicesProcess } from './components/ServicesProcess';
import { TestimonialsMetrics } from './components/TestimonialsMetrics';
import { TeamMoodboard } from './components/TeamMoodboard';
import { ContactSection } from './components/ContactSection';
import { FooterSocial } from './components/FooterSocial';

export const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#FAF9F6] selection:bg-[#956e4b] selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Categories />
          <CatalogSlider />
          <Onda3DSpotlight />
          <ProjectsShowcase />
          <ServicesProcess />
          <TestimonialsMetrics />
          <TeamMoodboard />
          <ContactSection />
        </main>
        <FooterSocial />
      </div>
    </SmoothScroll>
  );
};

export default App;
