import { Router } from "express";
import { cardsController } from "../controllers/cardsController";

const router = Router()
router.get("/", cardsController.list)

export const cardsRouter = router