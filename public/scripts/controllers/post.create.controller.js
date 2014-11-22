angular.module('redditclone').controller('postCreateController', function($scope, Page, Socket, Post, $location, notify )

    {

    console.log('Hello from the create Controller');

    Page.setTitle('Create Post')

    $scope.submit = function(post){

        $scope.post = new Post();
        $scope.post.title = post.title;
        $scope.post.url = post.url;
        //

        $scope.post.$save(function(res){
            notify({message: 'Post erstellt'});
            $location.path('/');
        }, function(error){
            notify({message: 'Beim erstellen des Post ist ein Fehler aufgetreten  (Code:' + error.status + ')'});

        console.log(error);
            $scope.error = error;
        })
    }

});



