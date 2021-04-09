import "reflect-metadata"
import cors from "cors"
import { connection } from "./typeorm/connect"
import { app } from "./app"


connection.create(process.env.NODE_ENV || "deafult")


app.use(cors())
app.listen(3333)
