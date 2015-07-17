(function() {
  'use strict';




  angular.module('daily-bias')
  .controller('SearchController', function($http) {
      var self = this;
      self.search = [];



      $http.jsonp('https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=barack%20obama&callback=JSON_CALLBACK')
        .then(function(response) {
          console.log(response);
          self.search = response.data;
        });
    });


/*
  function loadApi() {
    google.load("search", "1", {
      "callback": pageLoaded
    });
  }
*/

/*
  angular.module('daily-bias')

  .controller('SearchController', function submitSearch($http) {
      $http.get('https://ajax.googleapis.com/ajax/services/search/news' + '?callback=JSON_CALLBACK', {
          params: {
            "version": "1.0",
            "language": "en"
          }
          .then
                console.log();
              });//END params

        };
      };
*/


})(); //END IIFE
