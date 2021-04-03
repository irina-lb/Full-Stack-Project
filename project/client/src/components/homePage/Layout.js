//animation
import { motion } from "framer-motion";
import { photoAnimation, fade, scrollReveal } from "../../animation";

function Layout({ title, text, img }) {
  return (
    <motion.div className="container">
      <motion.div className="description">
        <motion.div className="descriptionText">
          <motion.h2 variants={fade}>{title}</motion.h2>
          <motion.p variants={fade}>{text}</motion.p>
        </motion.div>
        <motion.img
          variant={photoAnimation}
          src={img}
          alt="Ups.."
          variants={photoAnimation}
        />
      </motion.div>
    </motion.div>
  );
}

export default Layout;
