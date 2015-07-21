(function() { //$http.jsonp to DOM — GoogleNews JSONP CORS workaround
  'use strict';
  angular.module('daily-bias')

  .controller('SearchController', function($http) {

    this.searchResults = [];
    var self = this;

      /*
      this.submitSearch = function() {
          $(document).ready(function() {
      */

    $http.jsonp('https://ajax.googleapis.com/ajax/services/search/news?v=1.0' + '&q=' + 'MSNBC%20' + 'barack%20obama' + '&callback=JSON_CALLBACK')
      .then(function(response) {
        self.searchResults = response.data.results;
        console.log(response);
        console.log(self.searchResults);
      });

  }); // END SearchController function
})(); //END IIFE



/*
          function localJsonpCallback(json) {
                  if (!json.Error) {
                      $('#resultForm').submit();
                  }
                  else {
                      $('#loading').hide();
                      $('#userForm').show();
                      alert(json.Message);
                  }
              }
*/

/*
  angular.module('daily-bias')

  .controller('SearchController', function submitSearch($http) {
      $http.get('https://ajax.googleapis.com/ajax/services/search/news?' + 'callback=JSON_CALLBACK', {
          params: {
            "version": "1.0",
            "language": "en"
          }
          .then
                console.log();
              });

        };
      };
*/
