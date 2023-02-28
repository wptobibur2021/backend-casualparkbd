const express = require("express");

const router = express.Router();
const upload = require("../../upload/productUpload");
const productController = require("../../controller/product.controller");

// Product Get & add post operation route declaration below
router
  .route("/")
  .get(productController.getProduct)
  .post(productController.createProduct);
// Product Patch, get, delete operation route declaration below
router
  .route("/:id")
  .get(productController.singleProduct)
  .delete(productController.deleteProduct);

module.exports = router;
