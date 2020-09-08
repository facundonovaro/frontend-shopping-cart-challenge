import React from "react";

export default ({
  products,
  scan,
  handleDelete,
  total,
  totalQuantity,
  discounts,
}) => {
  console.log(products, "PRODUCTS!!!");
  return (
    <main className="App">
      <section className="products">
        <h1 className="main">Shopping cart</h1>
        <ul className="products-list tableHead">
          <li className="products-list-title row">
            <div className="col-product">Product details</div>
            <div className="col-quantity">Quantity</div>
            <div className="col-price">Price</div>
            <div className="col-total">Total</div>
          </li>
        </ul>
        <ul className="products-list">
          {products &&
            products.map((product) => {
              return (
                <li className="product row" key={product.id}>
                  <div className="col-product">
                    <figure className="product-image">
                      <img src={product.img} alt="Shirt" />
                      <div className="product-description">
                        <h1>{product.productName}</h1>
                        <p className="product-code">
                          Product code {product.productCode}
                        </p>
                      </div>
                    </figure>
                  </div>
                  <div className="col-quantity">
                    <button
                      className="count"
                      onClick={
                        product.offer === "2x1"
                          ? product.quantity > 0
                            ? () => scan(product.id, product.quantity - 2)
                            : () => handleDelete(product.id)
                          : product.quantity > 0
                          ? () => scan(product.id, product.quantity - 1)
                          : () => handleDelete(product.id)
                      }
                    >
                      -
                    </button>
                    <input
                      readOnly
                      type="text"
                      className="product-quantity"
                      value={product.quantity}
                    />
                    <button
                      className="count"
                      onClick={
                        product.offer === "2x1"
                          ? () => scan(product.id, product.quantity + 2)
                          : () => scan(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="col-price">
                    <span className="product-price">{product.price}</span>
                    <span className="product-currency currency">€</span>
                  </div>
                  <div className="col-total">
                    <span className="product-price">
                      {product.price * product.quantity}
                    </span>
                    <span className="product-currency currency">€</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
      <aside className="summary">
        <h1 className="main">Order Summary</h1>
        <ul className="summary-items wrapper border">
          <li>
            <span className="summary-items-number">{totalQuantity} Items</span>
            <span className="summary-items-price">
              {total}
              <span className="currency">€</span>
            </span>
          </li>
        </ul>
        <div className="summary-discounts wrapper-half border">
          <h2>Discounts</h2>
          <ul>
            {products &&
              products.map((product) => {
                return (
                  <>
                    {product.offer && product.quantity > 0 ? (
                      <li>
                        <span>
                          {product.offer} {product.productCode} offer
                        </span>
                        {product.offer === "2x1" ? (
                          <span>
                            -{(product.quantity * product.price) / 2}€
                          </span>
                        ) : product.offer === "x3" && product.quantity >= 3 ? (
                          <span>
                            -{product.quantity * product.price * 0.05}€
                          </span>
                        ) : (
                          <span>0</span>
                        )}
                      </li>
                    ) : null}
                  </>
                );
              })}
            <li>
              <span>Promo Code offer</span>
              <span>0€</span>
            </li>
          </ul>
        </div>
        <div className="summary-total wrapper">
          <ul>
            <li>
              <span className="summary-total-cost">Total cost</span>
              <span className="summary-total-price">{total - discounts}€</span>
            </li>
          </ul>
          <button type="submit">Checkout</button>
        </div>
      </aside>
    </main>
  );
};
