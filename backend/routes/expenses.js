import express from 'express'
import ExpenseModel from '../models/Expense.js'

const router = express.Router();

router.get("/getAllByUserId/:userId", async (req, res) => {
    try {
        const userId = req.params.userId
        const records = await ExpenseModel.find({ userId: userId })
        if (records.length === 0) {
            return res.status(404).send("no records found for the user")
        }
        res.status(200).send(records);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.post("/", async (req, res) => {
    try {
        const newRecordBody = req.body
        const newRecord = new ExpenseModel(newRecordBody)
        const savedRecord = await newRecord.save()

        res.status(200).send(savedRecord);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const newRecordBody = req.body
        const record = await ExpenseModel.findByIdAndUpdate(id, newRecordBody)
        if (!record) {
            return res.status(404).send()
        }

        res.status(200).send(record);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const record = await ExpenseModel.findByIdAndDelete(id)
        if (!record) {
            return res.status(404).send()
        }
        res.status(200).send(record);
    } catch (err) {
        res.status(500).send(err);
    }
})

export default router