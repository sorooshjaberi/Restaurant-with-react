import React from "react";
import { useState } from "react";
import Styles from "./App.module.scss";
import Landing from "./components/Landing/Landing";
import Navigation from "./components/Navigatoin/Navigation";
import Menu from "./components/Menu/Menu";
import Introduction from "./components/Introduction/Introduction";
import { useEffect } from "react";
const App = () => {
  const [cart, setCart] = useState([]);
  const addHandler = (obj) => {
    //was the food selected before?
    const ourFoodIndex = cart.findIndex((food) => {
      return food.id === obj.id;
    });
    //if not :
    if (ourFoodIndex === -1) {
      setCart((prev) => [...prev, obj]);
    }
    //if yes : add it's amount to the new change and add all of them to state again
    else {
      const ourFood = cart[ourFoodIndex];
      obj.amount += ourFood.amount;
      const newCart = [...cart];
      newCart.splice(ourFoodIndex, 1);
      //if there isn't any , don't add it again
      if (obj.amount > 0) {
        setCart([...newCart, obj]);
      }else{
        setCart([...newCart])
      }
    }
  };
  useEffect(() => {
    if (cart.length !== 0)
      localStorage.setItem("ourItems", JSON.stringify(cart));
    () => {};
  }, [cart]);
  useEffect(() => {
    const data = localStorage.getItem("ourItems");
    if (data && data.length) {
      setCart(JSON.parse(data));
    }
  }, []);
  return (
    <div className={Styles.app}>
      <Navigation onAdd={addHandler} onSub={addHandler} foods={cart} />
      <Landing />
      <Introduction />
      <Menu addHandler={addHandler} />
    </div>
  );
};

export default App;
