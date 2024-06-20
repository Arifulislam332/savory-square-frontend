"use client";

import ManageRestaurantForm from "@/components/ManageRestaurantForm";
import OrderItemCart from "@/components/OrderItemCart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCreateRestaurant } from "@/hooks/useCreateRestaurant";
import { useGetMyRestaurantOrders } from "@/hooks/useGetMyRestaurantOrders";
import { useGetRestaurant } from "@/hooks/useGetRestaurant";
import { useUpdateRestaurant } from "@/hooks/useUpdateRestaurant";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isLoadingWhileCreating } =
    useCreateRestaurant();
  const { currentRestaurant } = useGetRestaurant();
  const { updateRestaurant, isLoading: isLoadingWhileUpdating } =
    useUpdateRestaurant();
  const { isLoading, orders } = useGetMyRestaurantOrders();

  const isEditing = !!currentRestaurant;

  return (
    <Tabs defaultValue="orders" className="container mx-auto mt-10">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 p-10 rounded-lg mt-10"
      >
        <h2 className="text-2xl font-bold">
          {orders?.length} active order
          {orders && orders?.length > 1 ? "s" : null}
        </h2>
        {orders?.map((order) => (
          <OrderItemCart key={order._id} order={order} />
        ))}
      </TabsContent>

      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          isLoading={isLoadingWhileCreating || isLoadingWhileUpdating}
          onSave={isEditing ? updateRestaurant : createRestaurant}
          restaurant={currentRestaurant}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;
