"use strict";

app.controller("UserDetailsCtrl", function($scope, AuthFactory) {
	// console.log("UserDetailsCtrl");

	$scope.currentUser = AuthFactory.getUser();
	console.log("UserDetailsCtrl: ", $scope.currentUser);
});