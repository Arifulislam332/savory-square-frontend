export const cuisineList: string[] = [
  "Italian",
  "Japanese",
  "Mexican",
  "Chinese",
  "Indian",
  "French",
  "Thai",
  "Greek",
  "Spanish",
  "Mediterranean",
  "American",
  "Vietnamese",
  "Korean",
  "Lebanese",
  "Turkish",
  "Brazilian",
  "Moroccan",
  "German",
  "Peruvian",
  "Argentinian",
  "Russian",
  "British",
  "Cajun",
  "Swedish",
  "Australian",
  "Ethiopian",
  "Irish",
  "Portuguese",
  "Caribbean",
];

export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";

export const ORDER_STATUS: {
  label: string;
  value: OrderStatus;
  progress: number;
}[] = [
  { label: "Placed", value: "placed", progress: 0 },
  { label: "Paid", value: "paid", progress: 25 },
  { label: "In Progress", value: "inProgress", progress: 50 },
  { label: "Out for Delivery", value: "outForDelivery", progress: 75 },
  { label: "Delivered", value: "delivered", progress: 100 },
];
