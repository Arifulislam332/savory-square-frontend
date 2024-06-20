import { ORDER_STATUS } from "@/config";
import { Order } from "@/types";
import { Progress } from "./ui/progress";

interface Props {
  order: Order;
}

const OrderStatusHeader = ({ order }: Props) => {
  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((item) => item.value === order.status) ||
      ORDER_STATUS[0]
    );
  };

  const getEstimatedTime = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const modifiedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${modifiedMinutes}`;
  };
  return (
    <>
      <h2 className="flex flex-col md:flex-row gap-5 md:justify-between md:text-4xl text-2xl font-bold ">
        <span>Order Status: {getOrderStatusInfo().label}</span>
        <span>Estimated Delivery Time: {getEstimatedTime()}</span>
      </h2>
      <Progress
        className="animate-pulse"
        value={getOrderStatusInfo().progress}
      />
    </>
  );
};

export default OrderStatusHeader;
