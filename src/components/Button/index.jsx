import React from "react";

function Button({ onClick, label = "click me!", isDisabled = false }) {
  const handleOnClick = () => {
    if (onClick) onClick();
  };
  return (
    <button disabled={isDisabled} onClick={handleOnClick}>
      {label}
    </button>
  );
}

export default Button;
