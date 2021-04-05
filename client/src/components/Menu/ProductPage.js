//hooks import
import { useState, useEffect } from "react";
//router import
import { Link, useHistory } from "react-router-dom";
//import controllers
import { checkId, showRelatedProducts } from "../../controllers/product";
import { addProduct } from "../../controllers/cart";
import { isAuthenticated } from "../../controllers/auth";
import { loginAlert, adminAlert, productAlert } from "../../controllers/alerts";
//api
import { API } from "../../config";
//icons import
import money from "../../styles/icons/Payment.png";
import portion from "../../styles/icons/Pizza.png";
import time from "../../styles/icons/Time.png";
//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function ProductPage({ pathId }) {
  //state
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  //exit from the product page to menu
  const exitDetailHandler = (event) => {
    const element = event.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/menu");
    }
  };

  //load product by id
  const loadProduct = (pathId) => {
    checkId(pathId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProduct(data);
        showRelatedProducts(data._id).then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    loadProduct(pathId);
  }, [pathId]);

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
    <div className="shadow" onClick={exitDetailHandler}>
      <div className="productPage">
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          className="close"
          onClick={() => history.push("/menu")}
        />
        <h3>{product.name}</h3>
        <div className="productPageInfo">
          <img
            className="productImage"
            src={`${API}/product/photo/${product._id}`}
            alt={product.name}
          />
          <div className="productPageText">
            <p>{product.description}</p>
            <div className="productIcons">
              <p>
                <img className="productIcon" src={portion} alt="Ups.." />
                <span>Portion(s): </span> {product.portion}
              </p>
              <p>
                <img className="productIcon" src={time} alt="Ups.." />
                <span>Cooking time: </span> {product.time} min
              </p>
              <p>
                <img className="productIcon" src={money} alt="Ups.." />
                <span> Price: </span> {product.price} €
              </p>
              <div className="button">
                <button className="buttonAdd" onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <h3 className="relatedTitle">You might also like this recipes:</h3>
        <div className="relatedProducts">
          {relatedProduct.map((related) => (
            <Link to={`/menu/${related._id}`} key={related._id}>
              <div className="related">
                <img
                  className="relatedProductImg"
                  src={`${API}/product/photo/${related._id}`}
                  alt={related.name}
                />
                <p>{related.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
