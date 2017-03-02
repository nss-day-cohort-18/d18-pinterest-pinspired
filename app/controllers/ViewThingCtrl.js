"use strict";

app.controller("ViewThingCtrl", function ($scope, $routeParams, AuthFactory, ViewThingFactory){
$scope.things = [];

let user = AuthFactory.getUser();

ViewThingFactory.getThings(user)
.then(function(thingCollection){
  $scope.things = thingCollection;

    $scope.selectedThings = $scope.things.filter(function(thing){
      return thing.id === $routeParams.thingId;
    })[0];
  }); 
});