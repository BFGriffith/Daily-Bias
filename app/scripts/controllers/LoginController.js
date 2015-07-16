/*global angular Firebase*/
(function() {
  'use strict';

  angular.module('daily-bias')
    .controller('LoginController', function() {
      var newUser = true;
      var ref = new Firebase("https://daily-bias.firebaseio.com");

    function login(){
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          //access token will allow us to make Open Graph API calls
          console.log(authData.facebook.accessToken);
        }
      }, {// the permissions requested...
        scope: "public_profile",
        remember: 'sessionOnly'
      })
    };
      function authDataCallback(authData) {
        if (authData) {
          console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);
        } else {
          console.log('User is logged out');
        }
      }

    });//END LoginController



// firebaseFB.onAuth(authDataCallback);
//       function getName(authData) {
//         switch (authData.provider) {
//           case 'password':
//             return authData.password.email.replace(/@.*/, '');
//           case 'twitter':
//             return authData.twitter.displayName;
//           case 'facebook':
//             return authData.facebook.displayName;
//         }
//       }
// var firebaseFB =
//       firebaseFB.onAuth(function(authData) {
//         if (authData) {
//           // save the user's profile into the database so we can list users,
//           // use them in Security and Firebase Rules, and show profiles
//           firebaseFB.child('users').child(authData.uid).update({
//             provider: authData.provider,
//             name: getName(authData)
//           });
//         }
//         console.log('work');
//       }); //end newUser Auth




})();//END IIFE


/*
  angular.module('daily-bias')
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
*/

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
