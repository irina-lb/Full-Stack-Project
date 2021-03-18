//hooks import
import { useState, useEffect } from "react";
//functions import
import { getCartProducts } from "../controllers/cart";
//import icon
import hello from "../styles/icons/Hello.png";
//components import
import CartItem from "../components/user/CartItem";
import CheckOut from "../components/user/CheckOut";
//import routes
import { Link } from "react-router-dom";

function ShoppingCart() {
  //states
  const [cart, setCart] = useState([]);
  const [load, setLoad] = useState(false);

  //all chosen products
  useEffect(() => {
    setCart(getCartProducts());
  }, [load]);

  return (
    <div className="shoppingCart">
      <h4>Shopping Cart</h4>
      <p>
        <img src={hello} alt="Ups..." />
        You have {cart.length} products in your cart...
        <Link to="/menu">Back to Menu</Link>
      </p>
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
        <div className="checkoutItems">
          <CheckOut cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
