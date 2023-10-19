const model = require("../model/product");
const productsData = model.productsData;

exports.createProduct = async (req, res) => {
  try {
    const product = new productsData(req.body);
    await product.save();
    console.log(product);
    res.json({ Message: "Product Added Successfully..." });
  } catch (error) {
    res.json(error);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await productsData.find();
    res.json(products);
  } catch (error) {
    res.json(err);
  }
};

exports.getProductsById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productsData.findById({ _id: id });
    res.json(product);
  } catch (error) {
    res.json(error);
  }
};

exports.updateProductWithPut = async (req, res) => {
  try {
    const id = req.params.id;
    await productsData.findOneAndReplace({ _id: id }, req.body);
    res.json({ Message: "Product Updated Successfully..." });
  } catch (error) {
    res.json(error);
  }
};

exports.updateProductWithPatch = async (req, res) => {
  try {
    const id = req.params.id;
    await productsData.findOneAndUpdate({ _id: id }, req.body);
    res.json({ Message: "Product Updated Successfully..." });
  } catch (error) {
    res.json(error);
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    let id = req.params.id;
    await productsData.findByIdAndRemove({ _id: id });
    res.json({ Message: "Product Deleted Successfully..." });
  } catch (error) {
    res.json(error);
  }
};
