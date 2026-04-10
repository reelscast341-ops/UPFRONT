import { motion } from "motion/react";
import { DollarSign, BarChart3, Repeat, Lock, Settings, Headset } from "lucide-react";

const benefits = [
  {
    title: "Instant Savings",
    description: "Get immediate savings on every purchase, powered by AI to optimize your transactions.",
    icon: DollarSign,
  },
  {
    title: "Real-Time Insights",
    description: "Make smarter decisions with live data and actionable insights, delivered in real-time to stay ahead of the curve.",
    icon: BarChart3,
  },
  {
    title: "Flexible Plans",
    description: "Choose plans that adapt to your business needs, offering unparalleled scalability and cost-effectiveness.",
    icon: Repeat,
  },
  {
    title: "Secure Transactions",
    description: "Prioritize safety with cutting-edge encryption and robust security features for every interaction.",
    icon: Lock,
  },
  {
    title: "Adaptive Systems",
    description: "Leverage AI-driven systems that evolve with your business, ensuring efficiency and innovation at every step.",
    icon: Settings,
  },
  {
    title: "Dedicated Support",
    description: "Access expert assistance 24/7 to ensure you're never alone on your growth journey.",
    icon: Headset,
  },
];

const tags = [
  "Smart Insights", "Instant Savings", "Flexible Payments", "Intelligent Spending", "Customizable Plans", "Smart Insights",
  "Reports", "Custom AI Plans", "Dedicated Support", "Growth With AI", "Real-Time Automation", "Real-Time Reports"
];

export default function Process() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-4 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white/40 max-w-2xl mx-auto text-lg"
          >
            Innovative tools and powerful insights designed to elevate your business
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              tabIndex={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all">
                  <benefit.icon className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full group-hover:bg-blue-600/10 transition-all"></div>
            </motion.div>
          ))}
        </div>

        {/* Tag Carousels */}
        <div className="mt-20 space-y-6 w-full">
          {/* Tag Carousel - Line 1 */}
          <div className="relative flex overflow-x-hidden border border-white/5 py-3 bg-white/[0.02] rounded-2xl [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {[...tags.slice(0, 6), ...tags.slice(0, 6), ...tags.slice(0, 6)].map((tag, i) => (
                <span
                  key={i}
                  className="mx-8 text-xl md:text-3xl font-black text-white/10 hover:text-blue-500/40 transition-all duration-700 cursor-default tracking-tighter uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tag Carousel - Line 2 */}
          <div className="relative flex overflow-x-hidden border border-white/5 py-3 bg-white/[0.02] rounded-2xl [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
              {[...tags.slice(6), ...tags.slice(6), ...tags.slice(6)].map((tag, i) => (
                <span
                  key={i}
                  className="mx-8 text-xl md:text-3xl font-black text-white/10 hover:text-blue-500/40 transition-all duration-700 cursor-default tracking-tighter uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
