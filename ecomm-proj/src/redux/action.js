import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";
export const addToCart = (data) => {
  console.log("Action is called", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data) => {
  console.log("action REMOVE_FROM_CART", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};

export const emptyCart = (data) => {
  console.log("Action  empty cart", data);
  return {
    type: EMPTY_CART,
    data: data,
  };
};
