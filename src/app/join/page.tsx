
import type { Metadata } from "next";

import JoinHero from "@/components/join/JoinHero";
import WhyJoin from "@/components/join/WhyJoin";
import WhoCanJoin from "@/components/join/WhoCanJoin";
import JoinInterestForm from "@/components/join/JoinInterestForm";
import WhatHappensNext from "@/components/join/WhatHappensNext";
import JoinCTA from "@/components/join/JoinCTA";

export const metadata: Metadata = {
  title: "Join GANN | The Gambia Neuroscience Network",
  description:
    "Express your interest in The Gambia Neuroscience Network, an emerging community connecting neuroscience, computational neuroscience, machine learning, NeuroAI, healthcare, and education.",
};

export default function JoinPage() {
  return (
    <main>
      <JoinHero />
      <WhyJoin />
      <WhoCanJoin />
      <JoinInterestForm />
      <WhatHappensNext />
      <JoinCTA />
    </main>
  );
}
