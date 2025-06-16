import { z } from "zod";

export const agentsInputSchema = z.object({
  name: z.string().min(1, "Name is required"),
  instructions: z.string().min(1, "Instructions are required"),
});

export const agentsUpdateSchema = agentsInputSchema.extend({
  id: z.string().min(1, "ID is required"),
})