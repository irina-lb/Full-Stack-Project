//packages import
const express = require("express");

//router
const router = express.Router();

//middlewares import
const {
  requireLogIn,
  isAuth,
  isAdmin,
  userById,
} = require("../middlewares/userAccess");
const { categoryById } = require("../middlewares/categoryAccess");
//controllers import
const {
  createCategory,
  showCategory,
  updateCategory,
  deleteCategory,
  listCategories,
} = require("../controllers/category");

//routes
router.get("/category/:categoryId", showCategory);
router.post(
  "/category/create/:userId",
  requireLogIn,
  isAuth,
  isAdmin,
  createCategory
);
router.put(
  "/category/:categoryId/:userId",
  requireLogIn,
  isAuth,
  isAdmin,
  updateCategory
);
router.delete(
  "/category/:categoryId/:userId",
  requireLogIn,
  isAuth,
  isAdmin,
  deleteCategory
);
router.get("/categories", listCategories);

router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;
