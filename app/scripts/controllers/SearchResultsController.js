(function() { //$http.jsonp to DOM — GoogleNews JSONP CORS workaround
  'use strict';
  angular.module('daily-bias')

  .controller('SearchResultsController', function($http, $state) {

    this.searchResults = [];
    var self = this;

    this.submitSearch = function() {

      $http.jsonp('https://ajax.googleapis.com/ajax/services/search/news?callback=JSON_CALLBACK', {
        params: {
          "v": "1.0",
          "q": "barack obama",
          "hl": "en",
          "rsz": "8",
          "topic": "p",
          "start": "1"
        }
      })

      .then(function(response) {
        self.searchResults = response.data.responseData.results;
        console.log(response);
        //console.log(self.searchResults);
      });
    }; //END nesting function
  }); //END SearchController function
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
