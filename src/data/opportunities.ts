
export type OpportunityType =
  | "Scholarship"
  | "Fellowship"
  | "Internship"
  | "Research Position"
  | "Grant"
  | "Conference";

export type Opportunity = {
  id: string;
  title: string;
  organization: string;
  type: OpportunityType;
  location: string;
  region: string;
  level: string;
  deadline: string | null;
  description: string;
  url: string;
  featured?: boolean;
};

export const opportunities: Opportunity[] = [];
