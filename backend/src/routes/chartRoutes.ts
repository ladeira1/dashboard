import { Router } from "express";
import { chartController } from "../controllers/chartController";

const router = Router()
router.get("/", chartController.list)

export const chartRouter = router