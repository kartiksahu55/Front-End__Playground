import React from "react";
import styles from "./Button.module.css";

const Button = ({ child, onClick }) => {
  return (
    <button className={styles.buttonStyle} onClick={onClick}>
      <i className="fa-solid fa-copy"></i> {child}
    </button>
  );
};

export default Button;
