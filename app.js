const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const Post = require("./models/Post");

const app = express();

mongoose.connect("mongodb://localhost/cleanblog-test-db");

app.set("view engine", "ejs");

//MW'S
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//ROUTES
app.get("/", async (req, res) =>{
    const posts = await Post.find({});
    res.render("index", {posts});
})

app.get("/about", (req, res) =>{
    res.render("about");
})

app.get("/add_post", (req, res) =>{
    res.render("add_post");
})

app.post("/postadd", async (req, res) => {
    await Post.create(req.body);
    res.redirect("/");
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`Sunucu ${port}. portta başlatıldı`);
})