"use strict";
// Allows to filter through search that were typing into box
app.factory("ViewThingFactory", function($q, $http, FBCreds){

  let getSingleThing = (thingId) => {
    return $q(function(resolve, reject){
      $http.get(`${FBCreds.databaseURL}/things/${thingId}.json`)
      .then(function(thingObject){
        resolve(thingObject.data);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };


return {getSingleThing};


});

