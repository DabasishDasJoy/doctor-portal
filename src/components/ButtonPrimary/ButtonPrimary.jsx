import React from "react";

const ButtonPrimary = ({ children }) => {
  return (
    <button className="btn border-none bg-gradient-to-r from-secondary to-primary">
      {children}
    </button>
  );
};

export default ButtonPrimary;
