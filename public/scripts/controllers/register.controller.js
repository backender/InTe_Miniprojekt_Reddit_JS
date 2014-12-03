angular.module('redditclone').controller('registerController', function($scope, $rootScope, Page, $location, User) {

    Page.setTitle('Register')

    $scope.register = function(credentials){

        $scope.user = new User();
        $scope.user.name = credentials.username;
        $scope.user.password = credentials.password;
        $rootScope.username = credentials.username;

        $scope.user.$register(function(res){
            $rootScope.auth = true;
            $location.path('/');
        },function(error){
            console.log(error);
            $scope.error= error;
        });
    }

});