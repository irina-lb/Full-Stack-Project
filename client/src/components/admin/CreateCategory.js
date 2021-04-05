//hooks import
import { useState } from "react";
//function import
import { isAuthenticated } from "../../controllers/auth";
import { createCategory } from "../../controllers/category";
import { categorySuccess, categoryError } from "../../controllers/alerts";

function CreateCategory() {
  //states
  const [category, setCategory] = useState({
    name: "",
    error: false,
    success: false,
  });
  //user and token from local storage
  const { user, token } = isAuthenticated();

  const handleChange = (event) => {
    setCategory({ ...category, name: event.target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();
    setCategory({ ...category, error: false, success: false });
    createCategory(user._id, token, category).then((data) => {
      if (data.error) {
        setCategory({ ...category, error: true });
      } else {
        setCategory({ ...category, name: "", success: true });
      }
    });
  };

  return (
    <div className="createCategory">
      <h4>Create category</h4>
      {categorySuccess(category.success)}
      {categoryError(category.error)}
      <form onSubmit={submitForm}>
        <div className="categoryInput">
          <label htmlFor="inputCategory">Category name:</label>
          <input
            type="text"
            placeholder="Enter category name"
            className="inputCategory"
            onChange={handleChange}
            value={category.name}
          />
        </div>
        <button>Create category</button>
      </form>
    </div>
  );
}

export default CreateCategory;
