import { searchState } from "@/app/search/[city]/page";
import { API_BASE_URL } from "@/constants";
import { RestaurantSearchRes } from "@/types";
import { useQuery } from "react-query";

export const useRestaurantPublic = (
  searchState: searchState,
  city?: string
) => {
  const createSearchReq = async (): Promise<RestaurantSearchRes> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());

    const res = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if (!res.ok) {
      throw new Error("Failed to get restaurant!");
    }

    return res.json();
  };

  const { data: results, isLoading } = useQuery(
    ["SearchRestaurants", searchState],
    createSearchReq,
    { enabled: !!city }
  );

  return { isLoading, results };
};
