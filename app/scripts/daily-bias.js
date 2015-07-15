/*global angular Firebase*/
/*TODO: remind eslint about angular http://eslint.org/docs/rules/no-undef.html*/
(function() {
  'use strict';

  angular.module('daily-bias', ['ui.router', 'firebase'])
  .config(function($stateProvider, $urlRouterProvider) {

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
      $stateProvider.when('login', {
        url: '/login',
        templateUrl: '/views/login.html'
        controller: 'LoginController',
        controllerAs: 'login'
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
  angular.module('daily-bias').constant('FIREBASE_URL', 'https://spin-zone.firebaseio.com/');
})();
