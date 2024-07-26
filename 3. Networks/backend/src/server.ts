import express, {json} from "express"
import fruitsRouter from "./Routes/fruitsRoutes"
import uploadRouter from "./Routes/uploadRoutes"
import cors from 'cors'

const app= express()

app.use(cors())
app.use(json())

app.use("/fruits", fruitsRouter)
app.use("/upload", uploadRouter )
app.listen(80, ()=>{
    console.log("Server Running");
    
})