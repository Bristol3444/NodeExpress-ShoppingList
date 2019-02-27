"use strict";
const cartItems = {
    template: `
    <p class="title">My Shopping Cart</p>
    <p class="sub-title">Add A new Item</p>
    <form class="form" ng-submit="$ctrl.addItem(newitem);">
        <input class="enter" type="text" ng-model="newitem.product" placeholder="product">
        <input class="enter" type="text" ng-model="newitem.price" placeholder="price">
        <input class="enter" type="text" ng-model="newitem.quantity" placeholder="quantity">
        <button class="add">Add To List</button>
    </form>
    <div class="whole">
    
    <section class="notepad" ng-repeat="starters in $ctrl.shoppingList track by $index"> 
      <p class="product">{{starters.id}}. {{starters.product}} </p>
        <div class="quantity">
            <p class="quantity"> Quantity: {{starters.quantity}} </p>
            <button class="edit-btn" ng-click="$ctrl.updateItem(starters.id, newitem)">Edit</button>
        </div>
      <p class="price"> Price: {{starters.price | currency }} </p>
      <button class="remove-btn" ng-click="$ctrl.removeItem(starters.id);">Remove Item</button>
    </section>
    </div>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getItems().then(response => {
            vm.shoppingList = response.data;
        });
        vm.addItem = (newitem) => {
            CartService.addItems(newitem).then(function(response) {
                vm.shoppingList = response.data;
            });
        };
        vm.removeItem = (id) => {
            CartService.removeItem(id).then(function(response) {
                vm.shoppingList = response.data;
            })
        }
        vm.updateItem = (id, newitem) => {
            CartService.updateItem(id, newitem).then(function(response) {
                vm.shoppingList = response.data;
                

            })
        }
    }]
}
angular
    .module("App")
    .component("cartItems", cartItems);