"use strict";
// Allows to filter through search that were typing into box
app.factory("ViewAllHoardsFactory", function($q, $http, FBCreds){

	let getAllHoards = (userId) => {
		return $q((resolve, reject) => {
		  $http.get(`${FBCreds.databaseURL}/hoards.json?orderBy="uid"&equalTo="${userId}'`)
		  .then((hoardsObject) => {
		    resolve(hoardsObject);
		    console.log(hoardsObject);
		    })
		  .catch((error) => {
		    reject(error);
		    });
		});
	};

return {getAllHoards};

});

	// let getItemList = (user) => {
	// 	let items = [];
	// 	return $q((resolve, reject) => {
	// 		$http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
	// 		.then((itemObject) => {
	// 			let itemCollection = itemObject.data;
	// 			Object.keys(itemCollection).forEach((key) => {
	// 				itemCollection[key].id = key;
	// 				items.push(itemCollection[key]);
	// 			});
	// 			resolve(items);
	// 		})
	// 		.catch((error) => {
	// 			reject(error);
	// 		});
	// 	});
	// };
