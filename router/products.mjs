import express from "express";

const Router = express.Router();

Router.get("/", (req, res) => {
    res.send("This is the products page");
})

Router.get("/laptops", (req, res) => {
    res.send("This is the laptops page");
})

export default Router;