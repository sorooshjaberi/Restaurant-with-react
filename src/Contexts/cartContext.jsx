import React, { createContext } from "react";
const CartContext = createContext({
  orderedMeals: [],
  showBasket: false,
  onAdd: () => {},
  openBasket: () => {},
  closeBasket: () => {},
  total: () => {},
});
export const CartContextProvider = (props) => {
  return (
    <CartContext.Provider
      value={{
        orderedMeals: props.cart,
        showBasket: props.showBasket,
        openBasket: props.openBasket,
        closeBasket: props.closeBasket,
        onAdd: props.onAdd,
        total:
          props.cart.length > 0
            ? props.cart.reduce((a, b) => {
                return (a += b.amount);
              }, 0)
            : 0,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
