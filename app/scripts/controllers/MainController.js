/* global angular Firebase */
(function(){
    'use strict';

angular.module('tiy-upvote')

.controller('MainController', function($scope){
  var firebase = new Firebase('https://amber-torch-2854.firebaseapp.com');

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
