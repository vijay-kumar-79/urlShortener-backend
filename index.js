const express = require("express");
const urlRoute = require("./routes/urlRoute");
const redirectUrl = require("./routes/redirect");
const connectDB = require("./utils/db");
const cors = require("cors")

const app = express();
const PORT = 5000;
connectDB();

app.use(cors());

app.use(express.json());
app.use("/url", urlRoute);
app.use("/", redirectUrl);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
