import options from "@/app/api/auth/[...nextauth]/options";
import UserForm from "@/components/UserForm";
import { prisma } from "@/prisma/db";
import { getServerSession } from "next-auth";
import React from "react";

interface Props {
  params: { id: string };
}

async function EditUser({ params }: Props) {
  const session = await getServerSession(options);
  if (session?.user.role !== "ADMIN") {
    return (
      <div className=" text-destructive flex justify-center items-center h-screen">
        <h1 className="text-2xl">You are not authorized to view this page</h1>
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return <p className="text-destructive">User not found</p>;
  }

  user.password = "";

  return (
    <div>
      <UserForm user={user} />
    </div>
  );
}

export default EditUser;
