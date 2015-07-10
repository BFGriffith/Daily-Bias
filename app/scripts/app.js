/* global angular Firebase window */
/*TODO: remind eslint about angular http://eslint.org/docs/rules/no-undef.html*/
(function () {
'use strict';

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })

        .state('about', {

        });

});

})();
