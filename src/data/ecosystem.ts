export type Status = "active" | "pilot" | "in-development" | "coming-soon" | "research";

export interface Pillar {
  slug: string;
  name: string;
  summary: string;
  status: Status;
  path: string;
  image: string; // leave empty until real photography is available
}

export const pillars: Pillar[] = [
  {
    slug: "agromarket-link",
    name: "AgroMarket Link",
    summary: "The planned connection layer between farmers, processors, buyers and input suppliers.",
    status: "coming-soon",
    path: "/what-we-do/agromarket-link",
    image: "",
  },
  {
    slug: "agrolab",
    name: "AgroLab & Innovation Hub",
    summary: "Research and field-testing across agri-tech, bio-innovation and climate-smart systems.",
    status: "in-development",
    path: "/what-we-do/agrolab",
    image: "",
  },
  {
    slug: "agri-tech",
    name: "Agri-Tech & Drone Services",
    summary: "Aerial mapping, crop-health monitoring and technology adoption consulting.",
    status: "pilot",
    path: "/what-we-do/agri-tech",
    image: "",
  },
  {
    slug: "consulting",
    name: "Business Development & Consultation",
    summary: "Advisory support for building agricultural enterprises and systems.",
    status: "active",
    path: "/what-we-do/consulting",
    image: "",
  },
  {
    slug: "production",
    name: "Production Units",
    summary: "Pilot and in-progress production across crops, beekeeping, livestock and processing.",
    status: "pilot",
    path: "/what-we-do/production",
    image: "",
  },
  {
    slug: "zero-waste",
    name: "Zero-Waste Agriculture",
    summary: "A circular-economy initiative turning agricultural waste into useful outputs.",
    status: "research",
    path: "/what-we-do/zero-waste",
    image: "",
  },
];
