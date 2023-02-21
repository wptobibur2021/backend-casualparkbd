const Products = require("../models/Products");

exports.createProductServices = async (data) => {
  const result = await Products.create(data);
  console.log("Result: ", result);
  return result;
};

exports.getProductServices = async () => {
  const result = await Products.find({});
  return result;
};

exports.deleteProductServices = async (id) => {
  const result = await Products.deleteOne({ _id: id });
  return result;
};

exports.singleProductServices = async (slug) => {
  const result = await Products.findOne({ slug });
  return result;
};

exports.updateStockProductServices = async () => {
  const result = await Products.updateMany({});
  return result;
};
