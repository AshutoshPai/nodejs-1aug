import express from "express";
import axios from "axios";

const Router = express.Router();

Router.get("/", async (req, res)=>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
})

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// W/O azios
// import https from "https";

// const Router = express.Router();

// Router.get("/", (req, res)=>{
//     https.get({
//         protocol : "https:",
//         hostname : "jsonplaceholder.typicode.com",
//         path : "/users"
//     }, (response)=>{
//         let data = "";
//         response.on("data", (chunk)=>{
//             data = data + chunk;
//         });

//         response.on("close", ()=>{
//             res.send(JSON.parse(data));
//         })
//     });
// })
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

export default Router;