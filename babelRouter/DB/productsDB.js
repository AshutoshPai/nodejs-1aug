import { ObjectID } from "bson";
import express from "express";
import { createClient } from "../../utils/db.mjs";

const Router = express.Router();

// GET
Router.get("/", async (req, res) => {
    try {
        const client = createClient();
        await client.connect();
        const db = client.db("nodeJsTraining");
        const collection = db.collection("products");
        const docs = await collection.find().toArray();
        client.close();

        res.render("productsDB", { products : docs })

        // res.json(docs);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

// GET with ID
Router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const client = createClient();
        await client.connect();
        const db = client.db("nodeJsTraining");
        const collection = db.collection("products");
        const doc = await collection.find({ _id: ObjectID(id) }).toArray();
        client.close();

        res.json(doc);

        if (doc === null) {
            res.status(404).json({ message: "product not found." });
        } else {
            res.json(doc);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
})


// POST
Router.post("/", async (req, res) => {
    try {
        const body = req.body;

        const client = createClient();
        await client.connect();
        const db = client.db("nodeJsTraining");
        const collection = db.collection("products");
        await collection.insertMany(body);
        client.close();

        res.json({ ...body, _id: insertedDoc.insertedId });
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
})

// PUT
Router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const client = createClient();
        await client.connect();
        const db = client.db("nodeJsTraining");
        const collection = db.collection("products");
        await collection.updateOne({ _id: ObjectID(id) }, { $set: body });
        client.close();

        res.json({ message: "product updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
})

// PUT with new field to all doc
Router.put("/", async (req, res) => {
    try {
        const body = req.body;

        const client = createClient();
        await client.connect();
        const db = client.db("nodeJsTraining");
        const collection = db.collection("products");
        await collection.updateMany({}, { $set: body });
        client.close();

        res.json({ message: "products updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
})

// Delete with ID
Router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const client = createClient();
        await client.connect();
        const db = client.db("nodeJsTraining");
        const collection = db.collection("products");
        await collection.deleteOne({ _id: ObjectID(id) });
        client.close();

        res.json({ message: "Product deleted succesfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
})

export default Router;