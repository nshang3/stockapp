import express, { Router } from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("lots");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
})

router.get("/:id", async (req, res) => {
    let collection = await db.collection("lots");
    let query = { _id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query)

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})

router.post("/", async (req, res) => {
    try {
        let newDocument = {
            transType: req.body.transType,
            date: req.body.date,
            shares: parseInt(req.body.shares),
            cost: parseFloat(req.body.cost),
            comm: parseFloat(req.body.comm),
            bank: req.body.bank,
            notes: req.body.notes
        }
        let collection = await db.collection("lots")
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
})


router.patch("/:id", async (req, res) => {
    try {
        const query = {_id: new ObjectId(req.params.id)};
        const updates = {
            $set: {
                transType: req.body.transType,
                date: req.body.date,
                shares: parseInt(req.body.shares),
                cost: parseFloat(req.body.cost),
                comm: parseFloat(req.body.comm),
                bank: req.body.bank,
                notes: req.body.notes
            }
        }

        let collection = await db.collection("lots");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200)
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating record");
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const query = {_id: new ObjectId(req.params.id)};

        const collection = db.collection("lots");
        let result = await collection.deleteOne(query)

        res.send(result).status(200)
    } catch (err){
        console.error(err);
        res.status(500).send("Error deleting record");
    }
})

export default router;