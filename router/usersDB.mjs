import express from "express";
import { MongoClient } from "mongodb";

const dbURL = "mongodb://127.0.0.1/27017";
const client = new MongoClient(dbURL);

const Router = express.Router();

Router.get("/", async (req, res)=>{
    try {
        await client.connect();
        const db = client.db("nodeJsTraining");
        const collection = db.collection("users");

        const docs = await collection.find().toArray();

        res.render("usersDB", { users : docs })
    } catch (error) {
        res.status(500).send("Internal server error");
    }
})

export default Router;