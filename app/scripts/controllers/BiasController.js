/**
 * @param:
 * @return:
 */
(function() {
  angular.module('daily-bias')
    .controller('BiasController',
      function($state, $http, Submit, Restangular) {

        $(function rateBias(){
          $(".increment").click(function(){
            var biasRating = parseInt($("~ .biasRating", this).text());

            if($(this).hasClass("left" | "right")) {
              var biasRating = biasRating + 1;

               $("~ .biasRating", this).text(biasRating);
            } else {
              var biasRating = biasRating - 1;
               $("~ .biasRating", this).text(biasRating);
            }

            $(this).parent().addClass("bump");

            setTimeout(function(){
              $(this).parent().removeClass("bump");
            }, 400);
          }); //END increment
        }); //END bias-rating function
      }); //END BiasController

})(); //END IIFE
