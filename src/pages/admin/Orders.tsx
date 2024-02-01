import {
  Pagination,
  PaginationContent,
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
import { GetAdminOrders } from "../../utils/apis/admin/orders/types";
import { getOrders } from "../../utils/apis/admin/orders/api";
import { formattedAmount } from "../../utils/formattedAmount";

const AdminOrders = () => {
  const [order, setOrder] = useState<GetAdminOrders>();
  const [totalPage, setTotalPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchOrders(pageNumber, 10);
  }, [pageNumber]);

  const fetchOrders = async (pageNumber: number, limit: number) => {
    try {
      const result = await getOrders(pageNumber, limit);
      setOrder(result.data);
      setTotalPage(result.total_page);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = () => {
    if (pageNumber === totalPage) return;
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
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
          {order &&
            order.order?.map((order, index) => (
              <TableRow key={index} className="">
                <TableCell className="font-medium text-center">
                  {order.order_id}
                </TableCell>
                <TableCell className="text-left">
                  {order.product.name}
                </TableCell>
                <TableCell className="text-center">{order.quantity}</TableCell>
                <TableCell className="text-left">{order.created_at}</TableCell>
                <TableCell className="text-center">
                  {order.bank.toUpperCase()}
                </TableCell>
                <TableCell className="text-left ">
                  {formattedAmount(order.gross_amount)}
                </TableCell>
                <TableCell className="text-center">{order.address}</TableCell>
                <TableCell className="text-center">
                  {order.status.toUpperCase()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Pagination className="py-3">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={`${
                pageNumber === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handlePreviousPage}
            />
          </PaginationItem>

          {Array.from({ length: totalPage }, (_, index) => (
            <PaginationItem>
              <PaginationLink
                className={`cursor-pointer ${
                  pageNumber === index + 1
                    ? "bg-zinc-800 text-white hover:bg-zinc-700 hover:text-white"
                    : "bg-white"
                }`}
                onClick={() => setPageNumber(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              className={`${
                totalPage === pageNumber
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={handleNextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </AdminLayout>
  );
};

export default AdminOrders;
