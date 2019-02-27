"use strict";
function CartService($http) {
    const self = this;

    self.getItems = () => {
        return $http({
            method: "GET",
            url: "/cart-items"
        });
    };
    self.addItems = (newitem) => {
        return $http({
            method: "POST",
            url: "/cart-items",
            data: {...newitem, price : Number(newitem.price), quantity : Number(newitem.quantity)}
        });
    };
    self.removeItem = (id) => {
        return $http({
            method: "DELETE",
            url: `/cart-items/${id}`
        });
    };
    self.updateItem = (id, newitem) => {
        return $http({
            method: "PUT",
            url: `/cart-items/${id}`,
            data: {...newitem, quantity : Number(newitem.quantity)}
        });
    }

}
angular
    .module("App")
    .service("CartService", CartService);