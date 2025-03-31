import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
