(function() {
    'use strict';
    angular.module('app')

    .controller('SearchController', function($http) {
        $http.get('https://ajax.googleapis.com/ajax/services/search/news' + '?v=1.0&' + 'q=obama')
          .then(function(response) {
              "responseData": {
                "results": [],
                "cursor": {}
              },
              "responseDetails": null | string - on - error,
              "responseStatus": 200 | error - code
            });
          });

    })();


/*
"cursor": {
  "pages": [[
    { "start": "0", "label": 1 },
    { "start": "4", "label": 2 },
    { "start": "8", "label": 3 },
    { "start": "12","label": 4 } ]],
  "estimatedResultCount": "48758",
  "currentPageIndex": 0,
  "moreResultsUrl": "http://www.google.com/search..."
}
*/
/*TODO: research if this would work better:
https://developers.google.com/custom-search/
*/
