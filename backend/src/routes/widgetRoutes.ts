import { Router } from "express";
import { widgetController } from "../controllers/widgetController";

const router = Router()
router.get("/", widgetController.list)
router.get("/filters", widgetController.listFilters)

export const widgetRouter = router