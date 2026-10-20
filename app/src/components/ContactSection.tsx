import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-[900px] flex flex-col justify-between pt-20 pb-12 px-6 md:px-12 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/contact-bg.jpg')` }}
    >
      {/* Dark Ambient Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-[1620px] w-full mx-auto flex-1 flex flex-col justify-center items-center py-12">
        {/* Floating Tactile Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/80"
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-[#392615]">
              Get in Touch
            </h2>
            <p className="text-xs text-[#736557] mt-2">
              Bespoke commissions &amp; interior collaborations
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#956e4b]/15 text-[#956e4b] flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-medium text-[#392615]">
                Thank you for reaching out
              </h3>
              <p className="text-xs text-[#736557] max-w-xs mx-auto leading-relaxed">
                Our master craftsman will review your space request and reply within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#736557] mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F6F5F2] border border-[#392615]/10 text-[#392615] text-sm placeholder-[#736557]/50 focus:outline-none focus:ring-2 focus:ring-[#956e4b]/50 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#736557] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@framer.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F6F5F2] border border-[#392615]/10 text-[#392615] text-sm placeholder-[#736557]/50 focus:outline-none focus:ring-2 focus:ring-[#956e4b]/50 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#736557] mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Write here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F6F5F2] border border-[#392615]/10 text-[#392615] text-sm placeholder-[#736557]/50 focus:outline-none focus:ring-2 focus:ring-[#956e4b]/50 focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#585048] hover:bg-[#392615] text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer mt-2"
              >
                Submit
              </button>

              <p className="text-[10px] text-center text-[#736557]/70 uppercase tracking-wider pt-2">
                By submitting, you agree to our <strong>Terms</strong> and <strong>Privacy Policy</strong>.
              </p>
            </form>
          )}
        </motion.div>
      </div>

      {/* Section 10 Bottom Status */}
      <div className="relative z-10 max-w-[1620px] w-full mx-auto pt-6 border-t border-white/20 flex items-center justify-between text-xs text-white/80 uppercase tracking-wider">
        <span className="font-mono font-medium text-sm text-white">10</span>
        <span className="font-medium">Get in touch</span>
      </div>
    </section>
  );
};
