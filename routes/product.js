const express = require("express")
const routes = express.Router()
const productController = require("../controller/product")

routes
  .post("/", productController.createProduct)
  .get("/", productController.getProducts)
  .get("/:id", productController.getProductsById)
  .put("/:id", productController.updateProductWithPut)
  .patch("/:id", productController.updateProductWithPatch)
  .delete("/:id", productController.deleteProductById);

exports.routes = routes;