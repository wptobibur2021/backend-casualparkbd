const {
  orderCreateServices,
  orderGetServices,
  singleOrderServices,
} = require("../services/order.services");
// Order Create
exports.createOrder = async (req, res, next) => {
  try {
    const result = await orderCreateServices(req.body);
    await res.status(200).json({
      status: "success",
      data: result,
      error: null,
    });
  } catch (e) {
    console.log(e);
    await res.status(500).status(200).json({
      status: "error",
      data: null,
      error: e,
    });
  }
  next();
};
// Order Get
exports.getOrder = async (req, res, next) => {
  try {
    const result = await orderGetServices(req.body);
    await res.status(200).json({
      status: "success",
      data: result,
      error: null,
    });
  } catch (e) {
    console.log(e);
    await res.status(500).status(200).json({
      status: "error",
      data: null,
      error: e,
    });
  }
  next();
};

// Single Order
exports.singleOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("ID: ", id);
    const result = await singleOrderServices(id);
    console.log("Order: ", result);
    await res.status(200).json({
      status: "success",
      data: result,
      error: null,
    });
  } catch (e) {
    await res.status(500).json({
      status: "error",
      data: null,
      error: e.message,
    });
  }
  next();
};
