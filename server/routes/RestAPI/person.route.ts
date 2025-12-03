/* libraries */
import express from "express";
import { z } from "zod";

/* types */
import type { Request, Response } from "express";

/* zod scheme */
const registerSchema = z
  .object({
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(6, { message: "minimo 6" }),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

const router = express.Router();

router.post("/auth/register", (req: Request, res: Response) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error.format());
  }

  const data = result.data;
  return res.status(200).json({ message: "Registro válido", data });
});

export default router;
