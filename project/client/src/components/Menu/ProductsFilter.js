//hooks import
import { useState, useEffect } from "react";
//function import
import { getCategories } from "../../controllers/category";
import { showFilteredProducts } from "../../controllers/product";
//import components
import FilterByCategories from "./FilterByCategories";
import FilterByPrice from "./FilterByPrice";
import ProductCard from "./ProductCard";
//import util
import { prices } from "../../util";
//routes import
import { useLocation } from "react-router-dom";

function ProductsFilter() {
  //states
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(9);
  const [size, setSize] = useState(0);
  const [result, setResult] = useState([]);
  const [productFilters, setProductFilters] = useState({
    filters: { category: [], price: [] },
  });

  //get all categories
  const allCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };
  //get products
  const loadProducts = (productFilters) => {
    showFilteredProducts(skip, limit, productFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };
  useEffect(() => {
    allCategories();
    loadProducts(skip, limit, productFilters.filters);
  }, []);

  //common filter
  const handleFilter = (filters, filterBy) => {
    const checkedFilters = { ...productFilters };
    checkedFilters.filters[filterBy] = filters;
    if (filterBy === "price") {
      checkedFilters.filters[filterBy] = handlePrice(filters);
    }
    loadProducts(productFilters.filters);
    setProductFilters(checkedFilters);
    setLimit(6);
  };

  //filter by price
  const handlePrice = (value) => {
    let limit = [];
    for (let key in prices) {
      if (prices[key].id === parseInt(value)) {
        limit = prices[key].limit;
      }
    }
    return limit;
  };

  //load more products
  const loadMore = () => {
    let toSkip = skip + limit;
    showFilteredProducts(toSkip, limit, productFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setResult([...result, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="loadMore">
          Load more...
        </button>
      )
    );
  };

  return (
    <>
      <div className="mainMenu">
        <div className="productsFilter">
          <div className="categoryFilter">
            <h4>Choose category:</h4>
            <FilterByCategories
              categories={categories}
              handleFilter={(filters) => handleFilter(filters, "category")}
            />
          </div>
          <div className="priceFilter">
            <h4>Choose price:</h4>
            <FilterByPrice
              prices={prices}
              handleFilter={(filters) => handleFilter(filters, "price")}
            />
          </div>
        </div>
        <div className="mainProducts">
          {result.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div>{loadMoreButton()}</div>
    </>
  );
}

export default ProductsFilter;
