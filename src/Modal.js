import React from "react";
import injectSheet from "react-jss";
import modalStyles from "./styles";

const Modal = props => {
  const Component = props.component;
  const classes = props.classes;

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <button className={classes.closeButton} onClick={props.closeModal}>
          X
        </button>
        <Component {...props} />
      </div>
    </div>
  );
};

export default injectSheet(modalStyles)(Modal);
