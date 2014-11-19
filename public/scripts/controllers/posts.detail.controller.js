angular.module('redditclone').controller('postDetailController', function($scope, Socket, Post, $routeParams) {

    var currentId = $routeParams.id;
    $scope.post = Post.get({ id : currentId});

});
