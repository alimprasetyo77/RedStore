import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useEffect, useState } from "react";
import { Orders } from "../../utils/apis/admin/orders/types";
import { getOrders } from "../../utils/apis/admin/orders/api";
import { formattedAmount } from "../../utils/formattedAmount";

const AdminOrders = () => {
  const [order, setOrder] = useState<Orders>();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const result = await getOrders();

      setOrder(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AdminLayout>
      <div className="my-5 font-bold font text-3xl pl-4">Orders</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Order ID</TableHead>
            <TableHead className="text-left">Products</TableHead>
            <TableHead className="text-center">Qty</TableHead>
            <TableHead className="text-left w-[200px]">Created At</TableHead>
            <TableHead className="text-center w-[200px]">Payment</TableHead>
            <TableHead className="text-left">Subtotal</TableHead>
            <TableHead className="text-center">Address</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order && (
            <TableRow>
              <TableCell className="font-medium text-center">{order.id}</TableCell>
              <TableCell className="text-left">{order.productName}</TableCell>
              <TableCell className="text-center">{order.quantity}</TableCell>
              <TableCell className="text-left">{order.createdAt}</TableCell>
              <TableCell className="text-center">{order.payment}</TableCell>
              <TableCell className="text-left">{formattedAmount(order.totalPrice)}</TableCell>
              <TableCell className="text-center">{order.address}</TableCell>
              <TableCell className="text-center">{order.status.toUpperCase()}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </AdminLayout>
  );
};

export default AdminOrders;
