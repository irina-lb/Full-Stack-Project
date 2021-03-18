//hooks import
import { useState, useEffect } from "react";

function CheckOut({ cart }) {
  const getTotal = () => {
    return cart.reduce((current, next) => {
      return current + next.count * next.price;
    }, 0);
  };
  return (
    <div>
      <h1>{getTotal()}</h1>
    </div>
  );
}

export default CheckOut;
