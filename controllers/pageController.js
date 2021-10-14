const Post = require("../models/Post");

exports.getAboutPage = (req, res) =>{
    res.render("about");
}
exports.getIndexPage = async (req, res) =>{
    const posts = await Post.find({});
    res.render("index", {posts});
}
exports.getAddPostPage = (req, res) =>{
    res.render("add_post");
}
exports.getPostPage = async (req, res) => {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    console.log(post);
    res.render("post", {post});
}
exports.getEditPostPage = async (req, res) => {
    const id = req.params.id;
    const post = await Post.findById(id);
    res.render("update_post", {post})
}