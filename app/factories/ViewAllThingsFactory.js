"use strict";

//$q is how we will make our database calls, returns promise
app.factory("ViewAllThingsFactory", ($q, $http, FBCreds) => {

  let getAllThings = () => {
    console.log("this should fire");
    // Make something to hold items from firebase database
    let things = [];

    return $q((resolve, reject) => {
      // plug in url, we want it to evaluate on (user uid)
      // console.log("user list:",`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`);
      $http.get(`https://charm-aadb5.firebaseio.com/things.json`)
      .then((thingObject) => {
        console.log("thingObject: ", thingObject);
        let thingCollection = thingObject.data;
        let keys1 = Object.keys(thingCollection)
        console.log("thingCOllection", thingCollection);
        console.log("keys1", keys1);
        keys1.forEach((key) => {
          thingCollection[key].id = key;
          things.push(thingCollection[key]);
          console.log("thingCollection[key]", thingCollection[key]);

        resolve(thingObject);
        console.log(thingObject);
      })
      .catch((error) => {
        reject(error);

      });
    });
    });
  };
    return {getAllThings};
   });
  // pass new item so it can post it to firebase
  // let postNewItem = (newItem) => {
  //   return $q((resolve, reject) => {
  //     // Tell it to which collecton to post it to
  //     $http.post(`${FBCreds.databaseURL}/items.json`,
  //       JSON.stringify(newItem))
  //     .then((ObjectFromFirebase) => {
  //       resolve(ObjectFromFirebase);
  //     })
  //     // insead of success/error. with angular we use catch/error
  //     .catch((error) => {
  //       reject(error);
  //     });
  //   });
  // };
