"use strict";
const cartItems = {
    template: `
    <p class="title">My Shopping Cart</p>
    <div class="whole">
    <section class="notepad" ng-repeat="starters in $ctrl.shoppingList track by $index"> 
      <p class="product">{{starters.id}}. {{starters.product}} </p>
      <p class="quantity"> Quantity: {{starters.quantity}} </p>
      <p class="price"> Price: {{starters.price | currency }} </p>
    </section>
    </div>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getItems().then(response => {
            console.log(response);
            vm.shoppingList = response.data;
        })
    }]
}
angular
    .module("App")
    .component("cartItems", cartItems);