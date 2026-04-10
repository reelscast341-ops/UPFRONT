import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const businesses = [
    "Dune",
    "Oasis",
    "Asterisk",
    "Cooks",
    "Opal",
    "LanderX",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-20">
      {/* Background Grid and Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* User Avatars */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-black"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <span className="text-white/60 text-xs font-medium">
              Join <span className="text-white font-bold">15,725+</span> other loving customers
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-8 max-w-5xl mx-auto">
            The best platform to <br />
            grow your business
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            The most powerful tools to boost sales, hire the best people, and access exclusive market insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-10 py-7 text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-lg px-10 py-7 text-lg font-bold transition-all hover:scale-105 active:scale-95"
              onClick={() => navigate('/portfolio')}
            >
              Book a Demo
            </Button>
          </div>
          
          <div className="flex justify-center mb-24">
            <Button 
              variant="ghost" 
              className="text-white/60 hover:text-white hover:bg-white/5 rounded-lg px-8 py-4 text-sm font-bold transition-all group"
              onClick={() => navigate('/process')}
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Trusted By Carousel */}
        <div className="mt-32 max-w-5xl mx-auto w-full">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
            Trusted by industry leaders
          </p>
          <div className="relative flex overflow-x-hidden border border-white/5 py-6 bg-white/[0.02] rounded-3xl [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {[...businesses, ...businesses, ...businesses].map((biz, i) => (
                <span 
                  key={i} 
                  className="mx-6 text-sm font-black text-white/10 hover:text-blue-500/40 transition-all duration-700 cursor-default tracking-widest uppercase"
                >
                  {biz}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
