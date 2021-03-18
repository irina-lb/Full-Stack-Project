//import hooks
import { useState } from "react";

function FilterByPrice({ prices, handleFilter }) {
  //state
  const [value, setValue] = useState(0);

  //change chosen value
  const handleChange = (event) => {
    handleFilter(event.target.value);
    setValue(event.target.value);
  };
  return (
    <ul>
      {prices.map((price) => (
        <li key={price.id}>
          <input
            onChange={handleChange}
            type="radio"
            className="priceRadioBox"
            name={price}
            value={price.id}
          />
          <label htmlFor="priceRadioBox">{price.name}</label>
        </li>
      ))}
    </ul>
  );
}

export default FilterByPrice;
