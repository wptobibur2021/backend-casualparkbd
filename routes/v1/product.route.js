const express = require("express");

const router = express.Router();
// const upload = require("../../upload/productUpload");
const productController = require("../../controller/product.controller");
const checkAuth = require("../../middlewares/checkAuth");

// Product Get & add post operation route declaration below
router
  .route("/")
  .get(productController.getProduct)
  .post(checkAuth, productController.createProduct);
// Product Patch, get, delete operation route declaration below
router
  .route("/:id")
  .get(productController.singleProduct)
  .patch(checkAuth, productController.updateProduct)
  .delete(checkAuth, productController.deleteProduct);
router
  .route("/status/:id")
  .put(checkAuth, productController.updateProductStatus);

module.exports = router;
