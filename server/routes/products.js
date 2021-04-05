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
const { productById } = require("../middlewares/productAccess");

//controllers import
const {
  createProduct,
  showProduct,
  deleteProduct,
  updateProduct,
  listProducts,
  relatedProduct,
  categoryProducts,
  productsBySearch,
  productPhoto,
} = require("../controllers/product");

//routes
router.get("/product/:productId", showProduct);
router.post(
  "/product/create/:userId",
  requireLogIn,
  isAuth,
  isAdmin,
  createProduct
);
router.delete(
  "/product/:productId/:userId",
  requireLogIn,
  isAuth,
  isAdmin,
  deleteProduct
);
router.put(
  "/product/:productId/:userId",
  requireLogIn,
  isAuth,
  isAdmin,
  updateProduct
);
router.get("/products", listProducts);
router.get("/product/related/:productId", relatedProduct);
router.get("/products/categories", categoryProducts);
router.get("/product/photo/:productId", productPhoto);
router.post("/products/by/search", productsBySearch);

router.param("userId", userById);
router.param("productId", productById);
module.exports = router;
