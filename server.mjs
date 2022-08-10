import express from "express";
import HomepageRouter from "./router/homepage.mjs";
import UsersRouter from "./router/users.mjs";
import ProductsRouter from "./router/products.mjs";

import HomepageDBRouter from "./router/DB/homepageDB.mjs";
import UsersDBRouter from "./router/DB/usersDB.mjs";
import ProductsDBRouter from "./router/DB/productsDB.mjs";

const app = express();

app.use(express.json());
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.use("/", HomepageRouter);
app.use("/Users", UsersRouter);
app.use("/Products", ProductsRouter);

app.use("/db", HomepageDBRouter);
app.use("/db/users", UsersDBRouter);
app.use("/db/products", ProductsDBRouter);

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
})