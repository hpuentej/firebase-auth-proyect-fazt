import types from './types';
import { useReducer } from "react";
import productRed, { initialProductState } from "../reducers/productRed";

export const ProductReducer = () => {
  const [productState, productDispatch] = useReducer(
    productRed,
    initialProductState
  );
  const { products, cart, activeProduct } = productState;

  return (
    <>
      <div>
        <h1>Products Reducer</h1>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                {product.title}
                <button
                  onClick = {() => productDispatch({
                    type: types.productShow,
                    payload: product.id
                  })}
                >Show
                </button>
                <button>Add to cart</button>
              </li>
            );
          })}
        </ul>

        <h1>Cart</h1>
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                {product.title}
                <button>Remove from cart</button>
              </li>
            );
          })}
        </ul>

        <h2>Preview</h2>
        <p>{activeProduct.title}</p>
      </div>
    </>
  );
};
