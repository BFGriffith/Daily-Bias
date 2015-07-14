(function() {
    'use strict';
    //angular.module('app')

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
                a.href="/news-search/v1/newsSearch.results[i].url;"
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
    angular.module('spin-zone'('SearchController'))
        .controller('SearchController', function($scope, $http) {
          var self = this;
          this.news = [];
            $http.get("https://ajax.googleapis.com/ajax/services/search/news" + '?v=1.0&' + 'q=MSNBC')
              .then(function(response) {
              console.log(response.data);
              self.news = response.data;
            });
        });
*/
/*
  $( "#search" ).click(function() {
    alert( "click-handler called" );
  $.getJSON('https://ajax.googleapis.com/ajax/services/search/news' + '?MSNBC')
  .then(function(){
        console.log(results);
      })
  });
*/

})();//END IIFE

/*TODO: research if this would work better:
https://developers.google.com/custom-search/
*/
