//import hooks
import { useState, useEffect } from "react";
//functions import
import { isAuthenticated } from "../../controllers/auth";
import {
  showAllOrders,
  orderStatus,
  changeStatus,
} from "../../controllers/order";
import moment from "moment";

function ShowOrders() {
  //states
  const [order, setOrder] = useState([]);
  const [status, setStatus] = useState([]);

  //user info and token
  const { user, token } = isAuthenticated();

  //load all orders
  const loadOrders = () => {
    showAllOrders(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrder(data);
      }
    });
  };

  //load all order statuses
  const loadStatus = () => {
    orderStatus(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStatus(data);
      }
    });
  };

  useEffect(() => {
    loadOrders();
    loadStatus();
  }, []);

  //change status of the order
  const handleStatusChange = (event, orderId) => {
    changeStatus(user._id, token, orderId, event.target.value).then((data) => {
      if (data.error) {
        console.log("Status update failed");
      } else {
        loadOrders();
      }
    });
  };

  return (
    <div className="totalOrders">
      {order.length > 0 ? (
        order.map((item) => (
          <div className="order" key={item._id}>
            <div className="orderDetails">
              <p>
                <span>Order:</span> {item._id}
              </p>
              <p>
                <span>Date:</span> {moment(item.createdAt).fromNow()}
              </p>
              <p>
                <span>Order status:</span> {item.status}
              </p>
              <select onChange={(event) => handleStatusChange(event, item._id)}>
                <option>Update Status</option>
                {status.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <p>
                <span>Amount:</span> {item.amount} €
              </p>
              <p>
                <span>User:</span> {item.user.firstName} {item.user.lastName}
              </p>
              <p>
                <span>Ordered products:</span>{" "}
              </p>
              {item.products.map((product) => (
                <ul>
                  <li>
                    {product.name} (<span>{product.count}</span>)
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>There is no new orders</p>
      )}
    </div>
  );
}

export default ShowOrders;
