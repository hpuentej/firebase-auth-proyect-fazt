import types from "../Producto/types";

const initialProductState = {
  products: [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
    { id: 3, title: "Product #3" },
  ],
  cart: [{ id: 1, title: "Product #1", quantity: 1 }],
  activeProduct: { id: 2, title: "Product #2" },
};

const productRed = (state, action) => {
  if (types.productShow === action.type) {
    return {
      ...state,
      activeProduct: state.products.filter(
        (product) => product.id === action.payload
      ),
    };
  }

  return state;
};

export { initialProductState };
export default productRed;
