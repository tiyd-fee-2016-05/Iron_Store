// angular.module('myApp').controller('ProductForm', function($scope) {
var mainApp = angular.module('mainApp');
mainApp.controller('ProductForm',['$scope',function($scope){

  $scope.invoice = {
    items: [{
      name: 'nnn',
      description: 'nnn',
      image: 'nnn.com',
      price: 6.50}]

  };

  $scope.addItem = function(){
    $scope.invoice.items.push({
      name: '',
      description: '',
      image: '',
      price: 0
    });
  },
  $scope.removeItem = function(index){
    $scope.invoice.items.splice(index,1);
  }

}]);

// THIS SUCCESSFULL JSON SERVER TEST GET CALL CAN BE USED ON MAIN PRODUCT PAGE //
// mainApp.controller('myCtrl', function($scope, $http){
// $http({
//   method: 'GET',
//   url: 'http://localhost:3002/db'
// }).then(function successCallback(response) {
//   console.log(response);
// });
// });

mainApp.controller('myCtrl', function($scope, $http){
$http({
  method: 'GET',
  url: 'http://localhost:3002/db'
}).then(function successCallback(response) {
  console.log(response);
});
});
