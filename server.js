"use strict";
const express = require("express");
const app = express();
const cartItems = require("./routes");
app.use(express.static("./public"));
app.use(express.json());
app.use("/", cartItems);
app.listen(8070, () => {
    console.log("the server is running");
})