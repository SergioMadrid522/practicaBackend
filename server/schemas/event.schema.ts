/* libraries */
import { z } from "zod";

export const eventSchema = z
  .object({
    title: z
      .string()
      .min(3, { message: "El evento debe tener un nombre" })
      .max(50),
    date: z.string().datetime(),
    organizer: z.object({
      name: z.string().min(2, { message: "debe tener un organizador" }),
      email: z
        .string()
        .email()
        .transform((data) => data.toLowerCase()),
    }),
    attendees: z.array(
      z.object({
        name: z.string(),
        age: z
          .number()
          .min(1, { message: "Debe tener al menos 1 invitado" })
          .max(120),
      })
    ),

    type: z.enum(["online", "in-person"]),
    location: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const { type, location } = data;
    if (type === "in-person" && !location) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Location is required for in-person events",
        path: ["location"],
      });
    }
    if (type === "online" && location) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Online events cannot have a location",
        path: ["location"],
      });
    }
  });
