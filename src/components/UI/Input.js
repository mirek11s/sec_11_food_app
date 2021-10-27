import React from "react";
import classes from "./Input.module.css";

// wrapping the custom component in React.forwardRef so we can use the useRef hook in MealItemForm.js
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
