"use strict";

app.controller("ItemViewCtrl", function ($scope, $routeParams, ItemStorage, AuthFactory){
  $scope.items = [];
  console.log($routeParams.itemId);

  let user = AuthFactory.getUser();

  ItemStorage.getItemList(user)
  .then(function(itemCollection){
    $scope.items = itemCollection;

    $scope.selectedItem = $scope.items.filter(function(item){
      return item.id === $routeParams.itemId;
    })[0];
    
  });

  
});