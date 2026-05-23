import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", service: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 bg-section-alt relative overflow-hidden">
      {/* Big decorative number */}
      <div className="absolute -top-8 -left-4 font-black text-[20rem] text-foreground/[0.04] leading-none select-none pointer-events-none font-display">
        04
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary block mb-4">Get In Touch</span>
            <h2 className="font-display font-black text-heading text-5xl md:text-6xl leading-tight mb-6">
              Ready to
              <br />
              <span className="text-primary">Move?</span>
            </h2>
            <p className="text-foreground/70 font-medium leading-relaxed text-lg mb-12">
              Get your free, no-obligation quote today. Our team will respond within a few hours with a clear price and available dates.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: Phone, label: "Call Us", value: "0234 567 891", href: "tel:0234567891" },
                { icon: Mail, label: "Email Us", value: "hello@carefulcarry.co.uk", href: "mailto:hello@carefulcarry.co.uk" },
                { icon: MapPin, label: "Based In", value: "London, United Kingdom", href: null },
                { icon: Clock, label: "Hours", value: "Mon–Sat: 7am – 8pm", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="font-bold text-heading hover:text-primary transition-colors duration-200">{value}</a>
                    ) : (
                      <span className="font-bold text-heading">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-background rounded-[2rem] shadow-xl border border-border/30 p-8 sm:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} className="text-primary" />
                  </div>
                  <h3 className="font-display font-black text-heading text-2xl mb-3">Message Sent!</h3>
                  <p className="text-foreground/65 font-medium">We&apos;ll be in touch within a few hours with your free quote.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-black text-heading text-2xl mb-6">Get a Free Quote</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-section-alt border border-border/50 rounded-xl px-4 py-3 text-sm font-medium text-heading placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="07700 000000"
                        className="w-full bg-section-alt border border-border/50 rounded-xl px-4 py-3 text-sm font-medium text-heading placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-section-alt border border-border/50 rounded-xl px-4 py-3 text-sm font-medium text-heading placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-section-alt border border-border/50 rounded-xl px-4 py-3 text-sm font-medium text-heading focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                    >
                      <option value="">Select a service...</option>
                      <option>House Removals</option>
                      <option>Office Relocations</option>
                      <option>Packing Services</option>
                      <option>Man &amp; Van</option>
                      <option>Storage Solutions</option>
                      <option>Premium White Glove</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Tell Us More</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Move date, from/to addresses, any special items..."
                      className="w-full bg-section-alt border border-border/50 rounded-xl px-4 py-3 text-sm font-medium text-heading placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-black text-base py-5 rounded-full shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Send My Free Quote Request
                    <Send size={18} />
                  </button>

                  <p className="text-center text-xs text-foreground/40 font-medium">No spam. No obligation. Response within hours.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
