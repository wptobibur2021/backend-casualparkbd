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

exports.updateProductServices = async (id, data) => {
  const result = await Products.findByIdAndUpdate(id, {
    $set: data,
  });
  return result;
};
exports.singleProductServices = async (slug) => {
  const result = await Products.findOne({ slug });
  return result;
};

exports.updateProductStatusServices = async (id, data) => {
  console.log("Status: ", data);
  const findOne = await Products.findOne({ _id: id });
  const result = await findOne.updateOne({ status: !data });
  return result;
};
