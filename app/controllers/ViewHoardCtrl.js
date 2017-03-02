"use strict";

app.controller("ViewHoardCtrl", function($scope, $window, $routeParams, AuthFactory, ViewHoardFactory) {

$scope.hoards = [];

let user = AuthFactory.getUser();

ViewHoardFactory.getHoards(user)
.then(function(hoardCollection){
  $scope.hoards = hoardCollection;

    $scope.selectedHoards = $scope.hoards.filter(function(hoard){
      return hoard.id === $routeParams.hoardId;
    })[0];
  }); 
});