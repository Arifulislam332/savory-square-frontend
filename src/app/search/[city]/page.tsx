"use client";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useRestaurantPublic } from "@/hooks/useRestaurantPublic";
import { useState } from "react";

export interface searchState {
  searchQuery: string;
}

const SearchPage = ({ params }: { params: { city: string } }) => {
  const [searchState, setSearchState] = useState<searchState>({
    searchQuery: "",
  });

  const { results, isLoading } = useRestaurantPublic(searchState, params.city);

  if (isLoading) {
    return <Loading />;
  }

  if (!results?.data || !params.city) {
    return <Error message="No result found" />;
  }

  return (
    <div className="container mx-auto mt-5 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div>{/* cuisines */}</div>
      <div className="flex flex-col gap-5">
        <SearchResultInfo total={results.pagination.total} city={params.city} />
        {results.data.map((restaurant) => (
          <SearchResultCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
