export const queryKeys = {
  campers: ["campers"] as const,

  camper: (id: string) => ["camper", id] as const,

  reviews: (id: string) => ["reviews", id] as const,
};
