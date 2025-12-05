/* libraries */
import express from "express";
import router from "./routes/routes.ts";

const app = express();

app.use(express.json());

const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
