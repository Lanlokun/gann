
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

export const newsArticles: NewsArticle[] = [];
