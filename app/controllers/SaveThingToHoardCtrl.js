"use strict";

app.controller("SaveThingToHoardCtrl", function($scope, $location, AuthFactory){
  
  let user = AuthFactory.getUser();

  // $scope.btnText = "Submit"; 

  // function for saving thing to hoard
  // $scope.saveThingToHoard = function(){
  //   console.log("add new thing");
  //   // created obj up on page, now using it here
  //   NewThingFactory.postNewThing($scope.newThing)
  //   .then(function(response){
  //     $location.url("/items/list"); //gets this from app.js
  //   });
  //   console.log("you added a new item", $scope.newThing);
  //   $scope.newThing = {}; //this re-sets form so it's blank after the user adds a new thing

  // };


  // $scope.newThing = {
  //   thingId: "",
  //   userId: user,
  //   hoardId: "",
  //   URL: "",
  //   title: ""
  // };

// hoardId: ??? userId.something ???

});