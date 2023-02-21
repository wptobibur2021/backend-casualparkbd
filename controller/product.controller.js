const {
  createProductServices,
  getProductServices,
  deleteProductServices,
  singleProductServices,
  updateStockProductServices,
} = require("../services/product.services");

// Create a product
exports.createProduct = async (req, res, next) => {
  try {
    const { files } = req;
    const images = [];
    const proData = {
      ...req.body,
      images,
    };
    files?.forEach((file) => {
      images.push(file.filename);
    });
    const result = await createProductServices(proData);
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

// Get Product
exports.getProduct = async (req, res, next) => {
  try {
    const result = await getProductServices();
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
  next();
};

// Delete product
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("ID: ", id);
    const result = await deleteProductServices(id);
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

// Single Product
exports.singleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("ID: ", id);
    const result = await singleProductServices(id);
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

//  Update Stock
exports.updateStockProduct = async (req, res, next) => {
  try {
    const carts = req.body;
    console.log("Carts: ", carts);
    const result = await updateStockProductServices(carts);
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
