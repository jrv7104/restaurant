import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Reserve Page");
});

export default router;
