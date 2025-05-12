import UserForm from "@/components/UserForm";
import React from "react";
import DataTableSimple from "./data-table-simple";
import { prisma } from "@/prisma/db";
import { get } from "http";
import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";

const Users = async () => {
  const session = await getServerSession(options);

  if (session?.user.role !== "ADMIN") {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl">You are not authorized to view this page</h1>
      </div>
    );
  }

  const users = await prisma.user.findMany();

  return (
    <div>
      <UserForm />
      <DataTableSimple users={users} />
    </div>
  );
};

export default Users;
