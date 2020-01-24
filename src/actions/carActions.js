export const buyItem = item => {
  console.log(item);
  return {
    type: "ADD_ITEM",
    payload: item
  };
};
