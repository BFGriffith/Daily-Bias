(function() {
  'use strict';
  // https://developers.google.com/news-search/v1/devguide
  // This code generates a "Raw Searcher" to handle search queries. The Raw
  // Searcher requires you to handle and draw the search results manually.
  google.load('search', '1');

  var newsSearch;

  function searchComplete() {

    // Check that we got results
    document.getElementById('content').innerHTML = '';
    if (newsSearch.results && newsSearch.results.length > 0) {
      for (var i = 0; i < newsSearch.results.length; i++) {

        // Create HTML elements for search results
        var p = document.createElement('p');
        var a = document.createElement('a');
        a.href = "/news-search/v1/newsSearch.results[i].url;"
        a.innerHTML = newsSearch.results[i].title;

        // Append search results to the HTML nodes
        p.appendChild(a);
        document.body.appendChild(p);
      }
    }
  }

  function onLoad() {

    // Create a News Search instance.
    newsSearch = new google.search.NewsSearch();

    // Set searchComplete as the callback function when a search is
    // complete.  The newsSearch object will have results in it.
    newsSearch.setSearchCompleteCallback(this, searchComplete, null);

    // Specify search quer(ies)
    newsSearch.execute('Barack Obama');

    // Include the required Google branding
    google.search.Search.getBranding('branding');
  }

  // Set a callback to call your code when the page loads
  google.setOnLoadCallback(onLoad);

  /*
      angular.module('app').controller("SearchController", function(){
          var search = this;
          search.title = {{results.title}};
          search.searchInput = '';
      });
  */

  /*
      $(document).ready(function(){
          $.getJSON("http://www.faroo.com/api?q=google&start=1&l=en&src=web&f=json",
              function(data){
                $.each(data.results, function(i,item){
      			jQuery('<div/>', {  text: item.title }).appendTo('#results');
                });
              });
        });
  */

  /*
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
        */

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

})(); //end-IIFE


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

/*
var newSearch = document.querySelectorAll('input.new-search');
  addEventListener('keyup', function EnterKey(event){
		//given an HTML element <input class="new-search">
		if ( event.keyCode === 13 ){
      ?
		}
});
*/

/**TODO: research if these would work better:
 * https://developers.google.com/custom-search/
 * http://www.faroo.com/hp/api/api.html
 */
