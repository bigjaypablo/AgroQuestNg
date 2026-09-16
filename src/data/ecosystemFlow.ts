export interface FlowStep {
  label: string;
  description: string;
}

export const ecosystemFlow: FlowStep[] = [
  { label: "Learn", description: "Agricultural education through the Academy's schools." },
  { label: "Build", description: "Enterprise development and business systems." },
  { label: "Innovate", description: "Research, field testing and agri-tech at AgroLab." },
  { label: "Produce", description: "Pilot and in-progress production units." },
  { label: "Connect", description: "Market access through AgroMarket Link." },
];
