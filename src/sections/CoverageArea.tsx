import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Central London",
  "North London",
  "South London",
  "East London",
  "West London",
  "Greater London",
  "City of London",
  "Canary Wharf",
  "Shoreditch",
  "Chelsea",
  "Hackney",
  "Brixton",
];

export default function CoverageArea() {
  return (
    <section id="coverage" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary block mb-4">Coverage</span>
            <h2 className="font-display font-black text-heading text-5xl md:text-6xl leading-tight mb-6">
              All Across
              <br />
              <span className="text-primary">London.</span>
            </h2>
            <p className="text-foreground/70 font-medium leading-relaxed text-lg mb-10">
              Wherever you&apos;re moving from or to in London, our teams are ready. We operate across every borough, neighbourhood, and district — no destination is too far.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span className="text-foreground/80 font-medium text-sm">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-foreground/60 text-sm font-bold">
              <MapPin size={18} className="text-primary" />
              Based in London &mdash; serving all London postcodes
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"
                alt="London cityscape coverage area"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={20} className="text-primary" />
                    <span className="text-white font-black text-lg">London-Wide Service</span>
                  </div>
                  <p className="text-white/70 text-sm font-medium">All postcodes covered &mdash; no extra travel charges within London</p>
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
