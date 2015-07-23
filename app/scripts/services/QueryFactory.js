(function() {
    angular.module('daily-bias')
      .factory('QueryFactory', function() {

        var searchQuery = null;

        return {
          setSearchQuery: function(search) {
            searchQuery = search;
          },
          getSearchQuery: function() {
            return searchQuery;
          }
        };

      });// END factory
  })();// END IIFE
