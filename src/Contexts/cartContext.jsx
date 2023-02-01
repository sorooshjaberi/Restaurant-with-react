import React, { createContext } from "react";
const CartContext = createContext({
  orderedMeals: [],
  showBasket: false,
  onAdd: () => {},
});
export const CartContextProvider = (props) => {
  <CartContext.Provider
    value={{
      orderedMeals: props.cart,
    }}
  >
    {props.children}
  </CartContext.Provider>;
};
export default CartContext;
