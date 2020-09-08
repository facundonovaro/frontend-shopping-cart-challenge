import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "../components/Checkout";
import {
  fetchProducts,
  handleCart,
  deleteProduct,
} from "../store/actions/products";
export default () => {
  const products = useSelector((state) => state.products.products);
  const [discounts, setDiscounts] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    let totalQuantity = 0;
    let discount = 0;
    dispatch(fetchProducts()).then((data) => {
      data.products.map((product) => {
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
        setTotal(total);
        setTotalQuantity(totalQuantity);
        if (product.offer === "2x1")
          discount += (product.price * product.quantity) / 2;
        if (product.offer === "x3" && product.quantity >= 3)
          discount += product.price * product.quantity * 0.05;
        setDiscounts(discount);
      });
    });
  }, []);

  const scan = (id, quantity) => {
    let total = 0;
    let totalQuantity = 0;
    let discount = 0;
    dispatch(handleCart(id, quantity)).then((data) => {
      data.products.map((product) => {
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
        setTotal(total);
        setTotalQuantity(totalQuantity);
        if (product.offer === "2x1")
          discount += (product.price * product.quantity) / 2;
        if (product.offer === "x3" && product.quantity >= 3)
          discount += product.price * product.quantity * 0.05;
        setDiscounts(discount);
      });
    });
  };

  const handleDelete = (id) => {
    let total = 0;
    let totalQuantity = 0;
    let discount = 0;
    dispatch(deleteProduct(id)).then((data) => {
      data.products.map((product) => {
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
        setTotal(total);
        setTotalQuantity(totalQuantity);
        if (product.offer === "2x1")
          discount += (product.price * product.quantity) / 2;
        if (product.offer === "x3" && product.quantity >= 3)
          discount += product.price * product.quantity * 0.05;
        setDiscounts(discount);
      });
    });
  };

  return (
    <div>
      <Checkout
        products={products}
        scan={scan}
        handleDelete={handleDelete}
        total={total}
        totalQuantity={totalQuantity}
        discounts={discounts}
      />
    </div>
  );
};
