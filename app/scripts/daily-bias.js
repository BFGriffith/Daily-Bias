/*global angular*/
/*TODO: remind eslint about angular http://eslint.org/docs/rules/no-undef.html*/
(function() {
  'use strict';

  angular.module('daily-bias', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/404');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/views/home.html',
          controller: 'SearchController',
          controllerAs: 'submitSearch'
        }) //END Search
        .state('searchResults', {
          url: '/results',
          templateUrl: '/views/searchResults.html'
        }) //END Results
        .state('login', {
          url: '/login',
          templateUrl: '/views/login.html'
            // controller: 'LoginController',
            // controllerAs: 'login'
        }) //END Login
        .state('about', {
          url: '/about',
          templateUrl: '/views/about.html'
        }) //END about
        .state('404', {
          url: '/404',
          templateUrl: '/views/404.html'
        }); //END 404
    }); //END routing function
  angular.module('daily-bias').constant('FIREBASE_URL', 'https://daily-bias.firebaseio.com/');
})();
