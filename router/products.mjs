import express from "express";

const Router = express.Router();

Router.get("/", async (req, res)=>{
    try {
        res.render("products", res)
    } catch (error) {
        res.status(500).send("Internal server error");
    }
})

// Router.get("/", (req, res) => {
//     res.send("This is the products page");
// })

// Router.get("/laptops", (req, res) => {
//     res.send("This is the laptops page");
// })

export default Router;