import { Router } from "express";
import { widgetRouter } from "./routes/widgetRoutes";
import { tableRouter } from "./routes/tableRoutes";
import { chartRouter } from "./routes/chartRoutes";
import { cardsRouter } from "./routes/cardsRoutes";
import { seriesRouter } from "./routes/seriesRoutes";

const router = Router()

router.use("/widgets", widgetRouter)
router.use("/table", tableRouter)
router.use("/chart", chartRouter)
router.use("/series", seriesRouter)
router.use("/cards", cardsRouter)

export { router }