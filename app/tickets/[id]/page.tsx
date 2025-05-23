import TicketForm from "@/components/TicketForm";
import { prisma } from "@/prisma/db";
import React from "react";
import TicketDetail from "./TicketDetail";

interface Props {
  params: {
    id: string;
  };
}

async function ViewTicket({ params }: Props) {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  const users = await prisma.user.findMany();

  if (!ticket) {
    return <p className="text-destructive"> Ticket Not Found</p>;
  }

  return <TicketDetail ticket={ticket} users={users} />;
}

export default ViewTicket;
