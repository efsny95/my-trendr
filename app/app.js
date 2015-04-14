'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngResource'
]).
config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'js/views/HomeView.html',
      controller: 'HomeController'
    })
    .when('/submit',{
      templateUrl: 'js/views/TrendView.html',
      controller: 'TrendController'
    })
    .otherwise({redirectTo: '/'});
    /*$httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common = 'Content-Type: application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];*/

}]).filter('encodeURIComponent', function() {
  return window.encodeURIComponent;
});

