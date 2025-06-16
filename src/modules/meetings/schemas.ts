import { z } from "zod";

export const meetingsInputSchema = z.object({
  name: z.string().min(1, "Name is required"),
  agentId: z.string().min(1, "Instructions are required"),
});

export const meetingsUpdateSchema = meetingsInputSchema.extend({
  id: z.string().min(1, "ID is required"),
})