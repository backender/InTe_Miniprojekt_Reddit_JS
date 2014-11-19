'use strict';

var redditclone = angular.module('redditclone',['ngRoute', 'ngResource', 'Services'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/posts.html',
            controller: 'postController'
        });
        $routeProvider.when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerController'
        });
        $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        });
        $routeProvider.otherwise({redirectTo: '/'});
});

redditclone.controller('rootController'), function ($scope){

}