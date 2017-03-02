"use strict";

app.controller("NewThingCtrl", function($scope, $location, AuthFactory, NewThingFactory){
  
  let user = AuthFactory.getUser();
  $scope.title ="Add a new thing!";
  $scope.btnText = "Add it!"; 

  // function for adding new item to new task
  $scope.addNewThing = function(){
    console.log("add new thing");
    // created obj up on page, now using it here
    NewThingFactory.postNewThing($scope.newThing)
    .then(function(response){
      $location.url("/items/list"); //gets this from app.js
    });
    console.log("you added a new item", $scope.newThing);
    $scope.newThing = {}; //this re-sets form so it's blank after the user adds a new thing

  };


  $scope.newThing = {
    thingId: "",
    userId: user,
    title: "",
    URL: ""
  };



});