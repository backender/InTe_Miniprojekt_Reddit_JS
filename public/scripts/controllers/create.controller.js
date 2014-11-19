angular.module('redditclone').controller('createController', function($scope, Socket, Post) {
    console.log('Hello from the create Controller');


    $scope.submit = function(post){

        $scope.post = new Post();
        $scope.post.title = post.title;
        $scope.post.url = post.url;
        //

        $scope.post.$save();


    }

});



