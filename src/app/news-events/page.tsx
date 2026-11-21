
import type { Metadata } from "next";

import NewsHero from "@/components/news-events/NewsHero";
import FeaturedStory from "@/components/news-events/FeaturedStory";
import LatestNews from "@/components/news-events/LatestNews";
import EventsSection from "@/components/news-events/EventsSection";
import CommunityStories from "@/components/news-events/CommunityStories";
import NewsCTA from "@/components/news-events/NewsCTA";

export const metadata: Metadata = {
  title: "News & Events | GANN",
  description:
    "Discover neuroscience news, research highlights, community announcements, workshops, and international scientific events through The Gambia Neuroscience Network.",
};

export default function NewsEventsPage() {
  return (
    <main>
      <NewsHero />
      <FeaturedStory />
      <LatestNews />
      <EventsSection />
      <CommunityStories />
      <NewsCTA />
    </main>
  );
}
