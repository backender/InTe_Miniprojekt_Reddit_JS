'use strict';

var redditclone = angular.module('redditclone',['ngRoute', 'ngResource', 'Services'])
    .config(function($routeProvider) {
        $routeProvider.when('/posts', {
            templateUrl: 'views/postIndex.html',
            controller: 'postIndexController'
        });
        $routeProvider.when('/posts/:id', {
            templateUrl: 'views/postDetail.html',
            controller: 'postDetailController'
        });
        $routeProvider.when('/create', {
            templateUrl: 'views/create.html',
            controller: 'createController'
        });
        $routeProvider.when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerController'
        });
        $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        });

        $routeProvider.otherwise({redirectTo: '/posts'});
});

redditclone.controller('rootController'), function ($scope){

}