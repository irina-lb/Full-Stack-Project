//import hooks
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import functions
import { isAuthenticated } from "../../controllers/auth";
import { getCategories, deleteCategory } from "../../controllers/category";
import { categorySuccess, categoryError } from "../../controllers/alerts";

function UpdateCategory() {
  //states
  const [categories, setCategories] = useState([]);
  //user and token from local storage
  const { user, token } = isAuthenticated();

  //all categories
  const allCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };
  useEffect(() => {
    allCategories();
  }, []);

  //deleting of the chosen product
  const deleteChosenCategory = (categoryId) => {
    deleteCategory(categoryId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        allCategories();
      }
    });
  };
  console.log(categories);
  return (
    <div className="updateCategory">
      <p>Choose one category for update or delete</p>
      <ul className="allCategories">
        {categories.map((category, index) => (
          <li key={category._id}>
            <p>
              <span>{index + 1}.</span> {category.name}
            </p>
            <Link to={`/admin/update/category/${category._id}`}>
              <button className="updateButton">Update</button>
            </Link>
            <div>
              <button
                className="deleteButton"
                onClick={() => deleteChosenCategory(category._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpdateCategory;
