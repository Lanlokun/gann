import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import Leadership from "@/components/about/Leadership";
import Governance from "@/components/about/Governance";
import Roadmap from "@/components/about/Roadmap";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About GANN | The Gambia Neuroscience Network",
  description:
    "Explore the story, founding team, proposed governance, and development roadmap of The Gambia Neuroscience Network.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <Leadership />
      <Governance />
      <Roadmap />
      <AboutCTA />
    </main>
  );
}