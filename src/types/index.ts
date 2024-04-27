export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  country: string;
  city: string;
};

export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  country: string;
  city: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: { name: string; price: number }[];
  imageUrl: string;
};
