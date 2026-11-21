
import type { Metadata } from "next";

import OpportunitiesHero from "@/components/opportunities/OpportunitiesHero";
import OpportunityCategories from "@/components/opportunities/OpportunityCategories";
import FeaturedOpportunities from "@/components/opportunities/FeaturedOpportunities";
import ResearchCollaboration from "@/components/opportunities/ResearchCollaboration";
import EarlyCareerSupport from "@/components/opportunities/EarlyCareerSupport";
import ShareOpportunity from "@/components/opportunities/ShareOpportunity";
import OpportunitiesCTA from "@/components/opportunities/OpportunitiesCTA";

export const metadata: Metadata = {
  title: "Opportunities | GANN",
  description:
    "Explore scholarships, fellowships, research positions, grants, conferences, and collaborations in neuroscience, machine learning, and NeuroAI through The Gambia Neuroscience Network.",
};

export default function OpportunitiesPage() {
  return (
    <main>
      <OpportunitiesHero />
      <OpportunityCategories />
      <FeaturedOpportunities />
      <ResearchCollaboration />
      <EarlyCareerSupport />
      <ShareOpportunity />
      <OpportunitiesCTA />
    </main>
  );
}
