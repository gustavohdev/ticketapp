import React from "react";
// import dynamic from "next/dynamic";
import TicketForm from "@/components/TicketForm";

// const TicketForm = dynamic(() => import("@/components/TicketForm"), {
//   ssr: false,
// });

function NewTicket() {
  return (
    <div>
      <TicketForm />
    </div>
  );
}

export default NewTicket;
