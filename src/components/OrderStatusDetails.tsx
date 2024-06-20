import { Order } from "@/types";
import { Separator } from "./ui/separator";

interface Props {
  order: Order;
}

const OrderStatusDetails = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold">Delivering to:</span>
        <span>Name: {order.deliveryDetails.name}</span>
        <span>Email: {order.deliveryDetails.email}</span>
        <span>
          Address: {order.deliveryDetails.addressLine1},{""}
          {order.deliveryDetails.city}, {order.deliveryDetails.country}
        </span>
      </div>

      <div className=" flex flex-col">
        <span className="font-bold">Your Orders:</span>
        <ul>
          {order.cartItems.map((item) => (
            <li key={item.menuItemId}>
              {item.name} x{item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      {order.totalAmount && (
        <div className=" flex flex-col">
          <span className="font-bold">Total</span>
          <span>${(order.totalAmount / 100).toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default OrderStatusDetails;
