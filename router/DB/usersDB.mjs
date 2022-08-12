import express from "express";
import { createClient } from "../../utils/db.mjs";
import { UserModel } from "../../models/users.mjs"
import validator from "validator"

const Router = express.Router();

// GET
Router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.render("usersDB", { users: users })
    } catch (error) {
        res.status(500).send("Internal server error.");
    }

});

// GET
Router.get("/add-user", (req, res) => {
    res.render("addUsers");
})

// POST
Router.post("/add-user", async (request, response) => {
    try {
        const body = request.body;

        const { name, email, username, phone, address, website, company } = body;

        if (validator.isEmpty(name)) {
            response.status(401).send("Name not provided.");
            return false;
        }

        if (!validator.isEmail(email)) {
            response.status(401).send("Email is not correct.");
            return false;
        }


        if (validator.isEmpty(username)) {
            response.status(401).send("Username not provided.");
            return false;
        }

        if (validator.isEmpty(phone)) {
            response.status(401).send("Phone number not provided.");
            return false;
        }

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