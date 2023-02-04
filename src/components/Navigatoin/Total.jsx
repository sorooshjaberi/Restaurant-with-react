import React from "react";

const Total = (props) => {
  return (
    <div className={"amountNumber "}>
      {props.CartCtx.total}
    </div>
  );
};

export default Total;
