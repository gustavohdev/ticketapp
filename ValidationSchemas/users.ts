import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, "Id is required").max(255),
  username: z.string().min(3, " Name is required").max(255),
  password: z
    .string()
    .min(6, "Password must be at last 6 characters and less than 30")
    .max(255)
    .optional()
    .or(z.literal("")),
  role: z.string().min(3, "Role is required").max(10),
});
