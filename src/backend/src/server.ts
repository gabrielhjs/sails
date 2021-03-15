import "reflect-metadata"
import "./typeorm/connect"
import cors from "cors"
import dotenv from "dotenv"
import { app } from "./app"
import { router } from "./routes"

dotenv.config()

app.use(cors())
app.use(router)
app.listen(3333)
