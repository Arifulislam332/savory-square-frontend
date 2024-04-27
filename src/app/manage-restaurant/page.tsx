"use client";

import ManageRestaurantForm from "@/components/ManageRestaurantForm";
import { useCreateRestaurant } from "@/hooks/useCreateRestaurant";
import { useGetRestaurant } from "@/hooks/useGetRestaurant";
import { useUpdateRestaurant } from "@/hooks/useUpdateRestaurant";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isLoadingWhileCreating } =
    useCreateRestaurant();
  const { currentRestaurant } = useGetRestaurant();
  const { updateRestaurant, isLoading: isLoadingWhileUpdating } =
    useUpdateRestaurant();

  const isEditing = !!currentRestaurant;

  return (
    <ManageRestaurantForm
      isLoading={isLoadingWhileCreating || isLoadingWhileUpdating}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      restaurant={currentRestaurant}
    />
  );
};

export default ManageRestaurantPage;
