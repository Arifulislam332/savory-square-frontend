import { API_BASE_URL } from "@/constants";
import { Order } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";

export const useGetMyRestaurantOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantOrdersReq = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(`${API_BASE_URL}/api/my/restaurant/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to get order");
    }

    return res.json();
  };

  const { data: orders, isLoading } = useQuery(
    "fetchMyRestaurantOrders",
    getMyRestaurantOrdersReq
  );

  return { isLoading, orders };
};
