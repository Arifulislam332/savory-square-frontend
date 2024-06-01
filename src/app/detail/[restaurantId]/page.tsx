"use client";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import MenuItem from "@/components/MenuItem";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useGetPublicRestaurant } from "@/hooks/useGetPublicRestaurant";
import Image from "next/image";

const RestaurantDetailPage = ({
  params,
}: {
  params: { restaurantId: string };
}) => {
  const { isLoading, restaurant } = useGetPublicRestaurant(params.restaurantId);

  if (isLoading) {
    return <Loading />;
  }

  if (!restaurant) {
    return <Error message="Restaurant not found" />;
  }
  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.restaurantName}
          fill
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-5">
        <div className="flex flex-col gap-5">
          <RestaurantInfo restaurant={restaurant} />
          <h6 className="font-bold text-2xl">Menu</h6>
          {restaurant.menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
