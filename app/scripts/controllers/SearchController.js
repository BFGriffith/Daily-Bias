(function() {
    'use strict';
//http://stackoverflow.com/questions/4478992/
    google.load('search', '1');

    function searchcomplete() {
      var newsSearch = new google.search.NewsSearch();
      if (newsSearch.results && newsSearch.results.length > 0) {
        var searchResultsContainer = document.getElementById('searchResults');
        searchResultsContainer.style.display = 'block';
        for (var i = 0; i < newsSearch.results.length; i++) {
          var wrapper = document.createElement('div');
          var node = newsSearch.results[i].html.cloneNode(true);
          wrapper.className = 'gs-result';
          wrapper.appendChild(node);
          searchResultsContainer.appendChild(wrapper);
        }
      }
    }
    onload = function() {
      google.search.Search.getBranding('branding');
      //google branding
      var searchResultsContainer = document.getElementById('searchResults');

      var newsSearch1 = new google.search.NewsSearch();
      newsSearch1.setSearchCompleteCallback(this, searchcomplete, null);

      newsSearch1.execute("MSNBC");

      window.onload = function() {
        newsSearch.setSearchCompleteCallback(newsSearch, searchcomplete, null);
      }


      /**TODO: single search function with dummy data first, then both in parallel
       * @param $http.get(... + 'Fox' + 'q=?')
       * @param $http.get(... + 'MSNBC' + 'q=?')
       * @return {?}
       */

      /*
          angular.module('app')

          .controller('SearchController', function($http) {
              $http.get('https://ajax.googleapis.com/ajax/services/search/news' + '?v=1.0&' + 'q=obama' + '&callback=processResults')
                processResults({"responseData": {
                  "results": []
                }});
      */
      /*
      .then(function(response) {
            "responseData": {
            "results": [],
            "cursor": {}
          },
          "responseDetails": null | string - on - error,
          "responseStatus": 200 | error - code
        });
      */

    })();//end-IIFE


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

/**TODO: research if these would work better:
* https://developers.google.com/custom-search/
* http://www.faroo.com/hp/api/api.html
*/
