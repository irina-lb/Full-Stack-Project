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
const PORT = process.env.PORT || 4000;

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middlewares
app.use(cookieParser());
app.use(expressValidator());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api", require("./routes/users"));
app.use("/api", require("./routes/categories"));
app.use("/api", require("./routes/products"));

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
