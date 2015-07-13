(function() {
  'use strict';
  var ref = new Firebase("https://spin-zone.firebaseio.com");
  ref.authWithOAuthRedirect("google", function(error) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      // We'll never get here, as the page will redirect on success.
    }
  });
  /**TODO: create a callback which logs the current auth state
   * @param ?
   * @return ?
   */
  function authDataCallback(authData) {
    if (authData) {
      console.log("User " + authData.uid + " is logged in with " + authData.provider);
    } else {
      console.log("User is logged out");
    }
  }

  /**TODO: register the callback to be fired every time auth state changes
   * @param ?
   * @return ?
   */
  var ref = new Firebase("https://spin-zone.firebaseio.com");
  ref.onAuth(authDataCallback);

})();
