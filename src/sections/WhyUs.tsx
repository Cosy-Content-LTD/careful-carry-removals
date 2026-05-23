import { motion } from "framer-motion";
import { ShieldCheck, Clock, Headphones, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Insured & Certified",
    body: "Every move is backed by comprehensive insurance and carried out by certified removal professionals. Your belongings are in safe hands.",
  },
  {
    icon: Clock,
    title: "Punctual Every Time",
    body: "We respect your time. Our teams arrive on schedule, work efficiently, and complete your move within the agreed timeframe.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    body: "A real person is always on hand from the moment you book until the last box is unpacked. No bots, no hold music.",
  },
  {
    icon: Sparkles,
    title: "Spotless Track Record",
    body: "Over a decade of successful moves in London. We&apos;ve built our reputation one careful carry at a time.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden">
      {/* Full-bleed image half */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden min-h-[400px] lg:min-h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
            alt="Careful Carry removals team at work"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/30" />
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-8 bg-white rounded-2xl px-6 py-5 shadow-2xl border border-border/20"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <ShieldCheck size={22} className="text-white" />
              </div>
              <div>
                <div className="font-black text-heading text-lg">Fully Insured</div>
                <div className="text-foreground/60 text-sm font-medium">Certified Professionals</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="bg-secondary py-20 px-8 sm:px-14 flex flex-col justify-center relative overflow-hidden">
          {/* Big decorative number */}
          <div className="absolute -top-8 -right-4 font-black text-[16rem] text-white/5 leading-none select-none pointer-events-none font-display">
            02
          </div>

          <div className="relative">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold uppercase tracking-widest text-primary block mb-4"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-white text-4xl md:text-5xl leading-tight mb-12"
            >
              A Removal Company
              <br />You Can <span className="text-primary">Trust.</span>
            </motion.h2>

            <div className="space-y-8">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                    <r.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-white text-base mb-1">{r.title}</h3>
                    <p className="text-white/60 font-medium leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: r.body }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
