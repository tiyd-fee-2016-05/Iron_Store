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
  console.log(response);
  // $scope.image = response.data[7].image;
  // for (var i = 0; i < response.data.length; i++) {
  // $scope.dataStuff = response.data.items[i].image;
  // }
  // $scope.dataStuff = response.data.items[i].image;
  $scope.products = response.data;
// }
  console.log(response.data.items[4].image);
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
