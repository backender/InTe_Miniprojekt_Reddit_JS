'use strict';

var redditclone = angular.module('redditclone',['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'postController'
        });
        $routeProvider.otherwise({redirectTo: '/'});
});

redditclone.controller('rootController'), function ($scope){

}