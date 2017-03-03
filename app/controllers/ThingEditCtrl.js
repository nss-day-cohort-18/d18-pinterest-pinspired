"use strict";
// EDIT PERSONAL SAVED PINS (MY THINGS)
app.controller("ThingEditCtrl", function($scope, $location, $routeParams, ViewThingFactory, ThingEditFactory){
  $scope.title = "Edit Thing";
  $scope.btnText = "edit me";
  $scope.thing;

  // $scope.thingId = 
  // $scope.newThing = {};

  ViewThingFactory.getSingleThing($routeParams.thingId)
  .then(function successCallback(response){
    $scope.thing = response;
     console.log("getSingleThingresponse", response);
      // $scope.newTask = response;
  });

  $scope.submitThingEdit = function(){
    console.log("scope.id", $scope.id)
     let thingId = $scope.thing.id;
     console.log("thingId: ", thingId);
     let editedThing = $scope.newThing;
     console.log("editedThing: ", editedThing);

    console.log("hi1");
    ThingEditFactory.updateThing(thingId, editedThing);
    console.log("hi2");
  };
    
  // $scope.addNewItem = function(){
  //   ItemStorage.updateItem($routeParams.itemId, $scope.newTask)
  //   .then(function successCallback(response) {
  //     console.log(response);
  //     $location.url("/items/list");
  //   });
  });  
