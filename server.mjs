import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.get("/", (req, res) => {
    fs.readFile("./phonebook.json", (err, data) => {
        if (err) {
            res.status(500).send("Internal Server Error.");
            return false;
        }
        res.setHeader("content-type", "application/json");
        res.send(data);
    })
})

app.get("/products", (req, res) => {
    res.send("This is the products page");
})

app.post("/", (req, res) => {
    fs.readFile("./phonebook.json", (err, data) => {
        if (err) {
            res.status(500).send("Internal Server Error.");
            return false;
        }
        const content = JSON.parse(data);

        content.push(req.body);

        fs.writeFile("./phonebook.json", JSON.stringify(content), () => {
            res.send(content);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
})