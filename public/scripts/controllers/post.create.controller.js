angular.module('redditclone').controller('postCreateController', function($scope, Page, Socket, Post ) {
    console.log('Hello from the create Controller');

    Page.setTitle('Create Post')

    $scope.submit = function(post){

        $scope.post = new Post();
        $scope.post.title = post.title;
        $scope.post.url = post.url;
        //

        $scope.post.$save();


    }

});



