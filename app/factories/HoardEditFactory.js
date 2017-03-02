"use strict";
//$q is how we will make our database calls, returns promise
app.factory("HoardEditFactory", ($q, $http, FBCreds) => {

  let updateHoard = (hoardId, editedHoard) => {
    // Properties with leading $$ characters will be stripped since AngularJS uses these internally
    return $q(function(resolve, reject){
      $http.patch(`${FBCreds.databaseURL}/hoards/${hoardId}.json`,
        angular.toJson(editedHoard))
      .then(function(ObjectFromFirebase){
        resolve(ObjectFromFirebase);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };

  // We will return these so they can be part of Item storage
  return{updateHoard};

});

