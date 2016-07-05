mainApp.controller('DetailGet', function($scope, $http){
$http({
  method: 'GET',
  url: 'http://localhost:3002/db'
}).then(function successCallback(response) {
  console.log(response);
  $scope.products = response.data;

  console.log(response.data.items.length);
  console.log($scope.products = response.data);
});
});
