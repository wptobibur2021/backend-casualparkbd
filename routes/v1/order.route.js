const express = require("express");

const router = express.Router();
const orderController = require("../../controller/order.controller");
const checkAuth = require("../../middlewares/checkAuth");

router
  .route("/")
  .get(checkAuth, orderController.getOrder)
  .post(checkAuth, orderController.createOrder);

router
  .route("/:id")
  .get(checkAuth, orderController.singleOrder)
  .delete(checkAuth, orderController.deleteOrderById);

module.exports = router;
