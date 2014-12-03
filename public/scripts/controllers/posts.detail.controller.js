angular.module('redditclone').controller('postDetailController', function($scope, Page, Post, Comment, $routeParams) {

    Page.setTitle('Post Detail');

    var currentId = $routeParams.id;
    $scope.post = Post.get({ id : currentId});

    $scope.submit = function(comment){
        var c = new Comment();
        c.text = comment.text;

        c.$save({ parentId : $scope.post.id });

        $( "#newCommentForm").hide("blind");
    };

    $scope.upVoteComment = function(comment){
        Comment.upVote({ id : comment.id });
    };

    $scope.downVoteComment = function(comment){
        Comment.downVote({ id : comment.id });
    };


    $( "#showNewCommentForm" ).click(function() {
        $("#newCommentForm").show("blind");
    });

    $( "#closeNewCommentForm").click(function(){
        $( "#newCommentForm").hide("blind");
    });

    $( "#newCommentForm" ).hide();
});