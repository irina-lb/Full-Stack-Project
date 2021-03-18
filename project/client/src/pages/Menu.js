//import components
import NewArrival from "../components/Menu/NewArrival";
import ProductsFilter from "../components/Menu/ProductsFilter";

function Menu() {
  return (
    <div className="menu">
      <NewArrival />
      <div className="principalSection">
        <h3 className="titleMenu">
          Our menu for <span>You</span>!
        </h3>
        <p className="textMenu">
          Hello and welcome to our menu! We can’t wait to share our passion for
          food with you. Our menus are unique, huge choice, big portions and
          delicious! We aim to please so you won’t be disappointed! We hope
          you'll enjoy…
        </p>
        <ProductsFilter />
      </div>
    </div>
  );
}

export default Menu;
