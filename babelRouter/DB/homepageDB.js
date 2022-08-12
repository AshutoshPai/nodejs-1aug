import express from "express";
import fs from "fs";

const Router = express.Router();

Router.get("/", async (req, res)=>{
    try {
        fs.readFile("./phonebook.json", (err, data) => {
            if (err) {
                res.status(500).send("Internal Server Error.");
                return false;
            }
            res.render("homeDB", { homeUsers : JSON.parse(data) })
        })
    } catch (error) {
        res.status(500).send("Internal server error");
    }
})

// const Router = express.Router();

// Router.get("/", (req, res) => {
//     fs.readFile("./phonebook.json", (err, data) => {
//         if (err) {
//             res.status(500).send("Internal Server Error.");
//             return false;
//         }
//         res.setHeader("content-type", "application/json");
//         res.send(data);
//     })
// })

// Router.post("/", (req, res) => {
//     fs.readFile("./phonebook.json", (err, data) => {
//         if (err) {
//             res.status(500).send("Internal Server Error.");
//             return false;
//         }
//         const content = JSON.parse(data);

//         content.push(req.body);

//         fs.writeFile("./phonebook.json", JSON.stringify(content), () => {
//             res.send(content);
//         });
//     });
// });

export default Router;