const {
  createProductServices,
  getProductServices,
  deleteProductServices,
  singleProductServices,
  updateStockProductServices,
  updateProductServices,
  updateProductStatusServices,
} = require("../services/product.services");

// Create a product
exports.createProduct = async (req, res) => {
  try {
    const result = await createProductServices(req.body);
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

// Get Product
exports.getProduct = async (req, res) => {
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
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
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

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateProductServices(id, req.body);
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
exports.singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
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
};

//  Product Status Update
exports.updateProductStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await updateProductStatusServices(id, status);
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
