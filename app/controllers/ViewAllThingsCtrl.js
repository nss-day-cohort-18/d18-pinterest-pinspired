"use strict";

// Our todo controller
app.controller("ViewAllThingsCtrl", function($scope, $location){

  $scope.welcome = "hello";
  // if listview is true, show listview in html
  $scope.showListView = true;
  // Setting up an empty obj for new tasks
  $scope.newTask = {};


  // making function for the URL-- go to APP.JS
  // functionality for new item
  // button in html
  $scope.newItem = function(){
    console.log("you clicked on new item", $location);
    // set to false (it was set to true before)
    // $scope.showListView = false;
    // Location changes the URL
    $location.url("/items/new");
  };
  // function for all item 
  // buttons in html
  $scope.allItem = function(){
    console.log("you clicked on show all items");
    // $scope.showListView = true;
    $location.url("/items/list");
  };


});