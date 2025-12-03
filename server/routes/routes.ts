/* libraries */
import express from "express";

/* routes */
import auth from "../routes/RestAPI/person.route.ts";
import addHouse from "../routes/RestAPI/city.route.ts";
import event from "../routes/RestAPI/event.route.ts";

const router = express.Router();
/* ROUTES */
router.use("/api", auth);
router.use("/api", addHouse);
router.use("/api", event);

export default router;
