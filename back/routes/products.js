const express = require("express");
const router = express.Router();
const {
  updateProduct,
  findAllProducts,
  deleteProduct,
} = require("../controllers/productControllers");

router.get("/", findAllProducts);

router.patch("/", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
