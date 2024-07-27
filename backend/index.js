import express from 'express'
import mongoose from 'mongoose'
import financialRecordRouter from './routes/financialRecords'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

const mongoURI = process.env.MONGO_URI

mongoose
    .connect(mongoURI)
    .then(() => console.log('connected to mongoDB'))
    .catch((err) => console.err('failed to connect to mongoDB', err))

app.use("/financialRecords", financialRecordRouter)
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});