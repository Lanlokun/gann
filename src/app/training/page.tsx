
import type { Metadata } from "next";

import TrainingHero from "@/components/training/TrainingHero";
import TrainingIntro from "@/components/training/TrainingIntro";
import TrainingPathways from "@/components/training/TrainingPathways";
import TrainingWorkshops from "@/components/training/TrainingWorkshops";
import TrainingAudience from "@/components/training/TrainingAudience";
import LearningResources from "@/components/training/LearningResources";
import TrainingCTA from "@/components/training/TrainingCTA";

export const metadata: Metadata = {
  title: "Training & Education | GANN",
  description:
    "Explore proposed neuroscience, computational neuroscience, machine learning, and NeuroAI learning opportunities at The Gambia Neuroscience Network.",
};

export default function TrainingPage() {
  return (
    <main>
      <TrainingHero />
      <TrainingIntro />
      <TrainingPathways />
      <TrainingWorkshops />
      <TrainingAudience />
      <LearningResources />
      <TrainingCTA />
    </main>
  );
}
