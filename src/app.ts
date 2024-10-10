import dotenv from "dotenv";
import express from "express";
import router from "./routes";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("1, 2, 3 <br/> 4, 5, 6");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
