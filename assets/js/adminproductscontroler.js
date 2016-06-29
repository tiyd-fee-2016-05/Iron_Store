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
