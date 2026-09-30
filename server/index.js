require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./configaration/dbConnection");
const apiRoutes = require("./routes/api");
const app = express();

app.use(cors());
app.use(express.json());

dbConnection();

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Next Gen Digital Agency Server is Running!");
});

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}

module.exports = app;