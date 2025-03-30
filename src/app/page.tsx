import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <HeroSection />
    </main>
  );
}
