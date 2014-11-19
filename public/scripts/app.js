'use strict';

var redditclone = angular.module('redditclone',['ngRoute', 'ngResource', 'CommonService', 'ApiService', 'SocketService'])
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
            templateUrl: 'views/postCreate.html',
            controller: 'postCreateController'
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
