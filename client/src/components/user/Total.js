//routes import
import { Link } from "react-router-dom";
//import function
import { getTotal } from "../../controllers/cart";

function Total({ cart }) {
  return (
    <div className="totalItems">
      <h3>Check your order:</h3>
      {cart.map((item) => (
        <div className="orderItems" key={item._id}>
          <h5>{item.name}</h5>
          <p>
            <span>Quantity:</span> {item.count}
          </p>
          <p>
            <span>Total price:</span> {item.count * item.price} €
          </p>
          <hr />
        </div>
      ))}
      <h3>
        Amount to pay: <span>{getTotal()}</span> €
      </h3>
      <Link to="/user/checkout">
        <button>Check Out</button>
      </Link>
    </div>
  );
}

export default Total;
