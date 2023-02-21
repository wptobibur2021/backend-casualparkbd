const Category = require("../models/Category");

exports.createCategoryServices = async (data) => {
  const result = await Category.create(data);
  return result;
};

exports.getCategoryServices = async () => {
  const result = await Category.find({});
  return result;
};

exports.deleteCatServices = async (id) => {
  const result = await Category.deleteOne({ _id: id });
  return result;
};
