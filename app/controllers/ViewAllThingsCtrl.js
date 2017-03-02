"use strict";

// Our todo controller
app.controller("ViewAllThingsCtrl", function($scope, $location, ViewAllThingsFactory){
console.log("HI")
  // $scope.welcome = "hello";
  // // if listview is true, show listview in html
  // $scope.showListView = true;
  // // Setting up an empty obj for new tasks
  // $scope.newTask = {};


  // making function for the URL-- go to APP.JS
  // functionality for new item
  // button in html
  $scope.newItem = function(){
    console.log("you clicked on new item", $location);
    // set to false (it was set to true before)
    // $scope.showListView = false;
    // Location changes the URL
    $location.url("/hoardist/allthingslist");
  };
  // function for all item
  // buttons in html
  $scope.things = [];
  $scope.allThings = function(){
    ViewAllThingsFactory.getThings()
    .then((thingsObj) => {
      console.log(thingsObj);
      let data = thingsObj.data;

    let keys = Object.keys(data)
    for (var i = 0; i < keys.length; i++) {
      console.log(keys);

      thingsObj.data[keys[i]]
        $scope.things.push(thingsObj.data[keys[i]])


    }
console.log($scope.things)
    });
    // console.log("you clicked on show all items");
    // $scope.showListView = true;
    // $location.url("/items/list");

  }; $scope.allThings();



});
