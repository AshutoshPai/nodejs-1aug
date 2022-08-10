import express from "express";
import { createClient } from "../../utils/db.mjs";
import { UserModel } from "../../models/users.mjs"

const Router = express.Router();

// GET
Router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.render("usersDB", { users : users })
    } catch (error) {
        res.status(500).send("Internal server error.");
    }
    
});

// GET
Router.get("/add-user", (req, res)=>{
    res.render("addUsers");
})

// POST
Router.post("/add-user", async (request, response) => {
    try {
        const body = request.body;

        const newUser = new UserModel(body)

        await newUser.save()

        response.redirect("/db/users")
    } catch (error) {
        console.log(error);
        response.status(500).send("Internal server error.");
    }
});

// // GET
// Router.get("/", async (req, res)=>{
//     try {
//         const client = createClient();
//         await client.connect();
//         const db = client.db("nodeJsTraining");
//         const collection = db.collection("users");

//         const docs = await collection.find().toArray();

//         res.render("usersDB", { users : docs })
//     } catch (error) {
//         res.status(500).send("Internal server error");
//     }
// })

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