const express = require("express");

const router = express.Router();
const orderController = require("../../controller/order.controller");

router
  .route("/")
  .get(orderController.getOrder)
  .post(orderController.createOrder);

router.route("/:id").get(orderController.singleOrder);

module.exports = router;
