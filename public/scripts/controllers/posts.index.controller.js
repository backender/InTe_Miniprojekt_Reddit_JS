angular.module('redditclone').controller('postIndexController', function($scope, Page, Socket, Post, notify){

    Page.setTitle('Post Index');

    $scope.posts = Post.query();
    $scope.posts.sort();

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
            notify({message: 'Post created'});
            $scope.posts.push((msg.data));
        }

        if((msg.action) == 'EntryRated'){
            var post = {};
            angular.forEach($scope.posts, function(_post) {
                if(_post.id == msg.data.id){
                    post = _post;
                }
            });
            post.rating.value = msg.data.rating.value;
        }
    });

});
