var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function($routeProvider){
  $routeProvider

  .when ('/adminproducts', {
    templateUrl: 'html/adminproducts.html',
    css: 'assets/css/styles-adminproducts.css',
    controller: 'ProductForm'
  })

  // .when ('/adminaddproduct', {
  //   templateUrl: 'html/adminaddproduct.html',
  //   // controller: 'AdminAddProduct'
  // })
  //
  // .when ('/admineditproduct', {
  //   templateUrl: 'html/admineditproduct.html',
  //   // controller: 'AdminEditProduct'
  // })
  //
  .when ('/productcart', {
    templateUrl: 'html/productcart.html',
      css: 'assets/css/styles-productcart.css'
    // controller: 'ProductCart'
  })
  //

  .when ('/productdetails', {
    templateUrl: 'html/productdetails.html',
      css: 'assets/css/styles-productdetails.css'
    // controller: 'ProductDetails'
  })

  .when ('/productmain', {
    templateUrl: 'html/productmain.html',
    css: 'assets/css/styles-productmain.css',
    controller: 'MainGet'

    // controller: 'ProductMain'
  })
  //
  // .when ('/productreceipt', {
  //   templateUrl: 'html/productreceipt.html',
  //   // controller: 'ProductReceipt'
  // })

  .otherwise({
        redirectTo: '/adminproducts'
    });

});
