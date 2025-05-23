import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  users: User[];
}

function DataTableSimple({ users }: Props) {
  return (
    <div className="w-full mt-5 mb-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader className="bg-secondary hover:bg-secondary">
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="w-[100px]">Username</TableHead>
              <TableHead className="w-[100px]">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users
              ? users.map((user) => (
                  <TableRow key={user.id} data-href="/">
                    <TableCell>
                      <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/users/${user.id}`}>{user.username}</Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/users/${user.id}`}>{user.role}</Link>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DataTableSimple;
