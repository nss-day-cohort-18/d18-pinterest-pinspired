"use strict";
var app = angular.module("PinterestApp", ["ngRoute"]);
//used to authenticate user when navigating to other views
let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
    console.log("userExists", userExists);
        if (userExists){
      console.log("Authenticated, go ahead.");
            resolve();
        }else {
      console.log("Authentication rejected, go away.");
            reject();
        }
    });
});
//setup routing to other views
app.config(function($routeProvider) {
  $routeProvider.
  // When user gets to page, nothing shows,
  // user needs to be logged in
    when('/', {
      templateUrl: 'partials/login.html',
      controller: "UserCtrl"
    }).
    // login page/ pop up?
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: "UserCtrl"
    }).
    // When you logout, go to login screen
  when('/logout', {
    templateUrl: 'partials/login.html',
    controller: "UserCtrl"
  }).
  when('/hoardist/allthingslist',{
    // goes to ng-view
    templateUrl: "partials/view-all-things.html",
    controller: 'ViewAllThingsCtrl'
    // resolve: {isAuth}
  }).
  when('/hoardist/newthing', {
    templateUrl: "partials/new-thing.html",
    controller: 'NewThingCtrl'
    // resolve: {isAuth}
    }).
  when('/hoardist/newhoard', {
    templateUrl: "partials/new-hoard.html",
    controller: 'NewHoardCtrl'
    // resolve: {isAuth}
  }).
  when('/hoardist/:thingId', {
    templateUrl: "partials/view-thing.html",
    controller: 'ViewThingCtrl'
    // resolve: {isAuth}
  }).
  when('/hoardist/:thingId/edit', {
    templateUrl: 'partials/thing-edit.html',
    controller: 'ThingEditCtrl'
    // resolve: {isAuth}
  }).
  when('/hoardist/allhoardslist',{
    // goes to ng-view
    templateUrl: "partials/view-all-hoards.html",
    controller: 'ViewAllHoardsCtrl'
    // resolve: {isAuth}
  }).
  when('/hoardist/:hoardId', {
    templateUrl: "partials/view-hoard.html",
    controller: 'ViewHoardCtrl'
    // resolve: {isAuth}
  }).
  when('/hoardist/:hoardId/edit', {
    templateUrl: 'partials/hoard-edit.html',
    controller: 'HoardEditCtrl'
    // resolve: {isAuth}
  }).
  when('hoardist/:thingId/save', {
    templateUrl: 'partials/save-to-hoard.html',
    controller: 'SaveThingToHoardCtrl'
    // resolve: {isAuth}
  }).
  // You have to login, before showing any lists to user
  otherwise('/');
});


app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});