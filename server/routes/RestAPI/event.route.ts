import express from "express";
import type { Request, Response } from "express";
import { eventSchema } from "../../schemas/event.schema.ts";

const router = express.Router();
router.post("/addEvent", (req: Request, res: Response) => {
  const result = eventSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error.format());
  }
  try {
    const data = result.data;
    return res.status(200).json({ message: "event added to the agenda", data });
  } catch (error) {
    console.error(error);
  }
});
export default router;
