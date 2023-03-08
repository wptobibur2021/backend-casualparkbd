const express = require("express");

const router = express.Router();
const orderController = require("../../controller/order.controller");
const checkAuth = require("../../middlewares/checkAuth");

router
  .route("/")
  .get(checkAuth, orderController.getOrder)
  .post(orderController.createOrder);

router
  .route("/:id")
  .get(checkAuth, orderController.singleOrder)
  .delete(checkAuth, orderController.deleteOrderById)
  .put(checkAuth, orderController.statusUpdateById);

module.exports = router;
