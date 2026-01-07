import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
