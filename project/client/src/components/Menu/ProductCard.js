//import api
import { API } from "../../config";
//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faHourglassHalf,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
//routes import
import { Link, useHistory } from "react-router-dom";
//import function
import { addProduct } from "../../controllers/cart";
import { isAuthenticated } from "../../controllers/auth";
import { productAlert, loginAlert, adminAlert } from "../../controllers/alerts";

function ProductCard({ product }) {
  //history
  const history = useHistory();

  // user from jwt
  const { user } = isAuthenticated();

  //add to cart if it's allowed
  const addToCart = () => {
    if (user && user.role === 0) {
      addProduct(product);
      productAlert(product);
    } else if (user && user.role === 1) {
      adminAlert();
    } else {
      loginAlert();
      history.push("/login");
    }
  };

  return (
    <div className="productCard">
      <div className="productPhoto">
        <Link to={`/menu/${product._id}`}>
          <img src={`${API}/product/photo/${product._id}`} alt={product.name} />
          <h3>{product.name}</h3>
        </Link>
      </div>
      <div className="productInfo">
        <div className="text">
          <p>
            <FontAwesomeIcon icon={faHourglassHalf} /> {product.time} min
          </p>
          <p>
            <FontAwesomeIcon icon={faUtensils} /> {product.portion} portion(s)
          </p>
          <p>
            <FontAwesomeIcon icon={faTag} /> {product.price} €
          </p>
        </div>
        <div className="buttons">
          <Link to={`/menu/${product._id}`}>
            <button className="buttonView">View</button>
          </Link>
          <button onClick={addToCart} className="buttonAdd">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
