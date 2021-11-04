module.exports = app => {
  const product = require("../services/productservice.js");

  var router = require("express").Router();

  // Add a product 
  router.post("/addproduct", product.create);

  // Find all product
  router.get("/getproducts", product.findAll);

  // Find product by product id
  router.post("/getproductbyid", product.findOne);

  // Update product by product id
  router.post("/update", product.update);

  // Delete productby product id
  router.post("/delete", product.delete);

  app.use("/api/product", router);
};
