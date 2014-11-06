angular.module('redditclone').controller('postController', function($scope, $http) {
    console.log('Hello from the Frontpage Controller');

    $http.get('http://localhost:4730/entries').
            success(function(data) {
                    $scope.entries = data;
    });

});