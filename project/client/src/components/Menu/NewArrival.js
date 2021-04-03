//hooks import
import { useState, useEffect } from "react";
//functions import
import { getProducts } from "../../controllers/product";
//import router
import { Link } from "react-router-dom";
//import api
import { API } from "../../config";
import { useLocation } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { fade } from "../../animation";

function NewArrival() {
  //states
  const [byArrival, setByArrival] = useState([]);
  const [error, setError] = useState(false);

  //show new products
  const productsByArrival = () => {
    getProducts("createdAt", 4).then((data) => {
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
    <>
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 224 1440 96"
      >
        <path
          fill="#939597"
          d="M0,224L120,229.3C240,235,480,245,720,245.3C960,245,1200,235,1320,229.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>
      <motion.div className="newRecipes">
        <motion.h4 variants={fade}>Check our New Arrivals</motion.h4>
        <div className="newArrival">
          {byArrival.map((product) => (
            <motion.div key={product._id} className="card">
              <Link to={`/menu/${product._id}`}>
                <p>{product.name}</p>
                <motion.img
                  variants={fade}
                  src={`${API}/product/photo/${product._id}`}
                  alt={product.name}
                  key={product._id}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default NewArrival;
