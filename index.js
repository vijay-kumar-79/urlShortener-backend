const express = require("express");
const urlRoute = require("./routes/urlRoute");
const redirectUrl = require("./routes/redirect");
const connectDB = require("./utils/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORt || 5000;
connectDB();

app.use(cors());

app.use(express.json());
app.use("/url", urlRoute);
app.use("/", redirectUrl);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
