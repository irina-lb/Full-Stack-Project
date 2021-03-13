//import api
import { API } from "../../config";
//hooks import
import { useState, useEffect } from "react";
//functions import
import { getProducts } from "../../controllers/product";

function Popular() {
  //states
  const [bySell, setBySell] = useState([]);
  const [error, setError] = useState(false);

  //show most sold products
  const productsBySell = () => {
    getProducts("sold", 6).then((data) => {
      if (data.error) {
        setError(data.error);
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
          <img
            src={`${API}/product/photo/${product._id}`}
            alt={product.name}
            key={product._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
