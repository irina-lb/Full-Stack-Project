//hooks import
import { useState, useEffect } from "react";
//functions import
import { getProducts } from "../../controllers/product";
//import components
import ProductCard from "./ProductCard";

function NewArrival() {
  //states
  const [byArrival, setByArrival] = useState([]);
  const [error, setError] = useState(false);

  //show new products
  const productsByArrival = () => {
    getProducts("createdAt", 3).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setByArrival(data);
      }
    });
  };
  useEffect(() => {
    productsByArrival();
  }, []);

  return (
    <div className="newRecipes">
      <h4>Check our New Arrivals</h4>
      <div className="products">
        {byArrival.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default NewArrival;
