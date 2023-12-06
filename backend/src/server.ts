import express from "express"
import cors from "cors"
import { router } from "./routes"

const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log('JSON Server is running in PORT ' + PORT)
})