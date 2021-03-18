//hooks import
import { useState, useEffect } from "react";
//router import
import { Link } from "react-router-dom";
//import controllers
import { checkId, showRelatedProducts } from "../../controllers/product";
//api
import { API } from "../../config";
//icons import
import money from "../../styles/icons/Payment.png";
import portion from "../../styles/icons/Pizza.png";
import time from "../../styles/icons/Time.png";

function ProductPage(props) {
  //state
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [relatedProduct, setRelatedProduct] = useState([]);

  //load product by id
  const loadProduct = (productId) => {
    checkId(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        showRelatedProducts(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadProduct(productId);
  }, [props]);

  return (
    <div className="shadow">
      <div className="productPage">
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
                <button className="buttonAdd">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="relatedTitle">You might also like this recipes:</h3>
      <div className="relatedProducts">
        {relatedProduct.map((related) => (
          <Link to={`/product/${related._id}`}>
            <div className="related" key={related._id}>
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
  );
}

export default ProductPage;
