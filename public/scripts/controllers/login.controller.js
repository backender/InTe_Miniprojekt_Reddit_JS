angular.module('redditclone').controller('loginController', function($scope, $rootScope, Page, $location, User) {

    Page.setTitle('Login');

    $scope.login = function(credentials){

        $scope.user = new User();
        $scope.user.name = credentials.username;
        $scope.user.password = credentials.password;
        $rootScope.username = $scope.user.name;

        $scope.user.$login(function(res){
            $rootScope.auth = true;
            $location.path('/');
        },function(error){
            $rootScope.auth = false;
            console.log(error);
            $scope.error= error;
        });
    }

});