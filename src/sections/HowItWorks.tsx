import { motion } from "framer-motion";
import { ClipboardList, CalendarCheck, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Get Your Free Quote",
    body: "Tell us about your move — property size, date, and any special requirements. We&apos;ll send you a clear, no-obligation quote within hours.",
  },
  {
    num: "02",
    icon: CalendarCheck,
    title: "Book Your Date",
    body: "Pick a date that suits you. We confirm your booking instantly and assign a dedicated removal team to your move.",
  },
  {
    num: "03",
    icon: Truck,
    title: "We Arrive & Pack",
    body: "Our punctual team arrives with all equipment and materials. We handle the heavy lifting so you don&apos;t have to.",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "Settle In & Relax",
    body: "We deliver every item safely to your new address, place furniture to your instructions, and leave you to enjoy your new space.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-section-alt relative overflow-hidden">
      {/* Big decorative number */}
      <div className="absolute -bottom-12 -right-4 font-black text-[20rem] text-foreground/[0.04] leading-none select-none pointer-events-none font-display">
        03
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-primary block mb-4"
          >
            Simple Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-heading text-5xl md:text-6xl leading-tight"
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center shadow-lg z-10 relative">
                  <step.icon size={26} className="text-primary" />
                </div>
                <div className="absolute -top-3 -right-3 font-black text-2xl text-primary/20 font-display">{step.num}</div>
              </div>
              <h3 className="font-display font-black text-heading text-lg mb-3">{step.title}</h3>
              <p className="text-foreground/65 font-medium leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: step.body }} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary text-white font-bold text-lg px-12 py-5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Start Your Move Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
