import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Eco-Friendly Store",
    category: "E-Commerce",
    image: "https://picsum.photos/seed/eco/800/600",
    link: "/portfolio/eco-friendly-store",
  },
  {
    title: "Modern Real Estate",
    category: "Landing Page",
    image: "https://picsum.photos/seed/realestate/800/600",
    link: "/portfolio/modern-real-estate",
  },
  {
    title: "Fitness App Launch",
    category: "Marketing Site",
    image: "https://picsum.photos/seed/fitness/800/600",
    link: "/portfolio/fitness-app-launch",
  },
  {
    title: "Gourmet Food Delivery",
    category: "WhatsApp Integration",
    image: "https://picsum.photos/seed/food/800/600",
    link: "/portfolio/gourmet-food-delivery",
  },
  {
    title: "Tech Startup Portal",
    category: "SaaS",
    image: "https://picsum.photos/seed/tech/800/600",
    link: "/portfolio/tech-startup-portal",
  },
  {
    title: "Luxury Watch Boutique",
    category: "E-Commerce",
    image: "https://picsum.photos/seed/watch/800/600",
    link: "/portfolio/luxury-watch-boutique",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8">
            OUR <span className="text-orange-500">WORK</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            A showcase of digital excellence. We help brands stand out in a crowded digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <a 
                  href={project.link} 
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
