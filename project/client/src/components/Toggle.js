//frame-motion
import { motion } from "framer-motion";
//import hooks
import { useState } from "react";
//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ children, question }) => {
  //state
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>
        <p>
          <i>
            <FontAwesomeIcon icon={toggle ? faMinus : faPlus} />
          </i>
          {question}
        </p>
      </motion.h4>
      {toggle ? children : ""}
    </motion.div>
  );
};

export default Toggle;
