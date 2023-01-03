import express from "express";
import cors from "cors";
import "./database.js";
import router from "./router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen("4000", async () => {
  console.log("run server on port 4000");
});
