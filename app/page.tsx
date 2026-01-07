import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/work/selected-work";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <SelectedWork />

      <Footer />
    </main>
  );
}
