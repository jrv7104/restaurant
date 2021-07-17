import express from "express";
import apiRouter from "./routes/api.js";
import reserveRouter from "./routes/reserve.js";

const PORT = 5000;
const app = express();

app.use("/api", apiRouter);

app.use("/reserve", reserveRouter);

app.get("/", (_, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
