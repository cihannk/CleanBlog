const express = require("express");
const ejs = require("ejs");
const postController = require("./controllers/postController");
const pageController = require("./controllers/pageController");
const mongoose = require("mongoose");
const methodOverride = require("method-override");


const app = express();

mongoose.connect("mongodb://localhost/cleanblog-test-db");

app.set("view engine", "ejs");

//MW'S
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method", {methods: ["POST","GET"]}));

//ROUTES
app.get("/", pageController.getIndexPage);

app.get("/about", pageController.getAboutPage);

app.get("/add_post", pageController.getAddPostPage);

app.post("/postadd", postController.addPost);

app.get("/posts/:id", pageController.getPostPage);

app.delete("/delete/:id",postController.removePost);

app.get("/update/:id", pageController.getEditPostPage);

app.put("/update/:id", postController.updatePost);

const port = 3000;
app.listen(port, ()=>{
    console.log(`Sunucu ${port}. portta başlatıldı`);
})