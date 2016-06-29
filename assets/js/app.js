var mainApp = angular.module('mainApp', ['ngRoute']));

mainApp.config(function($routeProvider){
  $routeProvider

  .when ('/adminproducts', {
    templateUrl: 'html/adminproducts.html',
    controller: 'AdminProducts'
  })

  .when ('/adminaddproduct', {
    templateUrl: 'html/adminaddproduct.html',
    controller: 'AdminAddProduct'
  })

  .when ('/admineditproduct', {
    templateUrl: 'html/admineditproduct.html',
    controller: 'AdminEditProduct'
  })

  .when ('/productcart', {
    templateUrl: 'html/productcart.html',
    controller: 'ProductCart'
  })

  .when ('/productdetails', {
    templateUrl: 'html/productdetails.html',
    controller: 'ProductDetails'
  })

  .when ('/productmain', {
    templateUrl: 'html/productmain.html',
    controller: 'ProductMain'
  })

  .when ('/productreceipt', {
    templateUrl: 'html/productreceipt.html',
    controller: 'ProductReceipt'
  });

});
