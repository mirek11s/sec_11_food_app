import React from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
      //onShowCart and onHideCart can be found in App.js
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick = {props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
