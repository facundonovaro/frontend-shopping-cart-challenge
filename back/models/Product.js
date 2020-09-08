const S = require("sequelize");
const db = require("../config/db");

class Product extends S.Model {}

Product.init(
  {
    productName: {
      type: S.STRING,
      allowNull: false,
    },
    productCode: {
      type: S.STRING,
      allowNull: false,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: S.INTEGER,
      allowNull: false,
    },
    img: {
      type: S.STRING,
      allowNull: false,
    },
    offer: {
      type: S.STRING,
      defaultValue: null,
    },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
