export interface HeroSlide {
  id: string;
  type: "video" | "image";
  src: string;
  caption: string;
}

// Replace src with real AgroQuestNg footage/photos as they become available.
// Keep videos short (5-10s loops) and under a few MB each — these autoplay muted.
export const heroSlides: HeroSlide[] = [
  { id: "field", type: "image", src: "", caption: "Field production" },
  { id: "drone", type: "image", src: "", caption: "Agri-tech & drone services" },
  { id: "academy", type: "image", src: "", caption: "Academy & learning" },
  { id: "market", type: "image", src: "", caption: "AgroMarket Link" },
];
