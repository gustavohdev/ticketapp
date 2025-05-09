import TicketForm from "@/components/TicketForm";
import { prisma } from "@/prisma/db";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}
async function EditTicket({ params }: Props) {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return <p className="text-destructive"> Ticket Not Found</p>;
  }

  return <TicketForm ticket={ticket} />;
}

export default EditTicket;
