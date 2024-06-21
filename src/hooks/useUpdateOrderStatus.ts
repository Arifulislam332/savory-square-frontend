import { API_BASE_URL } from "@/constants";
import { UpdateOrderStatusReq } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

export const useUpdateOrderStatus = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateOrderStatusReq = async (
    updateOrderStatusReq: UpdateOrderStatusReq
  ) => {
    const accessToken = await getAccessTokenSilently();

    const res = await fetch(
      `${API_BASE_URL}/api/my/restaurant/order/${updateOrderStatusReq.orderId}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updateOrderStatusReq.status }),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update order status");
    }
  };

  const {
    mutateAsync: updateOrderStatus,
    isLoading,
    isError,
    isSuccess,
    reset,
  } = useMutation(updateOrderStatusReq);

  if (isError) {
    toast.error("Unable to update order status");
    reset();
  }

  if (isSuccess) {
    toast.success("Order status updated");
  }

  return { updateOrderStatus, isLoading };
};
