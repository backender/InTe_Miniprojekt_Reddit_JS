angular.module('redditclone').controller('postDetailController', function($scope, Page, Post, $routeParams) {

    Page.setTitle('Post Detail');

    var currentId = $routeParams.id;
    $scope.post = Post.get({ id : currentId});

});
