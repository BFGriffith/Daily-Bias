(function() {
    'use strict';
    //angular.module('app')

$(document).ready(function(){
    $.getJSON("http://www.faroo.com/api?q=iphone&start=1&length=10&l=en&src=news&f=json",
        function(data){
          $.each(data.results, function(i,item){
			jQuery('<div/>', {  text: item.title }).appendTo('#results');
          });
        });
  });

/*
    .controller('SearchController', function($scope, $http) {
    return $resource('https://ajax.googleapis.com/ajax/services/search/news' + '?MSNBC', {}, {

            });
        })
*/
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
