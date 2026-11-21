
import type { Metadata } from "next";

import ResearchHero from "@/components/research/ResearchHero";
import ResearchIntro from "@/components/research/ResearchIntro";
import ResearchAreas from "@/components/research/ResearchAreas";
import ResearchApproach from "@/components/research/ResearchApproach";
import ResearchCollaboration from "@/components/research/ResearchCollaboration";
import ResearchCTA from "@/components/research/ResearchCTA";

export const metadata: Metadata = {
  title: "Research | The Gambia Neuroscience Network",
  description:
    "Explore GANN's emerging research priorities in computational neuroscience, neuroimaging, machine learning, NeuroAI, brain-computer interfaces, and brain health.",
};

export default function ResearchPage() {
  return (
    <main>
      <ResearchHero />
      <ResearchIntro />
      <ResearchAreas />
      <ResearchApproach />
      <ResearchCollaboration />
      <ResearchCTA />
    </main>
  );
}
