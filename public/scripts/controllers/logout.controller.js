angular.module('redditclone').controller('logoutController', function($scope, $rootScope, Page, $location, User) {

    $rootScope.auth = false;
    $location.path('/login');

});