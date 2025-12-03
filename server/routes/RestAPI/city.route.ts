/* libraries */
import express from "express";
/* types */
import type { Request, Response } from "express";
/* Schema */
import { houseSchema } from "../../schemas/city.schema.ts";

const router = express.Router();
router.post("/addHouse", (req: Request, res: Response) => {
  const result = houseSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: "cannot add the house" });
  }

  const data = result.data;
  return res.status(200).json({
    message: "house added",
    data,
  });
});
export default router;
