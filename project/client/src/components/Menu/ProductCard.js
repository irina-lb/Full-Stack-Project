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
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="productCard">
      <div className="productPhoto">
        <img src={`${API}/product/photo/${product._id}`} alt={product.name} />
        <h3>{product.name}</h3>
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
          <button>View</button>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
