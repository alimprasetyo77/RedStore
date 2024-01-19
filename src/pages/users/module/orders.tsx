import { cancelOrder } from "../../../utils/apis/orders/api";
import { OrderItem } from "../../../utils/apis/orders/types";

interface OrdersProps {
  data: OrderItem;
  user: string;
  status: string;
}

const Orders = ({ data, user, status }: OrdersProps) => {
  const handleCancelOrder = async () => {
    try {
      const result = await cancelOrder(data.product.id);
      alert(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center gap-x-8 bg-white rounded shadow p-3 ">
      <img
        src={"https://source.unsplash.com/100x100?products" ?? data.product.photo_product}
        alt="photo-product"
        className="border rounded size-28"
      />
      <div className="flex flex-grow flex-col gap-y-5 ">
        <div className="flex justify-between items-center  ">
          <span className="text-sm font-semibol w-48 ">Toko {user}</span>
          <span className="w-48 ">{data.product.name}</span>
          <span className="text-sm w-48 ">x {data.quantity}</span>
          <span className="text-sm uppercase tracking-wide w-48 ">Rp.{data.product.price}</span>
          <span className="text-sm text-red-500 uppercase tracking-wide w-48 ">{status}</span>
        </div>
        <div className="flex  items-center">
          {status !== "dibatalkan" ? (
            <button
              className="py-1 px-4 bg-rose-500 text-white font-medium text-xs rounded"
              onClick={handleCancelOrder}>
              Cancel Order
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Orders;
