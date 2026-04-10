import { motion } from "motion/react";
import { Layout, MessageSquare, ShoppingBag, Globe, Zap, BarChart } from "lucide-react";

const services = [
  {
    title: "High-Conversion Landing Pages",
    description: "We design and build landing pages that don't just look pretty—they convert visitors into loyal customers.",
    icon: Layout,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "WhatsApp Business Integration",
    description: "Automate your customer support and sales directly through WhatsApp. Real-time engagement at scale.",
    icon: MessageSquare,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "E-Commerce Solutions",
    description: "From Shopify to custom builds, we create seamless shopping experiences that drive revenue.",
    icon: ShoppingBag,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "SEO & Performance",
    description: "Lightning-fast websites optimized for search engines to ensure your business gets found.",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    title: "Digital Strategy",
    description: "We don't just build; we strategize. 5+ years of experience helping small businesses scale online.",
    icon: Globe,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Analytics & ROI Tracking",
    description: "Data-driven decisions. We set up comprehensive tracking to measure every click and conversion.",
    icon: BarChart,
    color: "bg-red-500/10 text-red-500",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            FUTURE-PROOF <span className="text-blue-500 text-glow">SOLUTIONS</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            We combine cutting-edge technology with creative strategy to build digital assets that scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <Layout className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">High-Conversion Ecosystems</h3>
              <p className="text-white/50 max-w-md leading-relaxed">
                We don't just build pages; we build conversion machines. Our landing pages are optimized for speed, SEO, and user psychology.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700"></div>
            <div className="mt-12 flex gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex-1">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Uptime</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex-1">
                <div className="text-2xl font-bold text-white mb-1">&lt;1s</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Load Time</div>
              </div>
            </div>
          </motion.div>

          {/* Small Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">WhatsApp CRM</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Seamlessly integrate WhatsApp into your sales funnel for real-time engagement.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full"></div>
          </motion.div>

          {/* Small Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">E-Com 2.0</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Next-gen shopping experiences that drive repeat customers and higher AOV.
              </p>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full"></div>
          </motion.div>

          {/* Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Data-Driven Growth</h3>
                <p className="text-white/50 leading-relaxed">
                  We provide deep insights into your customer behavior, allowing you to optimize every touchpoint.
                </p>
              </div>
              <div className="flex-1 w-full bg-black/40 border border-white/5 rounded-2xl p-6">
                <div className="h-32 flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className="flex-1 bg-purple-500/40 rounded-t-sm"
                    ></motion.div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-[10px] text-white/20 font-bold uppercase tracking-widest">
                  <span>Mon</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
