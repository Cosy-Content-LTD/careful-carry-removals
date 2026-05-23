import { motion } from "framer-motion";
import { Home, Building2, Package, Truck, ArrowUpDown, Star } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "House Removals",
    description: "Full residential moving service across London. We handle every item with exceptional care, from fragile antiques to bulky furniture.",
    highlight: "Most Popular",
  },
  {
    icon: Building2,
    title: "Office Relocations",
    description: "Minimise downtime with our efficient commercial moving service. We work around your schedule, including evenings and weekends.",
    highlight: null,
  },
  {
    icon: Package,
    title: "Packing Services",
    description: "Our professional team will pack your entire home or office using premium materials, ensuring nothing gets damaged in transit.",
    highlight: null,
  },
  {
    icon: Truck,
    title: "Man & Van",
    description: "Flexible, cost-effective solution for smaller moves, single-room clearances, or student relocations anywhere in London.",
    highlight: null,
  },
  {
    icon: ArrowUpDown,
    title: "Storage Solutions",
    description: "Secure, climate-controlled short and long-term storage options when your move needs a temporary holding solution.",
    highlight: null,
  },
  {
    icon: Star,
    title: "Premium White Glove",
    description: "The ultimate moving experience — fully bespoke, item-level inventory, specialist handling, and a dedicated move manager.",
    highlight: "Premium",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Big decorative number */}
      <div className="absolute -top-4 -left-4 font-black text-[20rem] text-muted/30 leading-none select-none pointer-events-none font-display">
        01
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold uppercase tracking-widest text-primary block mb-4"
            >
              What We Do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-heading text-5xl md:text-6xl leading-tight"
            >
              Every Move,
              <br />
              <span className="text-primary">Covered.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/70 text-lg font-medium leading-relaxed max-w-md"
          >
            From a single room to a full corporate relocation, our certified team delivers a stress-free move every single time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-background border border-border/50 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {service.highlight && (
                <span className="absolute top-6 right-6 text-xs font-black uppercase tracking-widest bg-primary text-white px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              )}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-full translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />

              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <service.icon size={26} className="text-primary" />
              </div>

              <h3 className="font-display font-black text-heading text-xl mb-3">{service.title}</h3>
              <p className="text-foreground/65 font-medium leading-relaxed text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
