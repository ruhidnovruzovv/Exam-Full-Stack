import express from "express";
import 'dotenv/config'
import cors from 'cors'
import '../backend/src/db/connectionDb.js'
import router from "./src/router/productRouter.js";

const port = process.env.port

const app = express()
app.use(express())
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("hello world")
})

app.use('/api/products', router)

app.listen(port, ()=>{
    console.log('Server is running')
})