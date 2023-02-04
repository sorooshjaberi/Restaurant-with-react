import React from "react";

const Total = (props) => {
  const animation = props.state === "entering" ? "scaleAnimation" : null;
  return (
    <div className={"amountNumber " + animation}>
      {props.CartCtx.total}
    </div>
  );
};

export default Total;
