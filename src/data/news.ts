
export type NewsCategory =
  | "Announcement"
  | "Research"
  | "Community"
  | "Education"
  | "NeuroAI";

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  image: string;
  date: string;
  author: string;
  readTime: number;
  featured?: boolean;
  content: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    id: "gann-001",
    slug: "introducing-the-gambia-neuroscience-network",
    title:
      "Introducing The Gambia Neuroscience Network: Building a Community for Neuroscience and AI",
    excerpt:
      "An introduction to GANN, an emerging initiative bringing together neuroscience, computational research, machine learning, and NeuroAI in The Gambia.",
    category: "Announcement",
    date: "2026-11-21",
    author: "GANN Team",
    readTime: 4,
    featured: true,
    image: "/images/news-microscope.webp",
    content: [
      // Keep all your existing article paragraphs here.
    ],
  },
];
