import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-6">
            <Link to="/" className="text-3xl font-black tracking-tighter text-white mb-8 inline-block">
              UPFRONT<span className="text-orange-500">.</span>
            </Link>
            <p className="text-white/40 text-lg max-w-md mb-10 leading-relaxed">
              Empowering small businesses with world-class digital solutions. 
              We bridge the gap between your vision and a powerful online presence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Quick Links</h4>
            <ul className="space-y-5">
              {["Home", "Portfolio", "Process", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                    className="text-white/40 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Services</h4>
            <ul className="space-y-5">
              {[
                "Landing Pages",
                "WhatsApp Integration",
                "E-Commerce",
                "SEO Optimization",
                "Digital Strategy"
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/40 hover:text-white transition-colors text-sm font-medium cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Upfront Digital Agency. All rights reserved.
          </div>
          <div className="flex gap-10 text-xs text-white/20 tracking-wide">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
