const express = require("express");
const router = express.Router();
const contactRoutes = require("./contact");


router.use("/", contactRoutes);

module.exports = router;