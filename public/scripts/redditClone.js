angular.module('App', ['Services']);

angular.module('App').controller('PostsController', function($scope) {
    $routeProvider.when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'posts.controller.js'
    });
})