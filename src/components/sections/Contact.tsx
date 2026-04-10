import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-24 bg-black border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">
              LET'S <span className="text-orange-500">TALK</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 max-w-md">
              Ready to take your business to the next level? Fill out the form or reach out directly.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Email Us</div>
                  <div className="text-white font-medium">hello@upfront.agency</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Call Us</div>
                  <div className="text-white font-medium">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Visit Us</div>
                  <div className="text-white font-medium">GK-2 Main Market, Delhi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-white/50 mb-8">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/70">Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-orange-500 transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/70">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-orange-500 transition-colors" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white/70">Service Interested In</Label>
                  <Input id="service" placeholder="e.g. Landing Page, WhatsApp Integration" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-orange-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/70">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." className="bg-white/5 border-white/10 text-white min-h-[150px] rounded-xl focus:border-orange-500 transition-colors" required />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-8 rounded-xl font-bold text-lg group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
