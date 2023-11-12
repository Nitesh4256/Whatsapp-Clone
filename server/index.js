const express = require("express");
const { Connection } = require("./database/db");
require("dotenv").config();
const route = require("./routes/route");
const app = express();
const cors = require("cors");
Connection();
app.use(express.json());
app.use(cors());
app.use("/", route);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server is running successfully on port " + PORT);
});
