import { BlogSection } from "@/app/_components/blog-section";
import { HeroSection } from "@/app/_components/hero-section";
import { ProjectsSection } from "@/app/_components/projects-section";
import { SkillsSection } from "@/app/_components/skills-section";
import { ZennArticles } from "@/app/_components/zenn-articles";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ZennArticles feedUrl="https://zenn.dev/caru/feed" />
      <BlogSection />
      <Footer />
    </main>
  );
}
