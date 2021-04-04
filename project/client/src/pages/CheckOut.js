//hooks import
import { useState, useEffect } from "react";
//routes import
import { useHistory } from "react-router-dom";
//import packages
import DropIn from "braintree-web-drop-in-react";
//functions import
import { getBraintreeToken } from "../controllers/braintree";
import { getTotal, chargePayment, emptyCart } from "../controllers/cart";
import { isAuthenticated } from "../controllers/auth";
import { createNewOrder } from "../controllers/order";

function CheckOut({ load, setLoad, cart }) {
  //state
  const [userData, setUserData] = useState({
    success: false,
    clientToken: null,
    error: "",
    instance: {},
    address: "",
  });
  const history = useHistory();

  //request for the client token
  const userId = isAuthenticated().user._id;
  const token = isAuthenticated().token;

  const getToken = (userId, token) => {
    getBraintreeToken(userId, token).then((data) => {
      if (data.error) {
        setUserData({ ...userData, error: data.error });
      } else {
        setUserData({ clientToken: data.clientToken });
      }
    });
  };

  useEffect(() => {
    getToken(userId, token);
  }, []);

  //process payment
  const processPayment = () => {
    let nonce = "";
    let getNonce = userData.instance
      .requestPaymentMethod()
      .then((data) => {
        nonce = data.nonce;
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getTotal(),
        };
        chargePayment(userId, token, paymentData).then((response) => {
          const orderData = {
            products: cart,
            transaction_id: response.transaction.id,
            amount: response.transaction.amount,
            address: userData.address,
          };
          createNewOrder(userId, token, orderData).then((response) => {
            console.log(response);
            emptyCart(() => {
              setLoad(!load);
              console.log("payment success and empty cart");
              setUserData({
                success: true,
              });
            });
            history.push(`/user/dashboard/orders/${userId}`);
          });
        });
      })
      .catch((error) => {
        setUserData({ ...userData, error: error.message });
        console.log(error);
      });
  };

  //adding address
  const handleAddress = (event) => {
    setUserData({ ...userData, address: event.target.value });
  };

  //exit from the checkout card
  const exitDetailHandler = (event) => {
    const element = event.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/user/shoppingCart");
    }
  };

  return (
    <div className="shadow" onClick={exitDetailHandler}>
      <div className="checkOutCard">
        <h3>
          <span>Total amount to pay:</span> {getTotal()} €
        </h3>
        <div className="userAddress">
          <label htmlFor="addressForm">Add your delivery address:</label>
          <textarea
            onChange={handleAddress}
            id="addressForm"
            value={userData.address}
            placeholder="Type your delivery address here..."
          />
        </div>
        {userData.clientToken ? (
          <div className="paymentSistema">
            <DropIn
              options={{
                authorization: userData.clientToken,
              }}
              onInstance={(instance) => (userData.instance = instance)}
            />
            <button onClick={processPayment}>Buy</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CheckOut;
