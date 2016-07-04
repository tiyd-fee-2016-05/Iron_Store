// angular.module('myApp').controller('ProductForm', function($scope) {
// var mainApp = angular.module('mainApp');

// mainApp.controller('ProductForm',['$scope',function($scope){
//
//   // DEFINES THE OBJECT & SCOPE WE'RE WORKING WITH? //
//   $scope.invoice = {
//     items: [{
//       name: '',
//       description: '',
//       image: '',
//       price: 0}]
//   };
//
//   // ADDS NEW ROW WITH BLANK TEXT VALUES //
//   $scope.addItem = function(){
//     $scope.invoice.items.push({
//       name: '',
//       description: '',
//       image: '',
//       price: 0
//     });
//   },
//
//   // REMOVES CURRENT ROW //
//   $scope.removeItem = function(index){
//     $scope.invoice.items.splice(index,1);
//     // do an $http remove call here ? //
//   }
// }]);


mainApp.controller('myCtrl', function($scope, $http){
$http({
  method: 'GET',
  url: 'http://localhost:3002/db'
}).then(function successCallback(response) {
  $scope.products = response.data;
  console.log($scope.products);
});

$scope.addItem = function(){
  $scope.products.items.push({
    name: '',
    description: '',
    image: '',
    price: 0
  });

  $("table").animate({ scrollTop: $("table")[0].scrollHeight}, 1000); // auto scroll-down
}

$scope.removeItem = function(index){

  $http({
    method: 'GET',
    url: 'http://localhost:3002/items'
  }).then(function successCallback(response) {
    // for (var i = 0; i < response.data.length; i++) {
    var itemID = response.data[index].id;
    console.log(itemID);
    console.log(response);
  // } // for loop
      $http({
        method: 'DELETE',
        url: 'http://localhost:3002/items/' + (itemID)
      }).then(function successCallback(response) {
        $scope.products.items.splice(index,-1);
      });

      console.log($scope.products.items.splice(index,1));
      console.log(index);
    }); // response
  }; // scope
}); // controller



mainApp.controller('SaveForm', function ($scope, $http){

  $scope.saveItem = function(){

    for (var i = 0; i < $scope.products.items.length; i++) {
      var a = [];
      dataStuff = {
      'name': $scope.products.items[i].name,
      'description': $scope.products.items[i].description,
      'image': $scope.products.items[i].image,
      'price': $scope.products.items[i].price
    };

    // while( i < dataStuff.length) {
    // a.push(dataStuff);
    // break;
    // }
    // console.log(a);
    console.log($scope.products.items.length);
    // console.log($scope.products.items[i].name);
  }
    console.log(dataStuff); // $http this //
    console.log(a);

    $http.post("http://localhost:3002/items", dataStuff).success(function(dataStuff) {
    console.log(dataStuff);
    })
}
});

 // });





// THIS SUCCESSFULL JSON SERVER TEST GET CALL CAN BE USED ON MAIN PRODUCT PAGE //



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
