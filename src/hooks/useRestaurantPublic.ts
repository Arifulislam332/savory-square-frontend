import { API_BASE_URL } from "@/constants";
import { RestaurantSearchRes } from "@/types";
import { useQuery } from "react-query";

export const useRestaurantPublic = (city?: string) => {
  const createSearchReq = async (): Promise<RestaurantSearchRes> => {
    const res = await fetch(`${API_BASE_URL}/api/restaurant/search/${city}`);

    if (!res.ok) {
      throw new Error("Failed to get restaurant!");
    }

    return res.json();
  };

  const { data: results, isLoading } = useQuery(
    ["SearchRestaurants"],
    createSearchReq,
    { enabled: !!city }
  );

  return { isLoading, results };
};
