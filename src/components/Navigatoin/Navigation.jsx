import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Navigation.scss";
import CartButton from "./CartButton";
import { useState, useContext } from "react";
import BackDrop from "../UI/BackDrop";
import BasketModal from "../Basket/BasketModal";
import CartContext from "../../Contexts/cartContext";
import { Transition } from "react-transition-group";
import Total from "./Total";
const Navigation = (props) => {
  const CartCtx = useContext(CartContext);
  const [totalChanged, setTotalChanged] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const openBasket = () => {
    setShowBasket(true);
  };
  const closeBasket = ({ target }) => {
    const Closers = Array.from(document.querySelectorAll(".closer"));
    const isCloser = Closers.find((element) => {
      return element === target;
    });
    if (target === document.querySelector(".backDrop") || isCloser) {
      setShowBasket(false);
    }
  };

  const onAdd = (a) => {
    props.onAdd(a);
  };
  const openedBasket = showBasket && (
    <BackDrop onClick={closeBasket}>
      <BasketModal onClose={closeBasket} onAdd={onAdd} data={props.foods} />
    </BackDrop>
  );
  useEffect(() => {
    setTotalChanged(true);
    setTimeout(() => {
      setTotalChanged(false);
    }, 300);
  }, [CartCtx.total]);

  return (
    <nav className="navBar">
      <h2 className="navBrand">ReactMeals</h2>
      <div className="right-container">
        <CartButton onClick={openBasket} />
        <Transition in={totalChanged} timeout={300}>
          {(state) => <Total state={state} CartCtx={CartCtx} />}
        </Transition>
        {createPortal(openedBasket, document.querySelector(".modal"))}
      </div>
    </nav>
  );
};

export default Navigation;
