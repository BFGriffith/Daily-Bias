(function() {
  'use strict';
  angular.module('profileForm', [])
    .controller('MainController', function() {
      alert('it lives!');

      this.submission = {};

      /**
       * @param {FormController} $form submitted
       */
      this.saveSubmission = function($form) {
        if (!$form.$dirty || !$form.$valid) return;
        // Do nothing if nothing is submitted or if invalid

        this.submission.created_on = new Date;

        this.log(this.submission);

        this.submission = {}; // Reset the form...
      }

      this.log = function() {
        console.log(arguments);
        this.logged = JSON.stringify(arguments, null, 2);
      };
    })
})();
