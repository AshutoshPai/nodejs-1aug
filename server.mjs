import express, { response } from "express";

const app = express();

// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.get("/", (req, res)=>{
    res.send("Hello World!!!");
})
app.get("/products", (req, res)=>{
    res.send("This is the products page");
})

app.listen(3000, ()=>{
    console.log("Server has started at port 3000");
})