import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and market landscape to craft a winning digital strategy."
  },
  {
    number: "02",
    title: "Design & Concept",
    description: "Our designers create high-fidelity prototypes focused on user experience and high conversion rates."
  },
  {
    number: "03",
    title: "Development & Integration",
    description: "We build your solution using modern tech stacks, ensuring speed, security, and seamless WhatsApp integration."
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description: "Rigorous testing across devices and performance optimization to ensure a flawless launch."
  },
  {
    number: "05",
    title: "Launch & Growth",
    description: "We go live and provide ongoing support and analytics to help you scale and achieve your ROI goals."
  }
];

export default function ProcessPage() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-24 relative">
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </a>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 uppercase">
            OUR <span className="text-orange-500">PROCESS</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
            A step-by-step breakdown of how we transform your business vision into a digital reality.
          </p>
        </motion.div>
        
        {/* How We Deliver Success Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
              HOW WE <br />
              <span className="text-orange-500">DELIVER SUCCESS</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 max-w-md leading-relaxed">
              A systematic, transparent approach designed to take your business from zero to digital hero.
            </p>
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video">
              <img 
                src="https://picsum.photos/seed/mountain/1200/800" 
                alt="Process Landscape" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <span className="text-4xl md:text-5xl font-black text-white/10 group-hover:text-orange-500/20 transition-colors">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/10 p-10 md:p-12 rounded-[2.5rem]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Why Our Process Works</h3>
            <p className="text-white/40 leading-relaxed mb-10 text-lg">
              We've refined our workflow over 5 years and 200+ projects. Our method is built on 
              transparency, speed, and data-driven results.
            </p>
            <ul className="space-y-5">
              {[
                "Direct communication with developers",
                "Weekly progress updates",
                "Iterative feedback loops",
                "Focus on ROI and conversions"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/70">
                  <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/[0.03] border border-white/10 p-10 md:p-12 rounded-[2.5rem]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Timeline Expectations</h3>
            <p className="text-white/40 leading-relaxed mb-10 text-lg">
              While every project is unique, we strive for efficiency without compromising quality.
            </p>
            <div className="space-y-8">
              {[
                { label: "Landing Pages", time: "1-2 Weeks" },
                { label: "Business Websites", time: "3-5 Weeks" },
                { label: "E-Commerce Solutions", time: "6-10 Weeks" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-6">
                  <span className="text-white/70 text-lg">{item.label}</span>
                  <span className="text-orange-500 font-bold text-lg">{item.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
