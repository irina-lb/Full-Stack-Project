//api
import { API } from "../../config";
//hooks
import { useState } from "react";
//import routes
import { Link } from "react-router-dom";
//import function
import { updateProduct, deleteProduct } from "../../controllers/cart";

function CartItem({ item, setLoad, load }) {
  //states
  const [count, setCount] = useState(item.count);

  //increment or decrement quantity of products
  const handleCount = (productId) => (event) => {
    setLoad(!load);
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateProduct(productId, event.target.value);
    }
  };

  return (
    <div className="cartItem">
      <div className="productPhoto">
        <h3>{item.name}</h3>
        <img src={`${API}/product/photo/${item._id}`} alt={item.name} />
      </div>
      <div className="itemQuantity">
        <div className="itemInput">
          <p>
            <span>Total price:</span> {item.price * item.count} €
          </p>
          <p>
            <span>Choose quantity:</span>
          </p>
          <input
            type="number"
            value={item.count}
            onChange={handleCount(item._id)}
          />
        </div>
        <div className="buttons">
          <Link to={`/menu/${item._id}`}>
            <button className="buttonView">View</button>
          </Link>
          <button
            className="buttonAdd"
            onClick={() => {
              deleteProduct(item._id);
              setLoad(!load);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
