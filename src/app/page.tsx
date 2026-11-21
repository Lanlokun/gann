
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import AboutSection from "@/components/home/AboutSection";
import ResearchFocus from "@/components/home/ResearchFocus";
import GetInvolved from "@/components/home/GetInvolved";
import NewsEvents from "@/components/home/NewsEvents";
import Partners from "@/components/home/Partners";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <AboutSection />
      <ResearchFocus />
      <GetInvolved />
      <NewsEvents />
      <Partners />
    </main>
  );
}
