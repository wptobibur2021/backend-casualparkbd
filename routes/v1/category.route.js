const express = require("express");

const router = express.Router();
const categoryController = require("../../controller/category.controller");
const upload = require("../../upload/productUpload");
const checkAuth = require("../../middlewares/checkAuth");

//  Category Get, Post
router
  .route("/")
  .get(categoryController.getCategory)
  .post(categoryController.createCategory);
// Category delete, update, get by ID
router.route("/:id").delete(categoryController.deleteCat);

module.exports = router;
