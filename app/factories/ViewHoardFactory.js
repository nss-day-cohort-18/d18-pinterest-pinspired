"use strict";
// Allows to filter through search that were typing into box
app.factory("ViewHoardFactory", function($q, $http, FBCreds){

  let getSingleHoard = (hoardId) => {
    return $q(function(resolve, reject){
      $http.get(`${FBCreds.databaseURL}/hoards/${hoardId}.json`)
      .then(function(hoardObject){
        resolve(hoardObject.data);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };


return {getSingleHoard};


});

