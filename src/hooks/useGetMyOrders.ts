import { API_BASE_URL } from "@/constants";
import { Order } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { toast } from "sonner";

export const useGetMyOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyOrdersReq = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(`${API_BASE_URL}/api/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(res);

    if (!res.ok) {
      throw new Error("Failed to get orders");
    }

    return res.json();
  };

  const {
    data: orders,
    error,
    isLoading,
  } = useQuery("fetchOrders", getMyOrdersReq);

  if (error) {
    toast.error(error.toString());
  }

  return { orders, isLoading };
};
