redditclone.module('RedditClone').controller('PostsController', function($scope, $http) {
    console.log('Hello from the Frontpage Controller');
    $scope.name = 'Paul';

    $http.get('http://localhost/entries').
        success(function(data) {
            $scope.entries = data;
        });
});