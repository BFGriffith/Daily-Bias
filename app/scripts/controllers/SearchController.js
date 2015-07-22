(function() { //$http.jsonp to DOM — GoogleNews JSONP CORS workaround
'use strict';
angular.module('daily-bias' ['daily-bias'])


.controller('SearchController', function($scope, $http, $state) {
  $scope.widget = {
    title: 'abc'
  };

  $scope.set = function(new_title) {
    this.widget.title = new_title;
  }


  /*
      this.searchQuery = [];
      var self = this;

      this.submitQuery = function() {
  */




  $state.go('searchResults');
//});
//}; //END nesting function
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
