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

const Orders = () => {
  return (
    <AdminLayout>
      <div className="my-5 font-bold font text-3xl pl-4">Orders</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Order ID</TableHead>
            <TableHead className="text-left">Products</TableHead>
            <TableHead className="text-center">Qty</TableHead>
            <TableHead className="text-left w-[150px]">Created At</TableHead>
            <TableHead className="text-center w-[100px]">Payment</TableHead>
            <TableHead className="text-left">Subtotal</TableHead>
            <TableHead className="text-center">Address</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-center">1</TableCell>
            <TableCell className="text-left">Keyboard</TableCell>
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-left">Jan 5, 2024</TableCell>
            <TableCell className="text-center">BCA</TableCell>
            <TableCell className="text-left">17000</TableCell>
            <TableCell className="text-center">Bandung</TableCell>
            <TableCell className="text-center">Completed</TableCell>
          </TableRow>
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

export default Orders;
