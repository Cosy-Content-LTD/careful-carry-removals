import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years in London" },
  { value: "2,400+", label: "Successful Moves" },
  { value: "100%", label: "Fully Insured" },
  { value: "5★", label: "Average Rating" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80"
          alt="London city background"
          loading="lazy"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 bg-primary/90" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display font-black text-white leading-none mb-2" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                {stat.value}
              </div>
              <div className="text-white/70 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
