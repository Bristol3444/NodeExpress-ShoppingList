"use strict";
const express = require("express");
const items = express.Router();
const shoppingList = [
    {
        id: 1,
        product: "Beer",
        quantity: 6,
        price: 10.5
    },
    {
        id: 2,
        product: "Hot Dogs",
        quantity: 4,
        price: 4
    },
    {
        id: 3,
        product: "Cereal",
        quantity: 1,
        price: 2.50
    }
];
items.get("/cart-items", function(req, res) {
    res.send(shoppingList);
    console.log(shoppingList);
});

items.post("/cart-items", function(req, res) {
    console.log(req.body);
    shoppingList.push(req.body);
    res.send(shoppingList);
    console.log(shoppingList);
});

items.delete("/cart-items/:id", function(req, res) {
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].id == req.params.id) {
            shoppingList.splice(i, 1);
            res.send(shoppingList);
            break;
        }
    }
    console.log("item deleted");
    console.log(shoppingList);
})
items.put("/cart-items/:id", function(req, res) {
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].id == req.params.id) {
            shoppingList.splice(i, 1, req.body);
            res.send(shoppingList);
            break;
        }
    }
    console.log("item updated");
    console.log(shoppingList);
})
module.exports = items;