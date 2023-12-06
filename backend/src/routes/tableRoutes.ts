import { Router } from "express";
import { tableController } from "../controllers/tableController";

const router = Router()
router.get("/", tableController.list)

export const tableRouter = router