import { CartItem } from "@/app/detail/[restaurantId]/page";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Minus, Plus, Trash } from "lucide-react";

interface Props {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
  handleQuantityDecrease: (cartItem: CartItem) => void;
  handleQuantityIncrease: (cartItem: CartItem) => void;
}

const OderSummery = ({
  restaurant,
  cartItems,
  removeFromCart,
  handleQuantityDecrease,
  handleQuantityIncrease,
}: Props) => {
  const getTotalCost = () => {
    const totalFromCart = cartItems.reduce(
      (total, item) => (total += item.price * item.quantity),
      0
    );

    const subtotal = totalFromCart + restaurant.deliveryPrice;

    return (subtotal / 100).toFixed(2);
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
            <span className="flex items-center gap-2">
              <button>
                <Minus size={16} onClick={() => handleQuantityDecrease(item)} />
              </button>
              <Badge variant="outline">{item.quantity}</Badge>
              {item.name}
              <button>
                <Plus size={16} onClick={() => handleQuantityIncrease(item)} />
              </button>
            </span>
            <span className="flex items-center gap-2">
              ${((item.price * item.quantity) / 100).toFixed(2)}
              <Trash
                size={20}
                onClick={() => removeFromCart(item)}
                className="cursor-pointer text-rose-500"
              />
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
