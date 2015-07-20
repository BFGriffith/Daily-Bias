(function() {
    'use strict';
    angular.module('daily-bias')

    .controller('SearchController', function($http) {

        this.searchResults = [];
        var self = this;

      /*
        this.submitSearch = function() {
            $(document).ready(function() {
            */


            $http.get("/api/left.json")
              .then (function(response) {
                // $.each(data.results, function(i, item) {
                //   jQuery('<div/>', {
                //     text: item.title
                //   }).appendTo('#results');
                // });
                self.searchResults = response.data.results;
                console.log(response);
                console.log(self.searchResults);
              });

          });// END SearchController
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

      //  }); //END SearchController function


  /*
  angular.module('daily-bias')
  .controller('SearchController', function() {

  this.submitSearch = function(){

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

  }
});


/*
  angular.module('daily-bias')
  .controller('SearchController', function($http) {
      var self = this;
      self.search = [];


this.submitSearch = function(){
      $http.get('https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=barack%20obama&callback=callback=processResults' + '.json')
        .then(function(response) {
          console.log(response);
          self.search = response.data;
        });
      };
    });
*/

  /*
  .controller('SearchController', function($http) {
      var self = this;
      self.search = [];


  this.submitSearch = function(){
      $http.jsonp('https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=barack%20obama&callback=JSON_CALLBACK')
        .then(function(response) {
          console.log(response);
          self.search = response.data;
        });
      };
    });
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
