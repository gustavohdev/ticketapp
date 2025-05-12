"use client";
import { Ticket, User } from "@prisma/client";
import React from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AssignTicket({ ticket, users }: { ticket: Ticket; users: User[] }) {
  const [isAssigning, setIsAssigning] = React.useState(false);
  const [error, setError] = React.useState("");

  const assignTicket = async (userId: string) => {
    setError("");
    setIsAssigning(true);
    await axios
      .patch(`/api/tickets/${ticket.id}`, {
        assignedToUserId: userId === "0" ? null : userId,
      })
      .catch((err) => {
        setError("Unable to assign ticket");
      });
    setIsAssigning(false);
  };

  return (
    <div>
      <Select
        defaultValue={ticket.assignedToUserId?.toString() || "0"}
        onValueChange={assignTicket}
        disabled={isAssigning}
      >
        <SelectTrigger>
          <SelectValue
            placeholder="Select User"
            defaultValue={ticket.assignedToUserId?.toString() || "0"}
          ></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Unassign</SelectItem>
          {users?.map((user) => (
            <SelectItem key={user.id} value={user.id.toString()}>
              {user.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-destructive">{error}</p>
    </div>
  );
}

export default AssignTicket;
