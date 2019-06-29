import React from "react";
import "./button.scss"

function Button({ children, disabled, handleClick, width }) {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={"btn"}
      style={{ width }}
    >
      {children}
    </button>
  );
}

export default Button;
