import React, { useState } from 'react';
import { ArrowUp, ArrowRight, Check } from 'lucide-react';

export const FooterSocial: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const socialTiles = [
    { id: 1, img: '/assets/social-1.jpg', tag: '@graftstudio.craft' },
    { id: 2, img: '/assets/social-2.jpg', tag: '@graftstudio.sculpture' },
    { id: 3, img: '/assets/social-3.jpg', tag: '@graftstudio.living' },
    { id: 4, img: '/assets/social-4.jpg', tag: '@graftstudio.chair' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'Youtube', href: '#' },
    { label: 'X', href: '#' },
    { label: 'Medium', href: '#' },
    { label: 'Tiktok', href: '#' },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#FAF9F6] text-[#392615] pt-16 pb-12 px-6 md:px-12 overflow-hidden border-t border-[#392615]/10"
    >
      <div className="max-w-[1620px] mx-auto">
        {/* Top Header */}
        <div className="mb-12">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#392615]">
            Our social hub
          </h2>
        </div>

        {/* 4-Tile Instagram Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {socialTiles.map((tile) => (
            <div
              key={tile.id}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-sm border border-[#392615]/10 bg-white group cursor-pointer"
            >
              <img
                src={tile.img}
                alt="Instagram furniture showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Instagram Icon Badge */}
              <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Section 11 Marker */}
        <div className="w-full pt-6 pb-12 border-t border-[#392615]/10 flex items-center justify-between text-xs text-[#736557] uppercase tracking-wider">
          <span className="font-mono font-medium text-sm text-[#392615]">11</span>
          <span className="font-medium">Social media</span>
        </div>

        {/* Huge Watermark Graphic Area with Back-to-Top Button */}
        <div className="relative py-12 select-none overflow-hidden flex items-center justify-between">
          <h1 className="font-display font-medium text-[#392615]/10 tracking-[-0.04em] leading-[0.85] text-[100px] sm:text-[180px] md:text-[260px] lg:text-[340px] pointer-events-none">
            Graft.
          </h1>

          {/* Floating Back to Top Button */}
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#392615] text-white flex items-center justify-center shadow-xl hover:bg-[#523720] hover:scale-105 transition-all cursor-pointer z-10 shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Main Footer Links & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 pb-12 border-t border-[#392615]/10">
          {/* Social Links List */}
          <div className="md:col-span-3 space-y-2.5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="block text-sm text-[#736557] hover:text-[#392615] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Studio Address & Phone */}
          <div className="md:col-span-4 text-sm text-[#736557] leading-relaxed space-y-3 font-normal">
            <p>
              Strada di Montegiano<br />
              42, 60030 Marche,<br />
              Italia
            </p>
            <p className="font-mono text-[#392615] font-medium pt-2">
              +47 973 46 128
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#392615] mb-2 tracking-tight">
              Subscribe to Newsletter
            </h3>
            <p className="text-xs text-[#736557] mb-6">
              Receive news and descriptions every month:
            </p>

            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#956e4b]/15 text-[#956e4b] text-xs font-medium">
                <Check className="w-4 h-4" />
                <span>You're subscribed to the monthly dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="jane@framer.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-5 py-3.5 pr-12 rounded-full bg-[#EFECE6] text-sm text-[#392615] placeholder-[#736557]/50 focus:outline-none focus:ring-2 focus:ring-[#956e4b]/40 focus:bg-white transition-all border border-[#392615]/10"
                />
                <button
                  type="submit"
                  className="absolute right-2 w-9 h-9 rounded-full bg-[#392615] text-white flex items-center justify-center hover:bg-[#523720] transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal Line */}
        <div className="pt-8 border-t border-[#392615]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736557] gap-4">
          <p>Graft - Furniture &amp; Interior Design Studio. All Right Reserved</p>
          <p>Website design recreation inspired by Stacy More</p>
        </div>
      </div>
    </footer>
  );
};
