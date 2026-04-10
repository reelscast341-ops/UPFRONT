import { motion } from "motion/react";
import { Users, Award, Clock, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
              5+ YEARS OF <br />
              <span className="text-orange-500">DIGITAL GROWTH</span>
            </h1>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Founded in 2021, Upfront has been at the forefront of the digital revolution in India. 
              We started with a simple mission: to help small businesses compete with giants by 
              giving them the digital tools they need to succeed.
            </p>
            <p className="text-white/40 text-lg mb-10 leading-relaxed">
              Our team of expert developers, designers, and strategists work tirelessly to ensure 
              every project we deliver is a masterpiece of performance and conversion.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">20+</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">Experts</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">15+</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">Awards</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] overflow-hidden aspect-square border border-white/10"
          >
            <img 
              src="https://picsum.photos/seed/agency/1000/1000" 
              alt="Our Team" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Location Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black text-white tracking-tighter mb-6 uppercase">Our Office</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-orange-500 shrink-0" />
                <p className="text-white/60">
                  GK-2 Main Market, <br />
                  Greater Kailash, New Delhi, <br />
                  Delhi 110048, India
                </p>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-orange-500 shrink-0" />
                <p className="text-white/60">
                  Mon - Fri: 10:00 AM - 7:00 PM <br />
                  Sat: 11:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-[2rem] overflow-hidden h-[400px] border border-white/10 relative">
            {/* Google Maps Embed Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.247631313!2d77.2404!3d28.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c4!2sGreater%20Kailash%20II%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
