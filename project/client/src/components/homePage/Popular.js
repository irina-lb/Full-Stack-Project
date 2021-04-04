//import api
import { API } from "../../config";
//hooks import
import { useState, useEffect } from "react";
//functions import
import { getProducts } from "../../controllers/product";
//import routes
import { Link } from "react-router-dom";

function Popular() {
  //states
  const [bySell, setBySell] = useState([]);

  //show most sold products
  const productsBySell = () => {
    getProducts("sold", 6).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBySell(data);
      }
    });
  };

  useEffect(() => {
    productsBySell();
  }, []);
  return (
    <div className="popularRecipes">
      <h3>Our clients' favorite recipes</h3>
      <div className="popularImages">
        {bySell.map((product) => (
          <Link to={`/menu/${product._id}`} key={product._id}>
            <img
              src={`${API}/product/photo/${product._id}`}
              alt={product.name}
            />
            <p>{product.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Popular;
