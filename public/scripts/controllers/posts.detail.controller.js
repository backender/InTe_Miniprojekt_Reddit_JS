angular.module('redditclone').controller('postDetailController', function($scope, Socket, Post, $routeParams, $location) {

    var currentId = $routeParams.id;
    $scope.post = Post.get({ id : currentId});

    //TODO: back as global function for each view
    $scope.back = function(){
        $location.path('/');
    }
});
