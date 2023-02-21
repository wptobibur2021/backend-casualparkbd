const Orders = require("../models/Orders");

exports.orderCreateServices = async (data) => {
  const result = await Orders.create(data);
  return result;
};

exports.orderGetServices = async () => {
  const result = await Orders.find({});
  return result;
};

exports.singleOrderServices = async (id) => {
  const result = await Orders.findOne({ _id: id });
  return result;
};