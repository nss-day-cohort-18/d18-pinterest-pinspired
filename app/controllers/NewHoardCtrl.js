"use strict";

app.controller("NewHoardCtrl", function($scope, $location, AuthFactory, NewHoardFactory){
  
  let user = AuthFactory.getUser();
  $scope.title ="Add a new hoard";
  $scope.btnText = "Add It!"; 

  $scope.newHoard = {
      userId: user
      };

  // function for adding new item to new task
  $scope.addNewHoard = function(){
    console.log("user", user);

    console.log("add new hoard");
    // created obj up on page, now using it here
    NewHoardFactory.postNewHoard($scope.newHoard)
    .then(function(response){
      $location.url("/hoardist/newhoard"); //gets this from app.js
    });
    console.log("you added a new hoard", $scope.newHoard);
    $scope.newHoard = {}; //this re-sets form so it's blank after the user adds a new hoard
  };





});