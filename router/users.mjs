import express from "express";
import https from "https";

const Router = express.Router();

Router.get("/", (req, res)=>{
    https.get({
        protocol : "https:",
        hostname : "jsonplaceholder.typicode.com",
        path : "/users"
    }, (response)=>{
        let data = "";
        response.on("data", (chunk)=>{
            data = data + chunk;
        });

        response.on("close", ()=>{
            res.send(JSON.parse(data));
        })
    });
})

export default Router;