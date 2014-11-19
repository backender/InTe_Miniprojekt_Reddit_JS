angular.module('redditclone').controller('registerController', function($scope, $location, User) {

    $scope.register = function(credentials){

        $scope.user = new User();
        $scope.user.name = credentials.username;
        $scope.user.password = credentials.password;

        $scope.user.$register(function(res){
            $location.path('/');
        },function(error){
            console.log(error);
            $scope.error= error;
        });
    }

});