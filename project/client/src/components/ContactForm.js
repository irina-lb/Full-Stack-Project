//import hooks
import { useState } from "react";
//function import
import { sendEmail } from "../controllers/mail";
//animation
import { motion } from "framer-motion";
import { fade } from "../animation";

function ContactForm() {
  //states
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    success: false,
    error: false,
  });

  //check inputs changes
  const handleChanges = (name) => (event) => {
    setForm({ ...form, [name]: event.target.value });
  };
  const submitForm = (event) => {
    event.preventDefault();
    sendEmail(form).then((data) => {
      if (data.error) {
        setForm({ ...form, error: true });
      } else {
        setForm({ ...form, name: "", email: "", message: "", success: true });
      }
    });
  };

  return (
    <motion.div>
      <h3> Contact us </h3>
      <motion.form onSubmit={submitForm} variants={fade}>
        {form.success && (
          <div className="success">
            You message has been sended successfully
          </div>
        )}
        <div className="contactUsInput">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name..."
            value={form.name}
            onChange={handleChanges("name")}
          />
        </div>
        <div className="contactUsInput">
          <label htmlFor="email">Your email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email..."
            value={form.email}
            onChange={handleChanges("email")}
          />
        </div>
        <div className="contactUsInput">
          <label htmlFor="message">Your message:</label>
          <textarea
            value={form.message}
            onChange={handleChanges("message")}
            id="message"
            rows="6"
            cols="50"
            placeholder="Enter your message..."
          />
        </div>
        <button>Send</button>
      </motion.form>
    </motion.div>
  );
}

export default ContactForm;
