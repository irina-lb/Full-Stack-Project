//components import
import Header from "../components/homePage/Header";
import About from "../components/homePage/About";
import Popular from "../components/homePage/Popular";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function HomePage() {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <div className="container">
        <Header />
        <About />
        <Popular />
      </div>
    </motion.div>
  );
}

export default HomePage;
