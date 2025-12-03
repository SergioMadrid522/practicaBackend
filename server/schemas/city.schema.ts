/* libraries */
import { z } from "zod";

export const houseSchema = z.object({
  owner: z.string().min(1, { message: "the house must have an owner" }),
  color: z.string(),
  address: z.object({
    street: z.string(),
    number: z.number(),
    city: z.string(),
    state: z.string(),
  }),
});
