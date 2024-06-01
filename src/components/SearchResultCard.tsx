import { Restaurant } from "@/types";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Banknote, Clock, Dot } from "lucide-react";

interface Props {
  restaurant: Restaurant;
}
const SearchResultCard = ({ restaurant }: Props) => {
  return (
    <Link
      href={`/detail/${restaurant._id}`}
      className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5 group"
    >
      <AspectRatio ratio={16 / 6} className="relative">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.restaurantName}
          fill
          className="w-full h-full object-cover rounded-md"
        />
        <span className="absolute z-[1] top-0 left-0 bg-pink-500 px-3 py-1.5 rounded-tl-md rounded-br-md font-semibold text-sm text-white">
          Total menu item: {restaurant.menuItems.length}
        </span>
      </AspectRatio>

      <div>
        <h3 className="text-2xl font-bold group-hover:underline mb-2">
          {restaurant.restaurantName}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-wrap">
            {restaurant.cuisines.map((item, index) => (
              <span key={index + item} className="flex">
                <span>{item}</span>
                {index < restaurant.cuisines.length - 1 && <Dot />}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-pink-500">
              <Clock className="text-pink-500" />
              {restaurant.estimatedDeliveryTime} mins
            </div>
            <div className="flex items-center gap-2 text-pink-500">
              <Banknote className="text-pink-500" />
              Delivery from ${(restaurant.deliveryPrice / 100).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
