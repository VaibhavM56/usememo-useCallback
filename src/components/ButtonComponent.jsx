import React from "react";

const ButtonComponent = ({ handleClick, chilren }) => {
  console.log("rendering button");
  return (
    <div>
      <button onClick={handleClick}>Children</button>
    </div>
  );
};

export default React.memo(ButtonComponent);
