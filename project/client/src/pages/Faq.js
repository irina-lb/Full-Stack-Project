//import array
import { faq } from "../util";
//import components
import Toggle from "../components/Toggle";
//routes import
import { Link } from "react-router-dom";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function Faq() {
  return (
    <motion.div
      className="faq"
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <h3>Do you have any questions?</h3>
      <p className="toggleText">
        If you didn't find the answer here, you can contact{" "}
        <Link to="/contacts">contact us</Link> directly!{" "}
      </p>
      {faq.map((question) => {
        return (
          <div className="questions" key={question.question}>
            <Toggle question={question.question}>
              <div className="answer">
                <p>{question.answer}</p>
              </div>
            </Toggle>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Faq;
