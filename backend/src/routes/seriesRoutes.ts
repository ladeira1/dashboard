import { Router } from "express";
import { seriesController } from "../controllers/seriesController";

const router = Router()
router.get("/", seriesController.list)
router.put("/update", seriesController.update)

export const seriesRouter = router