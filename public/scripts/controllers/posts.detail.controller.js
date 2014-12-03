angular.module('redditclone').controller('postDetailController', function($scope, Page, Post, Comment, $routeParams, Socket) {

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

    //socket.io
    Socket.on('message', function(msg){
        if (msg.action == 'AddComment'){
            $scope.post.comments.push(msg.data);
        }else if(msg.action == 'CommentRated'){
            var comment = {};
            angular.forEach($scope.post.comments, function(_comment) {
                if(_comment.id == msg.data.id){
                    comment = _comment;
                }
            });
            comment.rating.value = msg.data.rating.value;
        }
    });

    //jquery:
    $( "#showNewCommentForm" ).click(function() {
        $("#newCommentForm").show("blind");
    });

    $( "#closeNewCommentForm").click(function(){
        $( "#newCommentForm").hide("blind");
    });

    $( "#newCommentForm" ).hide();
});