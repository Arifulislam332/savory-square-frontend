"use client";

import { useRestaurantPublic } from "@/hooks/useRestaurantPublic";

const SearchPage = ({ params }: { params: { city: string } }) => {
  const { results, isLoading } = useRestaurantPublic(params.city);
  return (
    <div>
      {results?.data.map((restaurant) => (
        <div key={restaurant._id}>
          <h1>{restaurant.country}</h1>
          <h1>{restaurant.restaurantName}</h1>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
