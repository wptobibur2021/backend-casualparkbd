const {
  createCategoryServices,
  getCategoryServices,
  deleteCatServices,
} = require("../services/category.services");
// Create a category
exports.createCategory = async (req, res, next) => {
  try {
    // const imgName = req.file;
    // const catData = {
    //   ...req.body,
    //   catImg: imgName?.filename,
    // };
    const result = await createCategoryServices(req.body);
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
// Get a category
exports.getCategory = async (req, res, next) => {
  try {
    const result = await getCategoryServices();
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
  next();
};

// Delete product
exports.deleteCat = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("ID: ", id);
    const result = await deleteCatServices(id);
    await res.status(200).json({
      status: "success",
      data: result,
      error: null,
    });
  } catch (e) {
    await res.status(500).json({
      status: "error",
      data: null,
      error: e,
    });
  }
};
