//import hooks
import { useState, useEffect } from "react";
//import routes
import { Link } from "react-router-dom";
//import functions
import { showAllProducts, deleteProduct } from "../../controllers/product";
import { isAuthenticated } from "../../controllers/auth";

function ProductUpdate() {
  //states
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  //pagination
  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / limit); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  //user from jwt
  const { user, token } = isAuthenticated();

  //get all products
  const loadProducts = () => {
    showAllProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  //deleting of the chosen product
  const deleteChosenProduct = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  return (
    <div className="productUpdate">
      <h4>There are {products.length} products on sale.</h4>
      <p>Choose one to upgrade or delete.</p>
      <ul className="paginationAdmin">
        {pages.map((number) => (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={currentPage == number ? "activePage" : null}
          >
            {number}
          </li>
        ))}
      </ul>
      <div className="listOfProducts">
        <ul>
          {currentItems.map((product, index) => (
            <li key={product._id} className="productItem">
              <p className="productName">
                <span>{index + 1}.</span> {product.name}
              </p>
              <p>
                <span>Category:</span> {product.category.name}
              </p>
              <p>
                <span>Quantity:</span> {product.quantity}
              </p>
              <p>
                <span>Sold:</span> {product.sold}
              </p>
              <Link to={`/admin/update/${product._id}`}>
                <button className="updateButton">Update</button>
              </Link>
              <div>
                <button
                  className="deleteButton"
                  onClick={() => deleteChosenProduct(product._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductUpdate;
