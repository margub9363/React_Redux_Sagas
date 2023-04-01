import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.log("reducer action called " + action);
  //     return action.data;
  //   } else {
  //     return "no action matched";
  //   }

  switch (action.type) {
    case ADD_TO_CART:
      // add to cart logic
      console.log("ADD_TO_CART CONDITION", action);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      // Remove from cart
      console.log("REMOVE_TO_CART CONDITION", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];

    case EMPTY_CART:
      // Remove from cart
      console.log("EMPTY_CART CONDITION", action);
      data = [];
      return [...data];

    default:
      // no case match
      return data;
  }
};
