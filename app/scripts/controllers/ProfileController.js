(function() {
  'use strict';
  angular.module('form-demo', [])
    .controller('MainController', function() {
      alert('it lives!');

      this.submission = { };

            this.saveSubmission = function(submission){
              this.log(submission);
            }

            this.log = function(){
              console.log(arguments);
              this.logged = JSON.stringify(arguments, null, 2);
      };
    })
})();
