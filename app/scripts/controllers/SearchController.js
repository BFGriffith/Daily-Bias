(function() { // create searchQuery
  'use strict';
  angular.module('daily-bias')
  .controller('SearchController', function(QueryFactory, $state) {
  this.newSearch = '';
  var self = this;

  this.fireSearch = function(){
    QueryFactory.setSearchQuery(self.newSearch);
    //console.log(QueryFactory.getSearchQuery());
    $state.go('searchResults');
  };

});
})();
/*
      app.service('sharedProperties', function() {
        var queryValue = 'test query value';
        var objectValue = {
          data: 'test object value'
        };

        return {
          getString: function() {
            return queryValue;
          },
          setString: function(value) {
            queryValue = value;
          },
          getObject: function() {
            return objectValue;
          }
        }
      });

      app.controller('SearchController', function($scope, $timeout, sharedProperties) {
        $scope.queryValue = sharedProperties.getQuery();
        $scope.objectValue = sharedProperties.getObject().data;
      });

      $state.go('contact-list');
    }) // END SearchController
})(); //END IIFE

/*
(function() { // create searchQuery
  'use strict';
  angular.module('daily-bias' ['daily-bias'])

  .controller('SearchController', function(queries, $state) {
      this.searchQuery = {};

      this.saveQuery = function($form) {
        // do nothing if nothing is submitted or if invalid
        if (!$form.$dirty || !$form.$valid) return;

        queries.create(this.query);

        this.searchQuery = {}; // reset

        $state.go('searchResults');
      }; // END saveQuery

    }) // END SearchController
})(); //END IIFE
*/

/*
    this.searchQuery = [];
    var self = this;

    this.submitQuery = function() {
*/




//  $state.go('searchResults');
//});
//}; //END nesting function
//}); //END SearchController function



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
