//schema import
const Post = require("../models/post");

//find post by id
exports.postById = (req, res, next, id) => {
  Post.findById(id)
    .populate("category")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(400).json({
          error: "Post not found",
        });
      }
      req.post = post;
      next();
    });
};
