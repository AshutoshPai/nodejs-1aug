import express from "express";
import { UserModel } from "../../models/users.mjs"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const SECRET_KEY = "3lj12h123k213j1l23n21kl312kl312n3kl21nasdkj";
const Router = express.Router();

// GET
Router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users)
    } catch (error) {
        res.status(500).send("Internal server error.");
    }

});

// POST
Router.post("/", async (request, response) => {
    try {
        const body = request.body;

        const { name, email, username, phone, password } = body;

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

        body.password = await bcrypt.hash(body.password, 5);

        const newUser = new UserModel(body)

        const doc = await newUser.save()

        response.json(doc);
    } catch (error) {
        console.log(error);
        response.status(500).send("Internal server error.");
    }
});

// POST
Router.post("/login", async (req, res) => {
    try {
        const { body } = req;
        const { email, password } = body;

        const user = await UserModel.findOne({ email });

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: 3600, algorithm: "HS512" })
            res.json({ message: `Welcome ${email}`, token })
        } else {
            res.status(401).json({ message: "Email and Password not matching" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
})

Router.get("/whoami", async (req, res) => {
    const { headers } = req;
    const { authorization } = headers;
    try {
        const payload = jwt.verify(authorization, SECRET_KEY);
        const user = await UserModel.findById(payload.id, "-password");
        res.send(user);
    } catch (error) {
        res.status(401).json({ message: " Invalid user" })
    }
})

export default Router;