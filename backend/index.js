import express from 'express'
import mongoose from 'mongoose'
import financialRecordRouter from './routes/financialRecords'
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

const mongoURI = 'mongodb+srv://riccardoimperialedev:2dxvI6q907srSFnl@fineance.l0wxwvh.mongodb.net/'

mongoose
    .connect(mongoURI)
    .then(() => console.log('connected to mongoDB'))
    .catch((err) => console.err('failed to connect to mongoDB', err))

app.use("/financialRecords", financialRecordRouter)
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});