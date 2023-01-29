import React from "react";
import { useState } from "react";
import Styles from "./App.module.scss";
import Landing from "./components/Landing/Landing";
import Navigation from "./components/Navigatoin/Navigation";
import Menu from "./components/Menu/Menu";
import Introduction from "./components/Introduction/Introduction";
const App = () => {
  const [cart, setCart] = useState([]);
  // const onAddBasket = 
  const addHandler = (obj) => {
    const ourFoodIndex = cart.findIndex((food) => {
      return food.id === obj.id;
    });
    if (ourFoodIndex === -1) {
      setCart((prev) => [...prev, obj]);
    } else {
      const ourFood =cart[ourFoodIndex];
      obj.amount+=ourFood.amount;
      const newCart =[...cart];
      newCart.splice(ourFoodIndex,1);
      setCart([...newCart , obj])
    }
  };
  return (
    <div className={Styles.app}>
      <Navigation onAdd={addHandler} onSub={addHandler} foods = {cart} />
      <Landing />
      <Introduction/>
      <Menu addHandler={addHandler} />
    </div>
  );
};

export default App;
