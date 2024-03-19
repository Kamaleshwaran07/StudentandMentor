import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/config.js';
import stuRouter from './Routers/router.js';

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT

connectDB()

app.use('/api', stuRouter)


app.listen(port, () => {
    console.log("App is running in port", port);
})