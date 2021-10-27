import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

//backdrop and overlay, id added in index.html

const Backdrop = (props) => {
  //props.onClose will close the Cart component if the backdrop(anywhere on the screen) is clicked
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

//ID taken from ../public/index.html
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
