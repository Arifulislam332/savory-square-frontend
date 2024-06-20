import { Order } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { ORDER_STATUS } from "@/config";

interface Props {
  order: Order;
}

const OrderItemCart = ({ order }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className=" grid md:grid-cols-4 gap-5 justify-between mb-3 text-base">
          <div>
            Customer Name:{" "}
            <span className="font-normal ml-2">
              {order.deliveryDetails.name}
            </span>
          </div>
          <div>
            Delivery Address:{" "}
            <span className="font-normal ml-2">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
              , {order.deliveryDetails.country}
            </span>
          </div>
          <div>
            Time:{" "}
            <span className="font-normal ml-2">
              {new Date(order.createdAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div>
            Date:{" "}
            <span className="font-normal ml-2">
              {new Date(order.createdAt).toLocaleDateString("en-Uk", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </span>
          </div>
          <div>
            Total Cost:{" "}
            <span className="font-normal ml-2">
              {(order.totalAmount / 100).toFixed(2)}
            </span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          {order.cartItems.map((item) => (
            <span key={item.menuItemId}>
              <Badge className="mr-2" variant={"outline"}>
                {item.quantity}
              </Badge>
              {item.name}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="status">What is the status of this order?</Label>
          <Select>
            <SelectTrigger id="status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent position="popper">
              {ORDER_STATUS.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCart;
