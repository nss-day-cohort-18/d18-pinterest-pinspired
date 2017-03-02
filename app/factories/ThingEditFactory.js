"use strict";
//$q is how we will make our database calls, returns promise
app.factory("ThingEditFactory", ($q, $http, FBCreds) => {

  let updateThing = (thingId, editedThing) => {
    // Properties with leading $$ characters will be stripped since AngularJS uses these internally
    return $q(function(resolve, reject){
      $http.patch(`${FBCreds.databaseURL}/things/${thingId}.json`,
        angular.toJson(editedThing))
      .then(function(ObjectFromFirebase){
        resolve(ObjectFromFirebase);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };

  // We will return these so they can be part of Item storage
  return{updateThing};

});

