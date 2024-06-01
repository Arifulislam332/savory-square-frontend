import { API_BASE_URL } from "@/constants";
import { Restaurant } from "@/types";
import { useQuery } from "react-query";

export const useGetPublicRestaurant = (restaurantId?: string) => {
  const getRestaurantReq = async (): Promise<Restaurant> => {
    const res = await fetch(`${API_BASE_URL}/api/restaurant/${restaurantId}`);

    if (!res.ok) {
      throw new Error("Failed to fetch restaurant");
    }

    return res.json();
  };

  const { data: restaurant, isLoading } = useQuery(
    "fetchRestaurant",
    getRestaurantReq,
    {
      enabled: !!restaurantId,
    }
  );
  return { restaurant, isLoading };
};
