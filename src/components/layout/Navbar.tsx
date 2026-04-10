import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-5xl rounded-2xl border ${
        scrolled 
          ? "bg-black/60 backdrop-blur-xl border-white/10 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
          : "bg-white/5 backdrop-blur-md border-white/5 py-4"
      }`}
    >
      <div className="px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-black tracking-tighter text-white uppercase">
          Upfront <span className="text-blue-500">Digital Agency</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-white ${
                location.pathname === link.href ? "text-white" : "text-white/40"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 h-9 text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.href ? "text-orange-500" : "text-white/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full">
              Get Started
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
