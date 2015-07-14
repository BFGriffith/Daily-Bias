/*global angular*/
/*TODO: remind eslint about angular http://eslint.org/docs/rules/no-undef.html*/
(function() {
  'use strict';

  var routerApp = angular.module('routerApp', ['ui.router']);

  routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/404');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/views/home.html'
      })
      .state('searchResults', {
        url: '/results',
        templateUrl: '/views/searchResults.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/views/login.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/views/about.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: '/views/404.html'
      });
  });
  angular.module('spin-zone').constant('FIREBASE_URL', 'https://spin-zone.firebaseio.com/');
})();
