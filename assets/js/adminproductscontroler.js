// angular.module('myApp').controller('ProductForm', function($scope) {
// var mainApp = angular.module('mainApp');

mainApp.controller('ProductForm',['$scope',function($scope){

  $scope.invoice = {
    items: [{
      name: '',
      description: '',
      image: '',
      price: 0}]
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

  $scope.saveItem = function(){

    for (var i = 0; i < $scope.invoice.items.length; i++) {
    dataStuff = [{
      'name': $scope.invoice.items[i].name,
      'description': $scope.invoice.items[i].description,
      'image': $scope.invoice.items[i].image,
      'price': $scope.invoice.items[i].price
    }] }
    console.log(dataStuff);

    // $http.post("http://localhost:3002/items", dataStuff).success(function(dataStuff) {
    // console.log(dataStuff);
    // })

  }



}]);

// THIS SUCCESSFULL JSON SERVER TEST GET CALL CAN BE USED ON MAIN PRODUCT PAGE //
mainApp.controller('myCtrl', function($scope, $http){
$http({
  method: 'GET',
  url: 'http://localhost:3002/db'
}).then(function successCallback(response) {
  console.log(response);
});
});




//

// mainApp.controller('myCtrl', function($scope, $http){
//   // $scope.item = {item.name};
//   $scope.newName = "";
//   $scope.sendPost = function() {
//     var data = $.param({
//       // json: JSON.stringify({
//         name: $scope.newName
//       })
//     });
//     $http.post("http://localhost:3002/db", data).success(function(data, status)
//     {
//       $scope.item = data;
//       console.log(data);
//   })
// }
// })

// mainApp.controller('myCtrl', function($scope, $http){
//     // $scope.invoice.items = {item}
//     $http({
//       method: 'POST',
//       url: 'http://localhost:3002/db',
//       data: {
//         'name': $scope.name,
//         'description': $scope.description,
//         'price': $scope.price
//       }
//     })
//     .success(function(data) {
//       console.log(data);
//
//     })
//     })



  // });
