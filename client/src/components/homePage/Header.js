//img import
import cooking from "../../styles/img/cooking.png";
//router import
import { Link } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { titleAnimation, fade } from "../../animation";

function Header() {
  return (
    <motion.div className="header">
      <motion.div className="header-text">
        <motion.div className="title">
          <motion.div className="hide">
            <motion.h1 variants={titleAnimation}>Let's cook</motion.h1>
          </motion.div>
          <motion.div className="hide">
            <motion.h1 variants={titleAnimation}>
              something <span> yummy </span>
            </motion.h1>
          </motion.div>
          <motion.div className="hide">
            <motion.h1 variants={titleAnimation}>together.</motion.h1>
          </motion.div>
        </motion.div>
        <Link to="/menu" className="header-button">
          <motion.button variants={fade}>Try now</motion.button>
        </Link>
      </motion.div>
      <img src={cooking} alt="Ups.." />
    </motion.div>
  );
}

export default Header;
