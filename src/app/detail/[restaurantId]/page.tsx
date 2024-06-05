"use client";

import CheckOutButton from "@/components/CheckOutButton";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import MenuItem from "@/components/MenuItem";
import OderSummery from "@/components/OderSummery";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import { useGetPublicRestaurant } from "@/hooks/useGetPublicRestaurant";
import { MenuItem as TMenuItem } from "@/types";
import Image from "next/image";
import { useState } from "react";

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

const RestaurantDetailPage = ({
  params,
}: {
  params: { restaurantId: string };
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = sessionStorage.getItem(
      `cartItems-${params.restaurantId}`
    );

    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (menuItem: TMenuItem) => {
    setCartItems((prevItems) => {
      const existingCartItem = prevItems.find(
        (item) => item._id === menuItem._id
      );

      let updatedCartItems;

      if (existingCartItem) {
        updatedCartItems = prevItems.map((item) =>
          item._id === menuItem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [
          ...prevItems,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }

      sessionStorage.setItem(
        `cartItems-${params.restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prevItems) => {
      const updatedCartItems = prevItems.filter(
        (item) => item._id !== cartItem._id
      );

      sessionStorage.setItem(
        `cartItems-${params.restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const handleQuantityIncrease = (cartItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingCartItem = prevItems.find(
        (item) => item._id === cartItem._id
      );

      if (existingCartItem) {
        const updatedCartItems = prevItems.map((item) =>
          item._id === cartItem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        sessionStorage.setItem(
          `cartItems-${params.restaurantId}`,
          JSON.stringify(updatedCartItems)
        );

        return updatedCartItems;
      } else {
        return [];
      }
    });
  };

  const handleQuantityDecrease = (cartItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingCartItem = prevItems.find(
        (item) => item._id === cartItem._id
      );

      let updatedCartItems;

      if (existingCartItem && existingCartItem.quantity > 1) {
        updatedCartItems = prevItems.map((item) =>
          item._id === cartItem._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        updatedCartItems = prevItems.filter(
          (item) => item._id !== cartItem._id
        );
      }

      sessionStorage.setItem(
        `cartItems-${params.restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const { isLoading, restaurant } = useGetPublicRestaurant(params.restaurantId);

  if (isLoading) {
    return <Loading />;
  }

  if (!restaurant) {
    return <Error message="Restaurant not found" />;
  }

  const handleCheckOut = () => {};
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
            <MenuItem
              key={index + item.name}
              item={item}
              addToCart={() => addToCart(item)}
            />
          ))}
        </div>

        <div>
          <Card>
            <OderSummery
              restaurant={restaurant}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              handleQuantityIncrease={handleQuantityIncrease}
              handleQuantityDecrease={handleQuantityDecrease}
            />
            <CardFooter>
              <CheckOutButton
                disabled={cartItems.length === 0}
                onCheckOut={handleCheckOut}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
