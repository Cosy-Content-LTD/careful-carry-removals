import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')` }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-secondary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-8 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-0.5 w-12 bg-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary">London&apos;s Trusted Removals</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            Moving You
            <br />
            <span className="text-primary">Forward,</span>
            <br />
            <span className="text-white/90">With Care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/75 text-xl font-medium leading-relaxed mb-10 max-w-xl"
          >
            Professional, fully insured removal services across London. Over 10 years of careful, certified expertise getting your home or office moved safely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#contact"
              className="group flex items-center gap-3 bg-primary text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="tel:0234567891"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: ShieldCheck, label: "Fully Insured" },
              { icon: Award, label: "Certified Professionals" },
              { icon: Award, label: "10+ Years Experience" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Icon size={14} className="text-primary" />
                </div>
                <span className="text-white/80 text-sm font-bold">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
