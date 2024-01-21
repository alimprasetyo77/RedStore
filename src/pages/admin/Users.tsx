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
import { Users } from "../../utils/apis/admin/users/types";
import { getUsers } from "../../utils/apis/admin/users/api";

const AdminUsers = () => {
  const [user, setUser] = useState<Users>();
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchUsers(1, 10);
  }, [pageNumber, limit]);

  const fetchUsers = async (pageNumber: number, limit: number) => {
    try {
      const result = await getUsers(pageNumber, limit);

      setUser(result);
    } catch (error) {
      console.log(error);
    }
  };

  const totalPages = Math.ceil(user.totalCount / limit);

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
            <TableHead className="text-left">Role</TableHead>
            <TableHead className="text-center">Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user && (
            <TableRow>
              <TableCell className="font-medium text-center">{user.id}</TableCell>
              <TableCell className="text-left">{user.name}</TableCell>
              <TableCell className="text-center">{user.username}</TableCell>
              <TableCell className="text-left">{user.email}</TableCell>
              <TableCell className="text-left">{user.createdAt.toUpperCase()}</TableCell>
              <TableCell className="text-center">{user.createdAt}</TableCell>
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

export default AdminUsers;
