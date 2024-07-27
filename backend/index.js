import express from 'express'
import mongoose from 'mongoose'
import expensesRouter from './routes/expenses.js';
import dotenv from 'dotenv';
import cors from "cors"
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

const mongoURI = process.env.MONGO_URI

mongoose
    .connect(mongoURI)
    .then(() => console.log('connected to mongoDB'))
    .catch((err) => console.err('failed to connect to mongoDB', err))

app.use("/expenses", expensesRouter)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});