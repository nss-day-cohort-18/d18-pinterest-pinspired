"use strict";
// Allows to filter through search that were typing into box
app.factory("NewHoardFactory", function($q, $http, FBCreds){


  let postNewHoard = (newHoard) => {
    return $q((resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/hoards.json`, 
        JSON.stringify(newHoard))
      .then((ObjectFromFirebase) => {
        resolve(ObjectFromFirebase);
      })
      .catch ((error) => {
        reject(error);
      });
    });
  };



return {postNewHoard};



});