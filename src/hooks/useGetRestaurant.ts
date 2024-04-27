import { API_BASE_URL } from "@/constants";
import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { toast } from "sonner";

export const useGetRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch restaurant");
    }

    return res.json();
  };

  const {
    data: currentRestaurant,
    isLoading,
    error,
  } = useQuery("fetchCurrentRestaurant", getMyRestaurantRequest);

  if (error) {
    // toast.error(error.toString());
  }

  return { currentRestaurant, isLoading, error };
};
