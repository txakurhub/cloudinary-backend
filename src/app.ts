import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("¡1, 2, 3, PROBANDO!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
