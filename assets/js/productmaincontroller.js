// mainApp.controller('MainGet', function($scope, $http){
// $http({
//   method: 'GET',
//   url: 'http://localhost:3002/db'
// }).then(function successCallback(response) {
//   console.log(response);
//   $scope.image = response.data[7].image;
// });
// });

mainApp.controller('MainGet', function($scope, $http){
$http({
  method: 'GET',
  url: 'http://localhost:3002/db'
}).then(function successCallback(response) {
  // curly brace in line above seems to close out in a commented-out line
  console.log(response);
  // $scope.image = response.data[7].image;
  // for (var i = 0; i < response.data.length; i++) {
  // $scope.dataStuff = response.data.items[i].image;
  // }
  // $scope.dataStuff = response.data.items[i].image;
  $scope.products = response.data;
// }
  // console.log(response.data.items[4].image);
  console.log(response.data.items.length);
  console.log($scope.products = response.data);
  // $scope.dataStuff = {
  // 'name': $scope.data.items[7].name,
  // 'description': $scope.data.items[7].description,
  // 'image': $scope.data.items[7].image,
  // 'price': $scope.data.items[7].price
  // };
});
});


// experimenting below from http://stackoverflow.com/questions/24175119/angularjs-dynamically-populate-details-from-json-based-on-item-selected-------------------------
// mainApp.controller('MainGet', ['$scope', 'itemsFactory', function($scope, itemsFactory){
//   var promise = itemsFactory.itemDetails();
//
//     promise.then(function (data) {
//         $scope.itemDetails = data;
//         console.log(data);
//     });
// }]);


// experimental code below from http://paynoattn.com/blog/dev/simple-angularjs-listdetail-view-using-ui-router----------------------------------------
// It uses ui.router, rather than ng-route, so not sure how to modify code

// angular.module('routerApp', ['ng-router']);.controller('listController', ['$scope', '$http', '$state', '$location', function($scope, $http, $state, $location) {
//     $http.get('data.json').success(function(data){
//       $scope.thisAlbum = $state.params.id;
//       $scope.products = data;
//     });
// }]);
