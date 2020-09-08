import axios from "axios";
const getProducts = (products) => {
  return {
    type: "GET_PRODUCTS",
    products: products,
  };
};

export const fetchProducts = () => (dispatch) =>
  axios.get("/api/products").then((res) => dispatch(getProducts(res.data)));

export const handleCart = (id, quantity) => (dispatch) =>
  axios
    .patch("/api/products", { id: id, quantity: quantity })
    .then((res) => dispatch(getProducts(res.data)));

export const deleteProduct = (id) => (dispatch) =>
  axios
    .delete(`/api/products/${id}`)
    .then((res) => dispatch(getProducts(res.data)));
