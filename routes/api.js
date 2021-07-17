import { Router } from "express";
import api from "../services/api.js";

const router = new Router();


//localhost:5000/api/
router.get("/", (_, res) => {
  res.send("Hello api");
});

//localhost:5000/api/
router.get("/tables", (_, res) => {
  api.index();
  res.send("Hello tables");
});

//localhost:5000/api/
router.get("/waitlist", (_, res) => {
  res.send("Hello waitlist");
});

router.post("/"), (req, res) => {

});

export default router;
