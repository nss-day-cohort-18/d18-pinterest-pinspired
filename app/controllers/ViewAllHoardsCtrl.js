"use strict";

// Our todo controller
app.controller("ViewAllHoards", function($scope, $location, ViewAllHoardsFactory, AuthFactory){
let userId = AuthFactory.getUser() ;

console.log("HI")

  $scope.hoards = [];
  $scope.allHoards = function(){
    ViewAllHoardsFactory.getUserHoards(userId)
    .then((hoardsObj) => {
      console.log(hoardsObj);
      let data = hoardsObj.data;

    let keys = Object.keys(data)
    for (var i = 0; i < keys.length; i++) {
      console.log(keys);

      hoardsObj.data[keys[i]]
        $scope.hoards.push(hoardsObj.data[keys[i]])


    }
console.log($scope.hoards)
    });
    // console.log("you clicked on show all items");
    // $scope.showListView = true;
    // $location.url("/items/list");

  }; $scope.allHoards();



});
