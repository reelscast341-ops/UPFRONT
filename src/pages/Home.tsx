import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Services />
      <Benefits />
      <Pricing />
      <Contact />
    </main>
  );
}
