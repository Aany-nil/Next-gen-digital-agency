require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const dns = require("node:dns/promises");
const dbConnection = require("./configaration/dbConnection");
const apiRoutes = require ("./routes/api")

const app = express();
const PORT = process.env.PORT || 8000;

dns.setServers(["8.8.8.8", "8.8.4.4"]);
app.use(cors());
app.use(express.json());
dbConnection();
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.send("Next Gen Digital Agency");
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});