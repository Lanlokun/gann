
export type EventScope = "GANN" | "International";

export type EventStatus =
  | "Confirmed"
  | "Planned"
  | "Completed";

export type GANNEvent = {
  id: string;
  title: string;
  description: string;
  organizer: string;
  scope: EventScope;
  status: EventStatus;
  location: string;
  startDate: string | null;
  endDate?: string | null;
  image: string;
  url?: string;
};

// Verified events will be added here.
export const events: GANNEvent[] = [];
