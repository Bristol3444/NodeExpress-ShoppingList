"use strict";
const express = require("express");
const items = express.Router();
const pool = require("./connection");
// function that on a returned promise, sends back everything from the table
function selectAll(req, res) {
    pool.query("select * from shopping_cart order by id asc").then(function(result) {
        res.send(result.rows);
    });
}
// get method, pulls the shopping cart table
items.get("/cart-items", (req, res) => {
    selectAll(req,res);
    console.log("GET");
});
// post method, adds to the table
items.post("/cart-items", (req, res) => {
    pool.query("insert into shopping_cart (product, price, quantity) values ($1::text, $2::int, $3::int)",[req.body.product, req.body.price, req.body.quantity]).then(function() {
        selectAll(req, res);
        console.log("POST");
    });
});
// delete method, removes from the table by id
items.delete("/cart-items/:id", (req, res) => {
    pool.query("delete from shopping_cart where id=$1::int", [req.params.id]).then(function() {
        selectAll(req, res);
        console.log("DELETE");
    });
});
// put method, updates the table by id
items.put("/cart-items/:id", (req, res) => {
    pool.query("Update shopping_cart set quantity=$1::int where id=$2::int", [req.body.quantity, req.params.id]).then(function() {
        selectAll(req, res);
        console.log("PUT");
    });
});
module.exports = items;