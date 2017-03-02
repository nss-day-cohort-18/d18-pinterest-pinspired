"use strict";
// EDIT PERSONAL SAVED PINS (MY THINGS)
app.controller("ThingEditCtrl", function($scope, $location, $routeParams, ViewThingFactory){
  $scope.title = "Edit Thing";
  $scope.btnText = "Submit";
  // $scope.newTask = {};

  ViewThingFactory.getSingleThing($routeParams.thingId)
  .then(function successCallback(response){
     console.log("getSingleThingresponse", response);
      // $scope.newTask = response;
  });
    
  // $scope.addNewItem = function(){
  //   ItemStorage.updateItem($routeParams.itemId, $scope.newTask)
  //   .then(function successCallback(response) {
  //     console.log(response);
  //     $location.url("/items/list");
  //   });
  });