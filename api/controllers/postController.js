import { Post } from "../models/postModel.js";

export const getPost = async (req, res) => {

    const post = await Post.find();

    if (!post || post.length == 0) {
        res.status(204).send("Cannot find any posts").end();
        return;
    }
    res.status(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(post));
    res.end();
};

export const addPost = async (req, res) => {
    
    if(!req.body || !req.body.title || !req.body.description){
        res.status(400).send("Bad request").end();
        return;
    }

    const newPost = new Post(req.body);
    newPost.date = new Date();

    newPost.save(function (err) {
        if (err){
            res.status(500).send(err.message);
        }
        res.status(200).send("Success");
      });

};