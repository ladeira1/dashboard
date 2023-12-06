import { Router } from "express";
import { widgetRouter } from "./routes/widgetRoutes";
const router = Router()

router.use("/widgets", widgetRouter)

export { router }