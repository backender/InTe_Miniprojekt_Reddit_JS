'use strict';

var redditclone = angular.module('redditclone',['ngRoute', 'ngResource', 'CommonService', 'ApiService', 'SocketService','cgNotify'])
    .config(function($routeProvider) {
        $routeProvider.when('/posts', {
            templateUrl: 'views/postIndex.html',
            controller: 'postIndexController'
        });
        $routeProvider.when('/posts/:id', {
            templateUrl: 'views/postDetail.html',
            controller: 'postDetailController'
        });
        $routeProvider.when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerController'
        });
        $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        });
        $routeProvider.when('/logout', {
            templateUrl: 'views/login.html',
            controller: 'logoutController'
        });

        $routeProvider.otherwise({redirectTo: '/posts'});

});
