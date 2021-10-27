import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCardButton = (props) => {
  const [btnIsHHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  //destructuring to pull out the items array, then will set it up as dependency for the useEffect to run only if
  //items has changed
  const { items } = cartCtx;

  // second argument is a starting value (0)
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${
    btnIsHHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    //cleanup function to clear the timer
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    //props.onClick is taken from Header.js

    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
