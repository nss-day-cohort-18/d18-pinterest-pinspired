"use strict";

// Our todo controller
app.controller("ViewAllHoardsCtrl", function($scope, $location, ViewAllHoardsFactory, AuthFactory){
let userId = AuthFactory.getUser() ;

console.log("HI");

  $scope.hoards = [];
  $scope.allHoards = function(){
    console.log("userId", userId);
    ViewAllHoardsFactory.getAllHoards(userId)
    .then((hoardsObj) => {
      console.log(hoardsObj);
      let data = hoardsObj.data;

    let keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
      data[keys[i]];
        $scope.hoards.push(hoardsObj.data[keys[i]]);


    }
console.log($scope.hoards);
    });
    // console.log("you clicked on show all items");
    // $scope.showListView = true;
    // $location.url("/items/list");

  }; $scope.allHoards();



});
