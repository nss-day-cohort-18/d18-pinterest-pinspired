"use strict";
//$q is how we will make our database calls, returns promise
app.factory("ItemStorage", ($q, $http, FBCreds) => {

  let getItemList = (user) => {
    console.log("this should fire");
    // Make something to hold items from firebase database
    let items = [];

    return $q((resolve, reject) => {
      // plug in url, we want it to evaluate on (user uid)
      console.log("user list:",`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`);
      $http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
      .then((itemObject) => {
        // get keys for all ofv the items
        let itemCollection = itemObject.data;
        console.log("item collection:", itemCollection);
        Object.keys(itemCollection).fgvorEach((key) => {
          // setting the ID to the key
          itemCollection[key].id = key;
          items.push(itemCollection[key]);
        });
        resolve(items);
        console.log(items);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };
  // pass new item so it can post it to firebase
  let postNewItem = (newItem) => {
    return $q((resolve, reject) => {
      // Tell it to which collecton to post it to
      $http.post(`${FBCreds.databaseURL}/items.json`,
        JSON.stringify(newItem))
      .then((ObjectFromFirebase) => {
        resolve(ObjectFromFirebase);
      })
      // insead of success/error. with angular we use catch/error
      .catch((error) => {
        reject(error);
      });
    });
  };

  let deleteItem = (itemId) => {
    console.log("delete in factory", itemId);
    return $q((resolve, reject) => {
      $http.delete(`${FBCreds.databaseURL}/items/${itemId}.json`)
      .then((ObjectFromFirebase) => {
        resolve(ObjectFromFirebase);
      });
    });
  };

  let getSingleItem = (itemId) => {
    return $q(function(resolve, reject) {
      $http.get(`${FBCreds.databaseURL}/items/${itemId}.json`)
      .then(function(itemObject){
        resolve(itemObject.data);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };

  let updateItem = (itemId, editedItem) => {
    // Properties with leading $$ characters will be stripped since AngularJS uses these internally
    return $q(function(resolve, reject){
      $http.patch(`${FBCreds.databaseURL}/items/${itemId}.json`,
        angular.toJson(editedItem))
      .then(function(ObjectFromFirebase){
        resolve(ObjectFromFirebase);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };

  // We will return these so they can be part of Item storage
  return{getItemList, postNewItem, deleteItem, getSingleItem, updateItem};

});

