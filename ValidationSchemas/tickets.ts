import { z } from "zod";

export const TicketSchema = z.object({
  id: z.string().min(1, "Title is required").max(255),
  title: z.string().min(1, "Description is required").max(65535),
  description: z.string().min(1, "Status is required").max(10),
  status: z.string().min(1, "Status)").max(10).optional(),
  priority: z.string().min(1, "Priority").max(10).optional(),
});
