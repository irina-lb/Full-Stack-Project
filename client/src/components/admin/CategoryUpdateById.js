//import hooks
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import functions
import { isAuthenticated } from "../../controllers/auth";
import { categoryById, updateCategory } from "../../controllers/category";

function CategoryUpdateById({ match }) {
  //states
  const [category, setCategory] = useState({
    name: "",
    error: "",
    success: false,
  });

  //user from jwt
  const { user, token } = isAuthenticated();

  //history
  const history = useHistory();

  //category by id
  const getCategoryById = (categoryId) => {
    categoryById(categoryId).then((data) => {
      if (data.error) {
        setCategory({ ...category, error: data.error });
      } else {
        setCategory({
          ...category,
          name: data.name,
          success: true,
        });
      }
    });
  };

  useEffect(() => {
    getCategoryById(match.params.categoryId);
  }, []);

  //update category
  const handleChange = (name) => (event) => {
    setCategory({ ...category, error: false, [name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    updateCategory(match.params.categoryId, user._id, token, category).then(
      (data) => {
        if (data.error) {
          setCategory({ ...category, error: data.error });
        } else {
          setCategory({
            ...category,
            name: data.name,
            error: false,
            success: true,
          });
        }
        history.push("/admin/update_category");
      }
    );
  };
  return (
    <div className="createCategory">
      <h4>Update category</h4>
      <form onSubmit={submitForm}>
        <div className="categoryInput">
          <label htmlFor="inputCategory">Category name:</label>
          <input
            type="text"
            placeholder="Enter category name"
            className="inputCategory"
            onChange={handleChange("name")}
            value={category.name}
          />
        </div>
        <button>Update category</button>
      </form>
    </div>
  );
}

export default CategoryUpdateById;
