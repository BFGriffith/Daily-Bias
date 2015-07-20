/**
 * @param:
 * @return:
 */
(function() {
  angular.module('daily-bias')
    .controller('CommentController',
      function($state, $http, Submit, Restangular) {
        var self = this;
        this.comments;

        this.comment = {
          publisher: '',
          parentArticle: '',
          title: '',
          commentText: '',
          createdOn: '',
          createdBy: ''
        };


        this.addComment = function() {
          var timestamp = new Date().getTime();
          self.comment.createdOn = timestamp;
          self.comment.createdBy = self.authData.facebook.username;
          var author = self.comment.login;
          var parentArticle = self.article_url;
          var title = self.comment.title;
          var commentText = self.comment.commentText;


          self.comment = {
            publisher: '',
            parentArticle: '',
            title: '',
            commentText: '',
            createdOn: '',
            createdBy: ''
          };
          $state.go('comments');
        }; //END addComment
      }); //END CommentController

})();
