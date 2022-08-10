import express from "express";
import { createClient } from "../../utils/db.mjs";

const Router = express.Router();

// GET
Router.get("/", async (req, res)=>{
    try {
        const client = createClient();
        await client.connect();
        const db = client.db("nodeJsTraining");
        const collection = db.collection("users");

        const docs = await collection.find().toArray();

        res.render("usersDB", { users : docs })
    } catch (error) {
        res.status(500).send("Internal server error");
    }
})

// POST
Router.post("/", async (req, res) => {
    try {
        const body = req.body;

        const client = createClient();
        await client.connect();
        const db = client.db("nodeJsTraining");
        const collection = db.collection("users");
        await collection.insertMany(body);
        client.close();

        res.json({ ...body, _id: insertedDoc.insertedId });
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
})

export default Router;