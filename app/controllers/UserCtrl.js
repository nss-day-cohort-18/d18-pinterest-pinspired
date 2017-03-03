"use strict";

app.controller("UserCtrl", function($scope, $window, AuthFactory, $location){

	//run these when controller loads
	$scope.account = {
		email: "",
		password: ""
	};

	let logout = () => {
		console.log("logout clicked");
		AuthFactory.logoutUser()
		.then(function(data){
			console.log("logged out?", data);
			$window.location.url = "#!/login"; //use .url so user can't hit back and stay logged in
		}, function(error){
			console.log("error occured on logout");
		});
	};

	//when first loaded, make sure no one is logged in
	if(AuthFactory.isAuthenticated()){
		logout();
	}


	//setup functions to be available to the app for register, login email/password, and google
	$scope.register = () => {
    	console.log("you clicked register");
	    AuthFactory.createUser({
	      email: $scope.account.email,
	      password: $scope.account.password
	    })
	    .then( (userData) => {
	      console.log("UserCtrl newUser:", userData );
	      $scope.login();
	    }, (error) => {
	        console.log("Error creating user:", error);
	    });
  	};

  	$scope.login = () => {
    	console.log("you clicked login");
    	AuthFactory
	    .loginUser($scope.account)
	    .then( () => {
	        $window.location.href = "#!/hoardist/allthingslist";

	    });
	};

	$scope.loginGoogle = () => {
		console.log("you clicked login with Google");
		AuthFactory.authWithProvider()
		.then(function(result) {
	    	var user = result.user.uid;
	    	console.log("logged in user:", user);
	    	//Once logged in, go to another view
	    	// $location.path("/login-details");
	    	$location.path("/hoardist/allthingslist");
	    	$scope.$apply();
	  	}).catch(function(error) {
	    	// Handle the Errors.
	    	console.log("error with google login", error);
	    	var errorCode = error.code;
	    	var errorMessage = error.message;
	    	// The email of the user's account used.
	    	var email = error.email;
	    	// The firebase.auth.AuthCredential type that was used.
	    	var credential = error.credential;
	    	// ...
	  	});
	};

});