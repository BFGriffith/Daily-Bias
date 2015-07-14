(function() {
  'use strict';

  angular.module('spin-zone')
    .controller('LoginController', function($scope, OAuth, $firebase) {
      var ref = new Firebase('https://spin-zone.firebaseio.com/');

      $scope.auth = OAuth.provideAuth;
      $scope.auth.$onAuth(function(OAuthData) {
        $scope.OAuthData = OAuthData;
        ref.child("users").child(OAuthData.uid).set({
          provider: OAuthData.provider,
          name: OAuthData.google.displayName,
          image: OAuthData.google.profileImageURL
        });
        console.log(OAuthData);
      });
      $scope.login = function() {
        OAuth.googleLogin();
      };
      $scope.checkAuth = function() {
        console.log(OAuth.OAuthStatus());
      };
      $scope.logout = function() {
        OAuth.googleLogout();
      };
    }) //END LoginController

  /*
    var ref = new Firebase("https://spin-zone.firebaseio.com");
    ref.authWithOAuthRedirect("google", function(error) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        // Don't want an else, as the page should redirect on success.
      }
    });
  */

  /**TODO: create a callback which logs the current auth state
   * @param ?
   * @return ?
   */

  /*
    function OAuthDataCallback(OAuthData) {
      if (OAuthData) {
        console.log("User " + OAuthData.uid + " is logged in with " + OAuthData.provider);
      } else {
        console.log("User is logged out");
      }
    }
  */

  /**TODO: register the callback to be fired every time auth state changes
   * @param ?
   * @return ?
   */
  // var ref = new Firebase("https://spin-zone.firebaseio.com");
  // ref.onAuth(OAuthDataCallback);


})();
