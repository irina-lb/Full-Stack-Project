//packages import
const express = require("express");

//router
const router = express.Router();

//middlewares import
const {
  userById,
  requireLogIn,
  isAuth,
  isAdmin,
} = require("../middlewares/userAccess");
const { postById } = require("../middlewares/postAccess");

//controllers import
const {
  createPost,
  showPost,
  listPosts,
  deletePost,
  postPhoto,
  updatePost,
} = require("../controllers/post");

//routes
router.get("/post/:postId", showPost);
router.post("/post/create/:userId", requireLogIn, isAuth, isAdmin, createPost);
router.get("/posts", listPosts);
router.delete(
  "/post/:postId/:userId",
  requireLogIn,
  isAuth,
  isAdmin,
  deletePost
);
router.put("/post/:postId/:userId", requireLogIn, isAuth, isAdmin, updatePost);
router.get("/post/photo/:postId", postPhoto);

router.param("userId", userById);
router.param("postId", postById);

module.exports = router;
