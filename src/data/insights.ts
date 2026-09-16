export type InsightCategory = "Agro Insights" | "Field Notes" | "Case Studies" | "Announcements" | "Podcast";

export interface InsightArticle {
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  date: string; // ISO date, empty if unpublished
}

// No published articles yet — add real entries here as content becomes available.
// Do not populate with placeholder/fake titles; an empty array renders the "coming soon" state.
export const insights: InsightArticle[] = [];

export const insightCategories: InsightCategory[] = [
  "Agro Insights",
  "Field Notes",
  "Case Studies",
  "Announcements",
  "Podcast",
];
