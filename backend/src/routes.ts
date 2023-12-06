import { Router } from "express";
import { widgetRouter } from "./routes/widgetRoutes";
import { tableRouter } from "./routes/tableRoutes";
import { chartRouter } from "./routes/chartRoutes";
const router = Router()

router.use("/widgets", widgetRouter)
router.use("/table", tableRouter)
router.use("/chart", chartRouter)

export { router }