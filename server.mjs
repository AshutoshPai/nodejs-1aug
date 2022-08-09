import express from "express";
import HomepageRouter from "./router/homepage.mjs";
import ProductsRouter from "./router/products.mjs";
import ProductsDBRouter from "./router/productsDB.mjs";
import UsersRouter from "./router/users.mjs";
import UsersDBRouter from "./router/usersDB.mjs";

const app = express();

app.use(express.json());
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

// POST         Create
// GET          Read
// PUT PATCH    Update
// DELETE       Delete

app.use("/", HomepageRouter);
app.use("/products", ProductsRouter);
app.use("/users", UsersRouter);
app.use("/usersDB", UsersDBRouter);
app.use("/productsDB", ProductsDBRouter);

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
})