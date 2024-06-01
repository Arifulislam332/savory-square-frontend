import { Restaurant } from "@/types";
import { Dot } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  restaurant: Restaurant;
}

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription>
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap">
        {restaurant.cuisines.map((item, index) => (
          <span key={index + item} className="flex">
            <span>{item}</span>
            {index < restaurant.cuisines.length - 1 && <Dot />}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
