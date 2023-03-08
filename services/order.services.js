const Orders = require("../models/Orders");

exports.orderCreateServices = async (data) => {
  const result = await Orders.create(data);
  return result;
};

exports.orderGetServices = async () => {
  const result = await Orders.find({});
  return result;
};

exports.deleteOrderById = async (id) => {
  const result = await Orders.deleteOne({ _id: id });
  return result;
};

exports.updateStatusByIdServices = async (id, data) => {
  console.log("Data: ", data);
  const order = await Orders.findOne({ _id: id });
  const result = await order.updateOne({ status: !data });
  return result;
};
exports.singleOrderServices = async (id) => {
  const result = await Orders.findOne({ _id: id });
  return result;
};
