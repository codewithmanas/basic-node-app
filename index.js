import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("App is running");
});

app.get("/health", (req, res) => {
    res.send("App is OK");
});

const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
]

app.get("/posts", (req, res) => {
    res.send(posts);
})


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})