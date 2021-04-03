//image import
import delivery from "../styles/img/delivery.png";
import ContactForm from "../components/ContactForm";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function Contacts() {
  return (
    <motion.div
      className="contacts"
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <div className="delivery">
        <div className="deliveryText">
          <h3>Our delivery</h3>
          <ul>
            <li>We work every day from 8am to 7pm.</li>
            <li>You can choose specific time window for your delivery.</li>
            <li>
              We will deliver your oder right to your door in the next day.
            </li>
          </ul>
          <p>
            If you have any problems with delivery, our service or quality of
            products, please contact with us by email: help@cookaschef.com
          </p>
        </div>
        <img src={delivery} alt="Ups.." />
      </div>
      <div className="contactUs">
        <ContactForm />
      </div>
    </motion.div>
  );
}

export default Contacts;
