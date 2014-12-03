angular.module('redditclone').controller('postIndexController', function($scope, Page, Socket, Post, notify, $location){

    Page.setTitle('Post Index');

    $scope.posts = Post.query();

    Socket.on('AddLink', function (name) {
        console.log('New Link was added');
    });

    $scope.upVotePost = function(post){
        Post.upVote({ id : post.id });
    };

    $scope.downVotePost = function(post){
        Post.downVote({ id : post.id });
    };

    $scope.submit = function(post){

        $scope.post = new Post();
        $scope.post.title = post.title;
        $scope.post.url = post.url;

        $scope.post.$save(function(res){
            notify({message: 'Post erstellt'});

            //TODO: nicht Seite neu laden, sonern async
            $location.path('/');

            $("#newPostForm").hide();

        }, function(error){
            notify({message: 'Beim erstellen des Post ist ein Fehler aufgetreten  (Code:' + error.status + ')'});
            console.log(error);
            $scope.error = error;
        })
    };

    $( "#showNewPostForm" ).click(function() {
        $("#newPostForm").show("blind");
    });

    $( "#closeNewPostForm").click(function(){
        $( "#newPostForm").hide("blind");
    })

    $( "#newPostForm" ).hide();

    Socket.on('message',function(msg) {
        if((msg.action) == 'AddLink'){
            $scope.posts.push((msg.data));
        }
    });

});
