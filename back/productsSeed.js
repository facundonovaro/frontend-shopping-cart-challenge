const Product = require("./models/Product");

const Mug = Product.create({
  productName: "Cabify Coffee Mug",
  price: 5,
  productCode: "MUG",
  quantity: 2,
  img: "https://i.ibb.co/44Fkkkg/mug.png",
  offer: "2x1",
});

const Shirt = Product.create({
  productName: "Cabify T-Shirt",
  price: 20,
  productCode: "TSHIRT",
  quantity: 1,
  img: "https://i.ibb.co/DfRPZ47/shirt.png",
  offer: "x3",
});

const Cap = Product.create({
  productName: "Cabify Cap",
  price: 10,
  productCode: "CAP",
  quantity: 1,
  img: "https://i.ibb.co/Ct4V1jK/cap.png",
  offer: null,
});
