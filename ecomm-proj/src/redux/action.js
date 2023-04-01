export const addToCart = (data) => {
  console.log("Action called", data);
  return {
    type: "Add_TO_CART",
    data: data,
  };
};
