/*global angular restangular firebase*/
/*TODO: remind eslint about angular http://eslint.org/docs/rules/no-undef.html*/
(function() {
  'use strict';

  angular.module('daily-bias', [
    'ui.router',
    'firebase',
    'restangular'
    ])

    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/404');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/views/home.html',
          controller: 'SearchController',
          controllerAs: 'search'
        }) //END Search

        .state('searchResults', {
          url: '/results',
          templateUrl: '/views/searchResults.html',
          controller: 'SearchResultsController',
          controllerAs: 'submitSearch'
        }) //END SearchResultsController

        .state('login', {
          url: '/login',
          templateUrl: '/views/login.html'
          // controller: 'LoginController',
          // controllerAs: 'login'
        }) //END LoginController

        .state('addComment', {
          url: '/comment',
          templateUrl: '/views/addComment.html'
        }) //END addComment
        .state('comments', {
          url: '/comments',
          templateUrl: '/views/comments.html'
        }) //END comments

        .state('about', {
          url: '/about',
          templateUrl: '/views/about.html'
        }) //END about

        .state('404', {
          url: '/404',
          templateUrl: '/views/404.html'
        }); //END 404

        angular.module('daily-bias').constant('FIREBASE_URL', 'https://daily-bias.firebaseio.com/');
        /*
        .config(function(RestangularProvider) {
          //set base url for api calls on restful services
          RestangularProvider.setBaseUrl('https://ajax.googleapis.com/ajax/services/search/news');
        });
        */
  }); //END routing function
})(); // END IIFE
