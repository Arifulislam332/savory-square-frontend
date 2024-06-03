import { CartItem } from "@/app/detail/[restaurantId]/page";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface Props {
  restaurant: Restaurant;
  cartItems: CartItem[];
}

const OderSummery = ({ restaurant, cartItems }: Props) => {
  const getTotalCost = () => {
    const totalFromCart = cartItems.reduce(
      (total, item) => (total += item.price * item.quantity),
      0
    );

    const subtotal = totalFromCart + restaurant.deliveryPrice;

    return (subtotal / 1000).toFixed(2);
  };
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order{cartItems.length > 1 ? "s" : null}</span>
          <span>${getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between">
            <span>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>
              {item.name}
            </span>
            <span className="flex items-center gap-2">
              ${((item.price * item.quantity) / 100).toFixed(2)}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery Price</span>
          <span>${(restaurant.deliveryPrice / 100).toFixed(2)}</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OderSummery;
