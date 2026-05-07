import React from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    software: false,
    consulting: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. Our team will be in touch shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-bg-card p-6 md:p-8 rounded-lg border border-white/5 shadow-2xl flex flex-col h-full">
      <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-6 leading-relaxed">Need help finding an expert solution?</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          id="input-name"
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
          placeholder="Full Name"
        />
        <input
          id="input-company"
          required
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
          placeholder="Company Name"
        />
        <input
          id="input-email"
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
          placeholder="Email Address"
        />
        <input
          id="input-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
          placeholder="Phone Number"
        />
      </div>

      <div className="mb-4">
        <textarea
          id="input-message"
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-primary transition-colors resize-none h-32 placeholder:text-white/20"
          placeholder="Your Message"
        />
      </div>

      <div className="flex gap-6 mb-6">
        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60 cursor-pointer hover:text-primary transition-colors">
          <input
            type="checkbox"
            name="software"
            checked={formData.software}
            onChange={handleChange}
            className="accent-primary"
          />
          Software
        </label>
        <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60 cursor-pointer hover:text-primary transition-colors">
          <input
            type="checkbox"
            name="consulting"
            checked={formData.consulting}
            onChange={handleChange}
            className="accent-primary"
          />
          Consulting
        </label>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="w-full bg-primary text-black font-bold py-4 rounded-sm heading-font uppercase tracking-widest text-[10px] hover:brightness-110 transition-all shadow-lg shadow-primary/10 mt-auto"
      >
        Send Inquiry
      </motion.button>
    </form>
  );
}
