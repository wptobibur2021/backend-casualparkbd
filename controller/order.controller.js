const {
  orderCreateServices,
  orderGetServices,
  singleOrderServices,
  deleteOrderById,
} = require("../services/order.services");
// Order Create
exports.createOrder = async (req, res) => {
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
};
// Order Get
exports.getOrder = async (req, res) => {
  try {
    const result = await orderGetServices(req.body);
    await res.status(200).json({
      status: "success",
      data: result,
      error: null,
    });
  } catch (e) {
    await res.status(500).status(200).json({
      status: "error",
      data: null,
      error: e,
    });
  }
};

// Single Order
exports.singleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await singleOrderServices(id);
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
};

// Delete Order
exports.deleteOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("ID: ", id);
    const result = await deleteOrderById(id);
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
};
