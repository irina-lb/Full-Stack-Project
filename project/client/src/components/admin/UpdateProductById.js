//import hooks
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import functions
import { isAuthenticated } from "../../controllers/auth";
import { getCategories } from "../../controllers/category";
import { checkId, updateProduct } from "../../controllers/product";
import {
  showError,
  productSuccess,
  showLoading,
} from "../../controllers/alerts";

function UpdateProductById({ match }) {
  //states
  const [products, setProducts] = useState({
    name: "",
    description: "",
    time: "",
    portion: "",
    price: "",
    categories: [],
    category: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    success: false,
    formData: "",
  });
  const [categories, setCategories] = useState([]);

  //history
  const history = useHistory();

  //user from jwt
  const { user, token } = isAuthenticated();

  //all categories
  const allCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setProducts({ ...products, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  //product by id
  const productById = (productId) => {
    checkId(productId).then((data) => {
      if (data.error) {
        setProducts({ ...products, error: data.error });
      } else {
        setProducts({
          ...products,
          name: data.name,
          description: data.description,
          price: data.price,
          time: data.time,
          portion: data.portion,
          category: data.category._id,
          quantity: data.quantity,
          formData: new FormData(),
        });
        allCategories();
      }
    });
  };

  useEffect(() => {
    productById(match.params.productId);
  }, []);

  //check data from inputs
  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    products.formData.set(name, value);
    setProducts({ ...products, [name]: value });
  };

  //submit update
  const submitForm = (event) => {
    event.preventDefault();
    setProducts({ ...products, error: "", loading: true });
    updateProduct(
      match.params.productId,
      user._id,
      token,
      products.formData
    ).then((data) => {
      if (data.error) {
        setProducts({ ...products, error: data.error });
      } else {
        setProducts({
          ...products,
          name: "",
          description: "",
          time: "",
          portion: "",
          price: "",
          category: "",
          quantity: "",
          photo: "",
          error: "",
          loading: false,
          success: true,
        });
      }
      history.push("/admin/update_products");
    });
  };

  return (
    <div className="createProduct">
      {showError(products.error)}
      {productSuccess(products.success)}
      {showLoading()}
      <form onSubmit={submitForm}>
        <div className="productData">
          <h2>Create Product</h2>
          <div>
            <h4>Post Photo</h4>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange("photo")}
              id="photo"
            />
            <small>Image should be less than 1mb</small>
          </div>
          <div>
            <h4>Choose category</h4>
            <label htmlFor="select">Category:</label>
            <select onChange={handleChange("category")} id="select">
              <option>Please select</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="productInformation">
          <h4>Enter product information</h4>
          <div>
            <label htmlFor="productName">Name:</label>
            <input
              placeholder="Enter name"
              type="text"
              onChange={handleChange("name")}
              id="productName"
              value={products.name}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              placeholder="Enter short description"
              onChange={handleChange("description")}
              id="description"
              rows="4"
              cols="50"
              value={products.description}
            />
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <input
              placeholder="Enter preparation time"
              type="text"
              onChange={handleChange("time")}
              id="time"
              value={products.time}
            />
          </div>
          <div>
            <label htmlFor="portion">Portion:</label>
            <input
              type="text"
              placeholder="Enter portions"
              onChange={handleChange("portion")}
              id="portion"
              value={products.portion}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              placeholder="Enter price"
              onChange={handleChange("price")}
              id="price"
              value={products.price}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="text"
              placeholder="Enter quantity in stock"
              onChange={handleChange("quantity")}
              id="quantity"
              value={products.quantity}
            />
          </div>
          <div>
            <button>Update Product</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateProductById;
