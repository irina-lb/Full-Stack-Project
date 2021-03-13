//import components
import NewArrival from "../components/Menu/NewArrival";
import ProductsFilter from "../components/Menu/ProductsFilter";

function Menu() {
  return (
    <div className="menu">
      <NewArrival />
      <div className="principalSection">
        <ProductsFilter />
      </div>
    </div>
  );
}

export default Menu;
