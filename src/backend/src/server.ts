import "reflect-metadata"
import cors from "cors"
import { connection } from "./typeorm/connect"
import { app } from "./app"


// connection.create()


app.use(cors())
app.listen(3333)
