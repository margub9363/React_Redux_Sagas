import { PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      // add to cart logic
      console.log("PRODUCT_LIST CONDITION", action);
      return [action.data, ...data];

    default:
      // no case match
      return data;
  }
};
