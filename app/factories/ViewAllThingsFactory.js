"use strict";

//$q is how we will make our database calls, returns promise
app.factory("ViewAllThingsFactory", ($q, $http, FBCreds) => {

  let getThings = () => {
    console.log("this should fire");
    // Make something to hold items from firebase database
    // let items = [];

    return $q((resolve, reject) => {
      // plug in url, we want it to evaluate on (user uid)
      // console.log("user list:",`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`);
      $http.get(`https://charm-aadb5.firebaseio.com/things.json`)
      .then((pinsObject) => {
        // get keys for all of the items
        // let itemCollection = itemObject.data;
        // console.log("item collection:", itemCollection);
        // Object.keys(itemCollection).forEach((key) => {
        //   // setting the ID to the key
        //   itemCollection[key].id = key;
        //   items.push(itemCollection[key]);

        resolve(pinsObject);
        console.log(pinsObject);
      })
      .catch((error) => {
        reject(error);

      });
    });
   }
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