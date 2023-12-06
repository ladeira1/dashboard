import { Router } from "express";
import { widgetRouter } from "./routes/widgetRoutes";
import { tableRouter } from "./routes/tableRoutes";
const router = Router()

router.use("/widgets", widgetRouter)
router.use("/table", tableRouter)

export { router }