import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2).max(50),
  description: z.string().min(2).max(500),
});
