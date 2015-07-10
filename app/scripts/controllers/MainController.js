/* global angular Firebase */

(function(){
    'use strict';

  var myApp = angular.module('myApp', ['ui.router']);

.controller('MainController', function($scope){
  var firebase = new Firebase('https://spin-zone.firebaseio.com/');

  var self = this;

  this.login = function(){
    firebase.authWithOAuthPopup('github', function(error, auth){
      $scope.$apply(function(){
      self.username = auth.github.username;
        console.log('Ghost in the Machine?');

      });
    });
  };

});
})();
