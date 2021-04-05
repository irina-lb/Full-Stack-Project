//packages import
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();

//port
const PORT = process.env.PORT || 2000;

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middlewares
app.use(cookieParser());
app.use(expressValidator());
app.use(morgan("dev"));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Enable CORS in Node.js - Clue Mediator" });
});

//routes
app.use("/api", require("./routes/users"));
app.use("/api", require("./routes/categories"));
app.use("/api", require("./routes/products"));
app.use("/api", require("./routes/post"));
app.use("/api", require("./routes/braintree"));
app.use("/api", require("./routes/order"));
app.use("/api", require("./routes/mail"));

//mongodb connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("Error", error);
});
db.once("open", () => {
  console.log("Connection successful");
});

//listening on port
app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});
