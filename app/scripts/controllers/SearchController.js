(function() {
  'use strict';

  function loadApi() {
    google.load("search", "1", {
      "callback": pageLoaded
    });
  }

})(); //END IIFE
