"use strict";

app.controller("HoardEditCtrl", function($scope, $window, ViewHoardFactory, $routeParams) {
  $scope.title = "Edit Hoard";
  $scope.btnText = "Submit";
  // $scope.newTask = {};

  ViewHoardFactory.getSingleHoard($routeParams.hoardId)
  .then(function successCallback(response){
      // $scope.newTask = response;
  });
    
  // $scope.addNewItem = function(){
  //   ItemStorage.updateItem($routeParams.itemId, $scope.newTask)
  //   .then(function successCallback(response) {
  //     console.log(response);
  //     $location.url("/items/list");
  //   });
  });