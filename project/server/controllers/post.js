//packages import
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

//schema import
const Post = require("../models/post");

//create new post
exports.createPost = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (error, fields, files) => {
    if (error) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    const { title, subtitle, text } = fields;
    if (!title || !subtitle || !text) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let post = new Post(fields);

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          message: "Image should be less than 1mb in size",
        });
      }
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }

    post.save((error, result) => {
      if (error) {
        console.log("Post creating error ", error);
        return res.status(400).json({
          error,
        });
      }
      res.json(result);
    });
  });
};

//show post information
exports.showPost = (req, res) => {
  req.post.photo = undefined;
  return res.json(req.post);
};

//show the list of posts
exports.listPosts = (req, res) => {
  Post.find().exec((error, data) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    res.json(data);
  });
};

//delete post
exports.deletePost = (req, res) => {
  let post = req.post;
  post.remove((error) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    res.json({
      message: "Post was deleted successfully",
    });
  });
};

//show post photo
exports.postPhoto = (req, res, next) => {
  if (req.post.photo.data) {
    res.set("Content-Type", req.post.photo.contentType);
    return res.send(req.post.photo.data);
  }
  next();
};

//update product
exports.updatePost = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    let post = req.post;
    post = _.extend(post, fields);
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }

    post.save((error, result) => {
      if (error) {
        return res.status(400).json({
          error,
        });
      }
      res.json(result);
    });
  });
};
