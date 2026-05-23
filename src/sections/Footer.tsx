import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">C</span>
              </div>
              <div>
                <div className="font-black text-white text-base">Careful Carry Removals</div>
                <div className="text-primary text-xs font-bold uppercase tracking-widest">London</div>
              </div>
            </div>
            <p className="text-white/55 font-medium leading-relaxed text-base mb-8 max-w-sm">
              London&apos;s trusted removal specialists. Over 10 years of careful, certified, fully insured moves across every corner of the city.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:0234567891" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors duration-200 font-medium text-sm group">
                <Phone size={15} className="text-primary" />
                0234 567 891
                <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="mailto:hello@carefulcarry.co.uk" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors duration-200 font-medium text-sm group">
                <Mail size={15} className="text-primary" />
                hello@carefulcarry.co.uk
                <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 text-white/70 font-medium text-sm">
                <MapPin size={15} className="text-primary" />
                London, United Kingdom
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-white text-sm uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3">
              {["House Removals", "Office Relocations", "Packing Services", "Man & Van", "Storage Solutions", "White Glove Service"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/55 hover:text-primary transition-colors duration-200 font-medium text-sm">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-white text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Why Choose Us", href: "#why-us" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Coverage Areas", href: "#coverage" },
                { label: "Contact Us", href: "#contact" },
                { label: "Get a Quote", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/55 hover:text-primary transition-colors duration-200 font-medium text-sm">{label}</a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Trust Badges</div>
              <div className="text-white/70 text-xs font-medium leading-relaxed">Fully Insured &bull; Certified Professionals &bull; 10+ Years Experience</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-medium">
            &copy; {year} Careful Carry Removals. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white/70 text-xs font-medium transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/70 text-xs font-medium transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
