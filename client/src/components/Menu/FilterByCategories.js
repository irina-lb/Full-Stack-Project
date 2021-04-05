//hooks import
import { useState } from "react";

function FilterByCategories({ categories, handleFilter }) {
  //states
  const [checked, setChecked] = useState([]);

  //check if category was already checked
  const handleCheckedCategory = (categoryId) => () => {
    const currentId = checked.indexOf(categoryId);
    const newId = [...checked];
    if (currentId === -1) {
      newId.push(categoryId);
    } else {
      newId.splice(currentId, 1);
    }
    setChecked(newId);
    handleFilter(newId);
  };

  return (
    <ul>
      {categories.map((category) => (
        <li className="categoryList" key={category._id}>
          <input
            onChange={handleCheckedCategory(category._id)}
            value={checked}
            type="checkbox"
            className="categoryCheckbox"
          />
          <label htmlFor="categoryCheckbox">{category.name}</label>
        </li>
      ))}
    </ul>
  );
}

export default FilterByCategories;
