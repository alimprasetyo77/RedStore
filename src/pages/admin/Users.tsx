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

const Users = () => {
  return (
    <AdminLayout>
      <div className="my-5 font-bold font text-3xl pl-4">Orders</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">User ID</TableHead>
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-center">Username</TableHead>
            <TableHead className="text-left">Email</TableHead>
            <TableHead className="text-center">Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-center">1</TableCell>
            <TableCell className="text-left">Arja</TableCell>
            <TableCell className="text-center">Arjacakil</TableCell>
            <TableCell className="text-left">arjacakil12@gmail.com</TableCell>
            <TableCell className="text-center">Jan 5, 2024</TableCell>
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

export default Users;
