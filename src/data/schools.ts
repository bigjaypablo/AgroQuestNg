export type Status = "active" | "pilot" | "in-development" | "coming-soon" | "research";

export interface School {
  slug: string;
  name: string;
  focus: string;
  status: Status;
}

export const schools: School[] = [
  {
    slug: "agribusiness-wealth-creation",
    name: "School of Agribusiness & Wealth Creation",
    focus: "Agribusiness management, finance, investment and digital markets.",
    status: "coming-soon",
  },
  {
    slug: "agro-innovation-systems",
    name: "School of Agro-Innovation Systems",
    focus: "Systems thinking, agri-tech, drones, IoT, AI and automation.",
    status: "coming-soon",
  },
  {
    slug: "agro-security-sovereignty",
    name: "School of Agro-Security & Sovereignty",
    focus: "Farm protection, food sovereignty and risk management.",
    status: "coming-soon",
  },
  {
    slug: "smart-green-technologies",
    name: "School of Smart & Green Technologies",
    focus: "Smart irrigation, greenhouses and sustainable systems.",
    status: "coming-soon",
  },
  {
    slug: "natural-sciences-bio-innovation",
    name: "School of Natural Sciences & Bio-Innovation",
    focus: "Crop science, soil systems, bio-fertilizers and processing.",
    status: "coming-soon",
  },
  {
    slug: "agri-crypto-fintech-digital-systems",
    name: "School of Agri-Crypto, Fintech & Digital Systems",
    focus: "Blockchain, agri-fintech and Web3 agricultural systems.",
    status: "research",
  },
  {
    slug: "culture-heritage-ethics-sustainability",
    name: "School of Culture — Heritage, Ethics & Sustainability",
    focus: "Indigenous knowledge, ethics and agricultural storytelling.",
    status: "coming-soon",
  },
];
