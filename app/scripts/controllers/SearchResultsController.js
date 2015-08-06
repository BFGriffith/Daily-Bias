(function() { //$http.jsonp to DOM — GoogleNews JSONP CORS workaround
'use strict';
angular.module('daily-bias')

.controller('SearchResultsController', function($http, $state, QueryFactory) {

    $http.jsonp('https://ajax.googleapis.com/ajax/services/search/news?callback=JSON_CALLBACK', {
        params: {
          "v": "1.0",
          "q": QueryFactory.getSearchQuery(),
          "hl": "en",
          "rsz": "8",
          "topic": "p",
          "start": "1"
        }
      })
      .then(function(response) {
        self.searchResults = response.data.responseData.results;
        //console.log(response);
        //console.log(self.searchResults);
      });

    // $scope.queryValue = sharedProperties.getQuery;
    // $scope.objectValue = sharedProperties.getObject();
    // $scope.setQuery = function(searchQuery) {
    //     $scope.objectValue.data = searchQuery;
    //     sharedProperties.setQuery(searchQuery);
    // };

    this.searchResults = [];
    var self = this;

/*
    //attempt at chaining differentSearch through QueryFactory...
    if(search.differentSearch() !== undefined) {
      function() {
          this.differentSearch = function() {
            this.differentSearch = '';
            var self = this;
          }
         };

            this = function() {
              QueryFactory.setSearchQuery(self.differentSearch);
              console.log(QueryFactory.getSearchQuery());
              $state.go('searchResults');
            };
          };
        else {
          return;
        }

      }; //END differentSearch function
    }; //END nesting function
}; //END conditional
*/

}); //END SearchController function
})(); //END IIFE

/*
if (search.differentSearch() !== null) {
.then(function(response) {
    this.differentSearch = function() {

      $http.jsonp('https://ajax.googleapis.com/ajax/services/search/news?callback=JSON_CALLBACK', {
        params: {
          "v": "1.0",
          "q": differentSearch,
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
      else {
        return;
      }

    }; //END differentSearch function
  }); //END nesting function
}; //END conditional
*/



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
