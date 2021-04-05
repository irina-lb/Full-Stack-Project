//import components
import NewArrival from "../components/Menu/NewArrival";
import ProductsFilter from "../components/Menu/ProductsFilter";
import ProductPage from "../components/Menu/ProductPage";
import { useLocation } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function Menu() {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  return (
    <>
      {pathId && <ProductPage pathId={pathId} />}
      <motion.div
        className="menu"
        variants={pageAnimation}
        exit="exit"
        initial="hidden"
        animate="show"
      >
        <NewArrival />
        <div className="principalSection">
          <h3 className="titleMenu">
            Our menu for <span>You</span>!
          </h3>
          <p className="textMenu">
            Hello and welcome to our menu! We can’t wait to share our passion
            for food with you. Our menus are unique, huge choice, big portions
            and delicious! We aim to please so you won’t be disappointed! We
            hope you'll enjoy…
          </p>
          <ProductsFilter />
        </div>
      </motion.div>
    </>
  );
}

export default Menu;
