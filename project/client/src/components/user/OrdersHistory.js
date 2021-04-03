//import hooks
import { useState, useEffect } from "react";
//functions import
import { isAuthenticated } from "../../controllers/auth";
import { userOrdersHistory } from "../../controllers/user";
import moment from "moment";

function OrdersHistory({ match }) {
  //states
  const [orders, setOrders] = useState([]);

  //token from jwt
  const { token } = isAuthenticated();

  const allOrders = (userId) => {
    userOrdersHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };

  useEffect(() => {
    allOrders(match.params.userId);
  }, []);

  return (
    <div className="userOrderHistory">
      <h3>Your history of orders: </h3>
      <ul>
        {orders.map((order, index) => (
          <li key={order._id} className="allOrders">
            <p>
              {index + 1}.<span>Status:</span> {order.status}
            </p>
            <p>Date: {moment(order.createdAt).fromNow()}</p>
            <p>
              <span>Address:</span> {order.address}
            </p>
            <p>
              <span>Total:</span> {order.amount} €
            </p>
            <div className="productOrderInfo">
              {order.products.map((product) => (
                <p key={product._id}>{product.name}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersHistory;
