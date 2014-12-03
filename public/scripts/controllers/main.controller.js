angular.module('redditclone').controller('mainController', function($scope, $rootScope, Page, $location) {

    Page.setTitle('Home');

    $scope.$watch(function(scope){return Page.title }, function(newVal) {
        $scope.title = newVal;
        console.log(newVal);
    });

    $scope.backToHome = function(){
        $location.path('/');
    }
});