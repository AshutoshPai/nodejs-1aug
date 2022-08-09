import { ObjectID } from "bson";
import express from "express";
import { createClient } from "../utils/db.mjs";

const Router = express.Router();

// GET
Router.get("/", async (req, res)=>{
    const client = createClient();
    await client.connect();
    const db = client.db("nodeJsTraining");
    const collection = db.collection("products");
    const docs = await collection.find().toArray();
    client.close();

    res.json(docs);
})

// GET with ID
Router.get("/:id", async (req, res)=>{
    const id = req.params.id;

    const client = createClient();
    await client.connect();
    const db = client.db("nodeJsTraining");
    const collection = db.collection("products");
    const doc = await collection.find({_id : ObjectID(id)}).toArray();
    client.close();

    res.json(doc);
})


// POST
Router.post("/", async (req, res)=>{
    const body = req.body;

    const client = createClient();
    await client.connect();
    const db = client.db("nodeJsTraining");
    const collection = db.collection("products");
    const insertDocs = await collection.insertMany(body);
    client.close();

    res.json(insertDocs);
})

// PUT
Router.put("/:id", async (req, res)=>{
    const id = req.params.id;
    const body = req.body;

    const client = createClient();
    await client.connect();
    const db = client.db("nodeJsTraining");
    const collection = db.collection("products");
    const updateDoc = await collection.updateMany({_id : ObjectID(id)}, {$set : body});
    client.close();

    res.json(updateDoc);
})

// Delete with ID
Router.delete("/:id", async (req, res)=>{
    const id = req.params.id;

    const client = createClient();
    await client.connect();
    const db = client.db("nodeJsTraining");
    const collection = db.collection("products");
    const doc = await collection.deleteOne({_id : ObjectID(id)});
    client.close();

    res.json(doc);
})

export default Router;