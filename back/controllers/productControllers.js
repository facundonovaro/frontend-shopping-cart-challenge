const Product = require("../models/Product");

const findAllProducts = (req, res) => {
  Product.findAll({ order: [["productName", "ASC"]] }).then((products) => {
    res.json(products);
  });
};

const updateProduct = (req, res) => {
  Product.findByPk(req.body.id)
    .then((product) => product.update(req.body))
    .then(() => {
      Product.findAll({ order: [["productName", "ASC"]] }).then((products) => {
        res.json(products);
      });
    });
};

const deleteProduct = (req, res) => {
  Product.findByPk(req.params.id)
    .then((product) => product.destroy())
    .then(() => {
      Product.findAll({ order: [["productName", "ASC"]] }).then((products) => {
        res.json(products);
      });
    });
};

module.exports = {
  findAllProducts,
  updateProduct,
  deleteProduct,
};
