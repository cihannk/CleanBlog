const Post = require("../models/Post");

exports.addPost = async (req, res) => {
    await Post.create(req.body);
    res.redirect("/");
}

exports.removePost = async (req, res) =>{
    const id = req.params.id;
    await Post.findByIdAndDelete(id);
    res.redirect("/");
}

exports.updatePost = async (req, res) => {
    const id = req.params.id;
    const post = await Post.findOne({_id: id});
    console.log(req.body)
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect(`/posts/${id}`);
}