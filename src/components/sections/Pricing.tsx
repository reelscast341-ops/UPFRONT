import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "₹7,000",
    description: "Perfect for small businesses just starting their digital journey.",
    features: [
      "Single Page Landing Page",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "WhatsApp Click-to-Chat",
      "1 Month Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹11,000",
    description: "The ultimate package for growing businesses needing a solid presence.",
    features: [
      "Up to 5 Pages Website",
      "Advanced SEO & Performance",
      "WhatsApp Automation Setup",
      "Contact Form Integration",
      "Google Maps Integration",
      "3 Months Support",
    ],
    cta: "Choose Professional",
    popular: false,
  },
  {
    name: "Advanced",
    price: "₹13,000",
    description: "Enhanced features and extended support for scaling businesses.",
    features: [
      "Up to 10 Pages Website",
      "Advanced SEO & Performance",
      "WhatsApp Automation Setup",
      "Custom Form Integration",
      "Google Maps Integration",
      "6 Months Support",
      "Priority Email Support",
    ],
    cta: "Choose Advanced",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹25,000",
    description: "Full-scale e-commerce and custom solutions for market leaders.",
    features: [
      "Full E-Commerce Solution",
      "Custom Dashboard/Admin",
      "Advanced WhatsApp CRM",
      "Payment Gateway Integration",
      "Priority 24/7 Support",
      "Monthly ROI Reports",
    ],
    cta: "Contact for Premium",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
            TRANSPARENT <span className="text-blue-500">PRICING</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your business needs. No hidden costs, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 rounded-3xl border transition-all duration-500 flex flex-col ${
                tier.popular 
                  ? "bg-white/10 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.1)]" 
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-black text-white">{tier.price}</span>
                  <span className="text-white/40 text-xs">/ project</span>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-blue-500" />
                    </div>
                    <span className="text-white/70 text-xs">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  tier.popular 
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]" 
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
