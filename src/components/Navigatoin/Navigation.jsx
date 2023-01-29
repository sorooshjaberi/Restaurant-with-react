import React from "react";
import { createPortal } from "react-dom";
import "./Navigation.scss";
import CartButton from "./CartButton";
import Basket from "./Basket";
import { useState } from "react";
import BackDrop from "../UI/BackDrop";
import BasketModal from "../Basket/BasketModal";
const Navigation = (props) => {
  const [showBasket, setShowBasket] = useState(false);
  const openBasket = () => {
    setShowBasket(true);
  };
  const closeBasket = () => {
    setShowBasket(false);
  };

  const onAdd = (a) => {
    props.onAdd(a);
  };
  const openedBasket = showBasket && (
    <BackDrop onClick={closeBasket}>
      <BasketModal onClose={closeBasket} onAdd={onAdd}  data={props.foods} />
    </BackDrop>
  );

  return (
    <nav className="navBar">
      <h2 className="navBrand">ReactMeals</h2>
      <div className="right-container">
        <CartButton onClick={openBasket} />
        <Basket foods={props.foods} />
        {createPortal(openedBasket, document.querySelector(".modal"))}
      </div>
    </nav>
  );
};

export default Navigation;
