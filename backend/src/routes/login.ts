import { Router } from "express";
import Authmiddleware from "../middlewares/Authmiddleware";
const router = Router();

router.get("/login", Authmiddleware, (req, res) => {
    return res.status(200).json({
      message: "login true",
      tokenId: ""
    })
});

export default router;
