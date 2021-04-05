//hooks import
import { useState, useEffect } from "react";
//functions import
import { getCartProducts } from "../controllers/cart";
//import icon
import hello from "../styles/icons/Hello.png";
//components import
import CartItem from "../components/user/CartItem";
import Total from "../components/user/Total";
import CheckOut from "./CheckOut";
//import routes
import { Link, useLocation } from "react-router-dom";

function ShoppingCart() {
  //states
  const [cart, setCart] = useState([]);
  const [load, setLoad] = useState(false);

  //all chosen products
  useEffect(() => {
    setCart(getCartProducts());
  }, [load]);

  //location
  const path = useLocation().pathname;

  return (
    <div className="shoppingCart">
      {path && path === "/user/checkout" && (
        <CheckOut cart={cart} load={load} setLoad={setLoad} />
      )}
      <h4>Shopping Cart</h4>
      {cart.length > 0 ? (
        <p>
          <img src={hello} alt="Ups..." />
          You have {cart.length} product(s) in your cart...
          <Link to="/menu">Back to Menu</Link>
        </p>
      ) : (
        <p>
          <img src={hello} alt="Ups..." />
          Your cart is empty...Do you want to check our menu?
          <Link to="/menu"> Back to Menu</Link>
        </p>
      )}
      <div className="showItems">
        <div className="items">
          {cart.map((item) => (
            <CartItem
              item={item}
              key={item._id}
              load={load}
              setLoad={setLoad}
            />
          ))}
        </div>
        {cart.length > 0 ? (
          <div className="checkoutItems">
            <Total cart={cart} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ShoppingCart;
