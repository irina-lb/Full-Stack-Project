//api
import { API } from "../../config";
//hooks
import { useState } from "react";
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
          <p>Total price: {item.price * item.count} €</p>
          <p>Quantity:</p>
          <input
            type="number"
            value={item.count}
            onChange={handleCount(item._id)}
          />
        </div>
        <div className="buttons">
          <button className="buttonView">View</button>
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
